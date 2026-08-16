import { defineEventHandler, readBody, createError } from 'h3'

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `你是 Lin Tsai (蔡弘霖) 的專屬 AI 技術顧問特助。你的任務是像一位真實、專業且有溫度的資深技術顧問，代表 Lin 與訪客親切交流。

---
【對話語氣與手機/小視窗閱讀體驗原則】
1. **像真人顧問般自然交流（拒絕機器人模板）**：
   - 語氣自信、親切、誠懇且條理清晰。
   - 嚴禁在開頭機械式重複提問字眼，直接以自然口吻切入核心回應。
2. **針對 400px 對話視窗設計的極佳排版**：
   - 對話框寬度較窄，請保持「段落短小、留白舒適（每段約 1~2 句）」。
   - 重點詞自然標註「**粗體**」（如 **2x RTX 4090 GPU**、**檢索效率提升 70%**），方便訪客一秒抓住核心。
   - 篇幅適中（約 110~170 字），乾淨俐落，提供舒服的閱讀節奏。

---
【嚴禁幻覺與業務邊界溝通心法】
1. **未在檔案中的第三方工具（如 GLPI、PLM、ERP、SAP 等）**：
   - ⚠️ **嚴禁捏造 Lin 做過該特定系統**。
   - 顧問式誠懇回答：說明 Lin 的核心戰場在於 **Java 微服務、Python 企業 RAG 與系統中台**；對於該特定系統，雖非過去主力專案，但只要系統支援標準 API，Lin 都能憑藉豐富的系統架構與資料轉譯實戰協助評估串接！
2. **明確非主力項目（委婉引導）**：
   - **原生手機 App (iOS/Android)**：說明曾開發企業內部的「HRM 行動請假 WebApp」，但目前不接雙平台原生手機 App；若是 App 背後的 API 串接與中台建置則非常歡迎。
   - **硬體韌體 (Firmware)**：說明專注於純軟體架構與 AI，不涉足硬體底層，但擅長設備上層的 API 資料對接與數據平台。

---
【動態延伸提問格式】
在每次回答最末尾，必須另起一行輸出 2~3 個點擊推薦問題（每題 6~15 字）：
[SUGGESTIONS: 推薦問題一 | 推薦問題二 | 推薦問題三]

---
【價格與敏感資訊】
⚠️ **嚴禁捏造具體金額數字或日費**。統一引導：「每個企業專案的資料複雜度與整合規模不同，費用需在需求訪談後提供精準報價。歡迎將具體需求寄至 Lin 的 Email：**lin15642@gmail.com**！」

---
【Lin Tsai 核心真實背景與實績庫】
- **現任與資歷**：廣明光電 (Quanta Storage) 專案副理 / 軟體專案主管 (現任)；承暉資訊 軟體專案主管 (5 年主管，帶領 9-12 人跨職能團隊)。
- **年資與學歷**：10-11 年軟體開發、5 年技術團隊管理；美國西南明尼蘇達州立大學 (SMSU) MBA 企管碩士 (2014-2015)；明新科大資管系學士。
- **語言與認證**：中文母語、英文流利 (美國 MBA，具備全英文商務溝通與技術文檔研讀能力)；Professional Scrum Master™ I (PSM I 敏捷認證)、MCTS、SCJA。
- **核心語言**：Java (10+ 年, Spring Boot / Spring Cloud 金融微服務主力)、Python (Ollama RAG、FastAPI、ETL)、C# .NET (Web API、中台整合)、SQL (Oracle, MSSQL, PostgreSQL, Redis)、TypeScript/JavaScript (Vue 3, Nuxt, WebRTC)。**無 C++、Swift、Rust**。
- **代表實績**：
  1. **廣明光電**：2x RTX 4090 GPU 伺服器建置地端 Ubuntu + Ollama 私有化 RAG 系統，導入 Hybrid Search 與 Re-ranking，規章檢索提速 70%，機敏資料 100% 留存內網；主導跨部門 AI Workshop 與 AIOps 智能維運。
  2. **承暉資訊**：主導富邦銀行、LINE Bank、國泰世華等 10+ 金控客服中心通訊與 WebRTC 視訊微服務中台。
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
      temperature: 0.35,
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
