import { defineEventHandler, readBody, createError } from 'h3'

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `你是 Lin Tsai (蔡弘霖) 的個人專屬 AI 技術顧問特助。你的任務是代表 Lin 以清晰、精準、好閱讀且具備實績佐證的方式回答訪客問題。

---
【排版與閱讀性原則】
1. **結構分明、排版優美**：
   - 採用「簡明前言 + 2~3 個粗體重點條列 + 簡短結語」的結構。
   - 條列時請加上適當換行與粗體標題，方便快速閱讀。
2. **長度適中**：每次回答約 **120~180 字**，禁止一大坨無分段長文，也禁止單詞乾癟列點。
3. **主體正確**：一律稱呼「Lin」或「Lin 的團隊」，嚴禁在開頭機械式重複提問字眼。

---
【嚴禁幻覺與業務邊界原則（嚴格執行）】
1. **未提及的特定第三方工具（如 GLPI、PLM、ERP、SAP 等）**：
   - ⚠️ **嚴禁捏造 Lin 在廣明或承暉做過該特定工具**！
   - 正確回答：說明 Lin 的核心專長在於 **Java/Spring Cloud 微服務、Python 企業 RAG 與 C# .NET 系統中台**；對於該特定工具（如 GLPI / PLM），雖非主力專案，但可憑藉深厚的 API 串接與軟體架構實務評估整合可行性。
2. **明確不承接項目（委婉說明）**：
   - **雙平台原生手機 App (iOS/Android)**：說明曾開發企業內部「HRM 請假行動 WebApp」，但不承接雙平台原生手機 App。
   - **硬體韌體 (Firmware) / 嵌入式底層**：說明專注於純軟體架構與 AI，不涉足硬體底層，但可協助設備上層 API 與數據平台對接。
   - **純廣告行銷代操 (FB/Google Ads) / 美編**：說明不接純廣告代操，但若為行銷推播/排程中台或 AI 文案工作流則為強項。

---
【動態延伸提問格式】
在每次回答最末尾，必須另起一行輸出 2~3 個點擊推薦問題（每題 6~15 字）：
[SUGGESTIONS: 推薦問題一 | 推薦問題二 | 推薦問題三]

---
【價格與敏感資訊】
⚠️ **嚴禁捏造具體金額數字或日費**。統一引導：「每個企業專案的資料複雜度與整合規模不同，費用需在需求訪談後提供精準報價。歡迎將需求寄至 Lin 的 Email：**lin15642@gmail.com**！」

---
【Lin Tsai 核心背景與真實檔案】
- **現任與資歷**：廣明光電 (Quanta Storage) 專案副理 / 軟體專案主管 (現任)；承暉資訊 軟體專案主管 (5 年主管，管理 9-12 人跨職能團隊)。
- **年資與學歷**：10-11 年軟體開發、5 年技術管理；美國西南明尼蘇達州立大學 (SMSU) MBA 企管碩士 (2014-2015)；明新科大資管系學士。
- **語言與認證**：中文母語、英文流利 (美國 MBA，具備全英文商務溝通與技術文檔研讀能力)；Professional Scrum Master™ I (PSM I 認證)、MCTS、SCJA。
- **核心語言**：Java (10+ 年, Spring Boot / Spring Cloud 金融微服務主力)、Python (Ollama RAG、FastAPI、ETL)、C# .NET (Web API、中台整合)、SQL (Oracle, MSSQL, PostgreSQL, Redis)、TypeScript/JavaScript (Vue 3, Nuxt, WebRTC)。**無 C++、Swift、Rust**。
- **金融通訊 CTI（非手機 App）**：主導富邦銀行、LINE Bank、國泰世華等 10+ 金控客服中心通訊與 WebRTC 視訊微服務中台。
- **聯絡資訊**：lin15642@gmail.com ｜ LinkedIn: linkedin.com/in/lin-tsai-software`

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{ messages: Array<{ role: 'user' | 'assistant' | 'system'; content: string }> }>(event)

    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: '請提供有效的 messages 對話陣列。'
      })
    }

    const config = useRuntimeConfig()
    const apiKey = (config.groqApiKey as string) || process.env.GROQ_API_KEY || process.env.OPENAI_API_KEY || ''
    const primaryModel = (config.groqModel as string) || process.env.GROQ_MODEL || 'llama-3.3-70b-versatile'

    if (!apiKey) {
      console.warn('[AI Assistant] GROQ_API_KEY is not configured.')
      return {
        reply: `⚠️ **提醒**：目前後端尚未設定 \`GROQ_API_KEY\`。\n\n請在專案根目錄的 \`.env\` 檔案中填入您的 Groq API Key：\n\`\`\`bash\nGROQ_API_KEY=gsk_your_groq_api_key_here\n\`\`\`\n\n歡迎直接透過 Email 聯繫 Lin：**lin15642@gmail.com**！`,
        suggestions: ['如何取得 Groq API Key', 'Lin 的背景與專案實績', '聯絡 Lin 的 Email']
      }
    }

    // 保留最近 3 則對話並清洗掉舊的 SUGGESTIONS 標籤（大幅壓縮 Token，避免 429 限流）
    const recentMessages = body.messages
      .slice(-3)
      .map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: String(msg.content)
          .replace(/\[SUGGESTIONS:\s*[^\]]+\]/gi, '')
          .replace(/SUGGESTIONS:\s*[^\n\r]+/gi, '')
          .trim()
      }))

    const payload = {
      model: primaryModel,
      messages: [
        {
          role: 'system',
          content: SYSTEM_PROMPT
        },
        ...recentMessages
      ],
      temperature: 0.3,
      max_tokens: 380,
      top_p: 0.85
    }

    let replyContent = ''

    // 專注呼叫高品質 LLaMA 3.3 70B 模型（若遇瞬間 429 則自動等待 1.2s 重試，杜絕低階備援模型幻覺）
    try {
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
      replyContent = response?.choices?.[0]?.message?.content?.trim() || ''
    } catch (primaryError: any) {
      console.warn(`[AI Assistant] Primary call encountered error (${primaryError?.message}). Retrying once...`)
      
      // 自動等待 1.2 秒避開瞬間滑動視窗限流
      await new Promise((resolve) => setTimeout(resolve, 1200))

      try {
        const retryResponse = await $fetch<{
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
        replyContent = retryResponse?.choices?.[0]?.message?.content?.trim() || ''
      } catch (retryError: any) {
        console.error('[AI Assistant] Retry also failed:', retryError)
        return {
          reply: `💬 目前 AI 助理連線較為頻繁，為確保回覆的專業性與真實度，請稍候 3~5 秒後再次提問；或直接透過 Email 聯繫 Lin：**lin15642@gmail.com**！`,
          suggestions: ['了解 Lin 在廣明光電的 AI 實績', '詢問金融級通訊中台專案架構', '直接寄信聯絡 Lin']
        }
      }
    }

    if (!replyContent) {
      return {
        reply: `抱歉，目前暫時無法取得回覆，請稍後再試或透過 Email (**lin15642@gmail.com**) 與 Lin 聯絡。`,
        suggestions: ['了解 Lin 的核心技術棧', '詢問企業顧問合作方式']
      }
    }

    // 解析引導推薦提問（兼容 [SUGGESTIONS: ...] 與 SUGGESTIONS: ... 兩種格式）
    let cleanReply = replyContent
    let suggestions: string[] = []

    const suggestionMatch = replyContent.match(/(?:\[SUGGESTIONS:\s*([^\]]+)\]|SUGGESTIONS:\s*([^\n\r]+))/i)
    const rawSuggestions = suggestionMatch?.[1] || suggestionMatch?.[2]

    if (rawSuggestions) {
      suggestions = rawSuggestions
        .split('|')
        .map((s) => s.trim().replace(/^[•\-\d.]\s*/, ''))
        .filter((s) => s.length > 0 && s.length <= 25)

      // 從對話本文中徹底移除標籤
      cleanReply = replyContent
        .replace(/\[SUGGESTIONS:\s*[^\]]+\]/gi, '')
        .replace(/SUGGESTIONS:\s*[^\n\r]+/gi, '')
        .trim()
    }

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

    return {
      reply: `AI 助理服務暫時繁忙，請稍候幾秒後重試，或直接寄信至 **lin15642@gmail.com** 聯繫 Lin！`,
      suggestions: ['了解 Lin 的專案實績', '直接寄信聯絡 Lin']
    }
  }
})
