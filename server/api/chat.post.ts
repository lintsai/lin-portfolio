import { defineEventHandler, readBody, createError } from 'h3'

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `你是 Lin Tsai (蔡弘霖) 的專屬 AI 技術特助。你的任務是代表 Lin 簡潔、精準、客觀且專業地回答訪客問題。

---
【極簡精煉對話守則】
1. **控制篇幅**：每次回覆本文控制在 **90~150 字以內**。言簡意賅，直指核心。
2. **精準有力**：直接回答核心，重點條列最多 **2~3 點**。
3. **身份一致**：請以「Lin 的 AI 助理」或稱呼「Lin」的角度客觀回覆。
4. **深度架構底蘊**：當被問及深度技術時，給出業界資深架構師的精準解法（例如快取防護、地端AI選型、Scrum協調）。

---
【動態延伸提問產生（最重要）】
在每次回答的最末尾，請「必須」另起一行，以固定標籤格式輸出 2~3 個與剛才對話內容高度相關、能引導訪客繼續深入探討的點擊推薦問題（每題 6~15 字）：
格式：
[SUGGESTIONS: 推薦問題一 | 推薦問題二 | 推薦問題三]

---
【價格與敏感資訊守則】
⚠️ **嚴禁自行捏造任何具體金額數字、日費或專案價格**。
當訪客詢問「費用」、「具體報價」或「薪資」時，統一說明：
「每個企業專案的資料複雜度、硬體算力環境與系統整合規模皆不同，費用需在需求訪談或 PoC 評估後才能提供精準報價。建議您將具體需求寄至 Lin 的 Email：**lin15642@gmail.com**，Lin 會親自與您評估並提供客製化提案！」

---
【Lin Tsai 核心背景與專業解法庫】
- **身份**：廣明光電 專案副理 / 軟體專案主管 (現任)；承暉資訊 軟體專案主管 (歷任 5 年主管，帶 9-12 人團隊)。
- **年資**：10-11 年軟體開發、5 年技術管理。
- **學歷**：美國西南明尼蘇達州立大學 MBA 碩士；明新科大資管系學士。
- **認證**：PSM I (Scrum 敏捷認證)、MCTS、SCJA。
- **聯絡**：lin15642@gmail.com ｜ LinkedIn: linkedin.com/in/lin-tsai-software

【經典技術架構思維（問及時可直接運用）】
1. **Ollama 地端部署 vs. 公有雲 API**：
   - 核心考量為「企業機敏數據 100% 不落地外流」、避免雲端 Token 費用爆表與連線延遲，透過 2x RTX 4090 GPU 本地運行即可滿足內部高併發需求。
2. **高併發 Redis 快取防護**：
   - 快取穿透：布隆過濾器 (Bloom Filter) + 空值快取。
   - 快取擊穿：分散式互斥鎖 (Mutex Lock) 重建快取。
   - 快取雪崩：過期時間加上隨機鹽值 (Random TTL)。
3. **Scrum 團隊衝突協調**：
   - PSM I 敏捷心法：透過 Sprint Retrospective 回顧會議對事不對人、聚焦商業價值與 Sprint 交付目標、建立開放的心理安全感。
4. **金融 CTI 通訊中台**：
   - 富邦/LINE Bank/國泰世華：Spring Cloud 微服務解耦、WebRTC 雙向視訊、金融資安稽核與高可用架構。

---
【業務邊界與合作】
- **適合承接**：企業私有化 AI/RAG 建置、高併發後端微服務重構、全渠道客服 CTI 通訊中台、AIOps/GPU 維運平台、系統架構與敏捷顧問。
- **明確不接**：純廣告代操 (FB/Google Ads)、純美編/影片剪輯、韌體/嵌入式/消費性電子底層開發。若被問及廣告案，說明不接純代操，但若為行銷推播/排程中台或 AI 文案工作流則為強項。`

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{ messages: Array<{ role: 'user' | 'assistant' | 'system'; content: string }> }>(event)

    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: '請提供有效的 messages 對話陣列。'
      })
    }

    // 取得 API Key 與模型設定
    const config = useRuntimeConfig()
    const apiKey = (config.groqApiKey as string) || process.env.GROQ_API_KEY || process.env.OPENAI_API_KEY || ''
    const model = (config.groqModel as string) || process.env.GROQ_MODEL || 'llama-3.3-70b-versatile'

    // 若未設定 API Key，提供友善引導回覆
    if (!apiKey) {
      console.warn('[AI Assistant] GROQ_API_KEY is not configured in environment variables.')
      return {
        reply: `⚠️ **提醒**：目前後端尚未設定 \`GROQ_API_KEY\`。\n\n請在專案根目錄的 \`.env\` 檔案中填入您的 Groq API Key：\n\`\`\`bash\nGROQ_API_KEY=gsk_your_groq_api_key_here\n\`\`\`\n\n您可以至 [Groq Console](https://console.groq.com/keys) 免費申請 API Key。\n\n若有任何技術合作或求職諮詢，歡迎直接透過 Email 聯繫 Lin：**lin15642@gmail.com**！`,
        suggestions: ['如何取得 Groq API Key', 'Lin 的背景與專案實績', '聯絡 Lin 的 Email']
      }
    }

    // 過濾並限制對話歷史長度（保留最近 8 則對話）
    const recentMessages = body.messages
      .slice(-8)
      .map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: String(msg.content).trim()
      }))

    // 組裝完整的 LLM 請求 Payload
    const payload = {
      model: model,
      messages: [
        {
          role: 'system',
          content: SYSTEM_PROMPT
        },
        ...recentMessages
      ],
      temperature: 0.35,
      max_tokens: 450,
      top_p: 0.85
    }

    // 呼叫 Groq API (相容 OpenAI 規格)
    const response = await $fetch<{
      choices?: Array<{
        message?: {
          content?: string
        }
      }>
    }>('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: payload
    })

    const replyContent = response?.choices?.[0]?.message?.content?.trim()

    if (!replyContent) {
      throw createError({
        statusCode: 502,
        statusMessage: 'AI 模型未回傳有效內容，請稍後再試。'
      })
    }

    // 解析引導推薦提問 [SUGGESTIONS: ... ]
    let cleanReply = replyContent
    let suggestions: string[] = []

    const suggestionMatch = replyContent.match(/\[SUGGESTIONS:\s*([^\]]+)\]/i)
    if (suggestionMatch && suggestionMatch[1]) {
      suggestions = suggestionMatch[1]
        .split('|')
        .map((s) => s.trim().replace(/^[•\-\d.]\s*/, ''))
        .filter((s) => s.length > 0 && s.length <= 25)

      // 從對話本文中移除標籤
      cleanReply = replyContent.replace(/\[SUGGESTIONS:\s*[^\]]+\]/gi, '').trim()
    }

    // 若模型未產出或格式異常時的智慧備援推薦
    if (suggestions.length === 0) {
      suggestions = [
        '了解 Lin 在廣明光電的 AI 實績',
        '詢問金融級通訊中台專案架構',
        '如何與 Lin 展開企業顧問合作'
      ]
    }

    return {
      reply: cleanReply,
      suggestions: suggestions.slice(0, 3)
    }
  } catch (error: any) {
    console.error('[AI Assistant API Error]:', error)
    
    if (error.statusCode) {
      throw error
    }

    const errorMessage = error?.data?.error?.message || error?.message || '未知錯誤'
    throw createError({
      statusCode: 500,
      statusMessage: `AI 助理服務暫時無法連線 (${errorMessage})。歡迎直接寄信至 lin15642@gmail.com 聯繫 Lin！`
    })
  }
})
