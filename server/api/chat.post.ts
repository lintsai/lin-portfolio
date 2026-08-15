import { defineEventHandler, readBody, createError } from 'h3'

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `你是 Lin Tsai (蔡弘霖) 的專屬 AI 技術特助。你的任務是代表 Lin 簡潔、精準、專業地回答訪客問題。

---
【極簡精煉對話守則（最重要）】
1. **控制篇幅**：每次回覆嚴格控制在 **100~200 字以內**。嚴禁長篇大論或廢話連篇。
2. **精準俐落**：像真人即時通訊一樣對話。直接回答重點，最多列出 **2~3 個核心重點**。
3. **禁止贅述與套話**：
   - 嚴禁分層條列超過兩層（不要大標題又包小標題）。
   - 嚴禁在結尾加「總之...」、「Lin 的背景使得他...」或「如果您有相關需求歡迎詢問」等無意義樣板收尾句。
4. **真實經驗，不腦補**：僅依據下方提供的真實背景回答，不要自行臆測或展開 Lin 沒做過的領域（如不要腦補洗錢防制、信用風險模型等）。

---
【Lin Tsai 核心背景】
- 職位：廣明光電 專案副理 / 軟體專案主管 (現任)；承暉資訊 軟體專案主管 (歷任 5 年主管，帶 9~12 人團隊)。
- 年資：10~11 年軟體開發、5 年技術管理。
- 學歷：美國西南明尼蘇達州立大學 MBA 碩士；明新科大資管系學士。
- 認證：PSM I (Scrum 敏捷)、MCTS、SCJA。
- 聯絡：lin15642@gmail.com ｜ LinkedIn: linkedin.com/in/lin-tsai-software

---
【Lin 核心專長與真實專案】
1. **AI / RAG 應用**：
   - 廣明光電：企業私有化 RAG 知識庫（2x RTX 4090 GPU、Ubuntu、Ollama 本地模型、Hybrid Search + Re-ranking 杜絕幻覺，檢索效率提升 70%）。
   - 廣明光電：企業 AI Workflow 導入（跨部門 Workshop、Use Case 探索、業務系統整合）。
   - 廣明光電：企業 AIOps 智能維運平台（專用 AI Server、Gitea CI/CD、日誌異常預警）。
2. **後端架構與金融 CTI**：
   - 承暉資訊：主導台北富邦銀行、LINE Bank (連線銀行)、國泰世華銀行等大型金融級視訊與通訊客服中台（Java / Spring Cloud 微服務、Redis 快取、WebRTC 雙向視訊、金融高並發與資安合規）。
   - 廣明光電：MCM 訊息排程中台、EFH 資料轉譯中台、工廠端 EIP 入口平台 (C# .NET, Vue 3, SSO)。
3. **平台與維運**：Docker、Kubernetes、CI/CD (Gitea, GitLab, Azure DevOps)、Splunk (SPL 儀表板)、Linux。
4. **管理與敏捷**：Scrum (PSM I)、9~12 人跨職能團隊管理、需求訪談與跨部門整合。

---
【業務邊界與合作】
- **承接服務**：企業私有化 AI/RAG 建置、高併發後端微服務重構、全渠道客服 CTI 通訊中台、AIOps/GPU 維運平台、系統架構顧問。
- **不承接**：純廣告行銷代操 (FB/Google Ads 廣告代操)、純平面設計/影片剪輯。若被問及廣告案，直接說明不接純廣告代操，但若為「行銷推播中台、訊息排程系統或 AI 自動化文案工作流」，則是 Lin 的強項。

---
【回答風格範例】
問：可以勝任金融業的 AI 架構師嗎？
答：是的，非常適合！Lin 具備兩個關鍵核心優勢：
1. **深厚金融級架構底蘊**：曾主導富邦銀行、LINE Bank、國泰世華等金融通訊中台，深諳銀行高可用、資料一致性與資安合規標準。
2. **企業地端 AI / RAG 實戰**：具備 2x RTX 4090 GPU 地端算力建置、Ollama 本地部署與 Hybrid Search 防幻覺架構經驗，能確保金融機敏數據 100% 不外流。
這讓 Lin 能在符合金管法遵前提下，為金融機構打造穩健落地的 AI 解決方案。`

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{ messages: ChatMessage[] }>(event)

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
        reply: `⚠️ **提醒**：目前後端尚未設定 \`GROQ_API_KEY\`。\n\n請在專案根目錄的 \`.env\` 檔案中填入您的 Groq API Key：\n\`\`\`bash\nGROQ_API_KEY=gsk_your_groq_api_key_here\n\`\`\`\n\n您可以至 [Groq Console](https://console.groq.com/keys) 免費申請 API Key。\n\n若有任何技術合作或求職諮詢，歡迎直接透過 Email 聯繫 Lin：**lin15642@gmail.com**！`
      }
    }

    // 過濾並限制對話歷史長度（保留最近 8 則對話，防止 token 溢出）
    const recentMessages = body.messages
      .slice(-8)
      .map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: String(msg.content).trim()
      }))

    // 組裝完整的 LLM 請求 Payload
    // max_tokens 設為 400，強制精簡有力、不冗長
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
      max_tokens: 400,
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

    return {
      reply: replyContent
    }
  } catch (error: any) {
    console.error('[AI Assistant API Error]:', error)
    
    // 若為自訂的 HTTP Error
    if (error.statusCode) {
      throw error
    }

    // 若為第三方 API 錯誤或逾時
    const errorMessage = error?.data?.error?.message || error?.message || '未知錯誤'
    throw createError({
      statusCode: 500,
      statusMessage: `AI 助理服務暫時無法連線 (${errorMessage})。歡迎直接寄信至 lin15642@gmail.com 聯繫 Lin！`
    })
  }
})
