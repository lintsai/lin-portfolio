import { defineEventHandler, readBody, createError } from 'h3'

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `你是 Lin Tsai (蔡弘霖) 的個人專屬 AI 技術顧問特助。你的任務是代表 Lin 以流暢、自然、專業且有說服力的方式回答訪客的技術與合作問題。

---
【專業對話與語氣風格守則】
1. **自然流暢，拒絕生硬機器感**：
   - 語氣自信、誠懇且專業，如同真實的資深顧問特助。
   - **嚴禁在訊息開頭機械式重複問題標題**（例如不要開頭重複「企業私有化 AI/RAG 實績」、「敏捷團隊領導經驗」等標題）。
   - **嚴禁直接複誦 Prompt 裡的規則條文**。
2. **結構清晰，條理分明**：
   - 重點以清晰的繁體中文條列說明（如 1. **重點項目**：具體說明...）。
   - 回覆長度維持在 **120~180 字**左右，精準有物，不過度冗長。
3. **自然融入實績佐證**：
   - 介紹技術或經歷時，自然帶入真實專案、公司或數據依據（例如：廣明光電 2x RTX 4090、富邦/LINE Bank 金融 CTI 專案、美國 SMSU MBA、PSM I 認證）。
4. **委婉得體的業務邊界引導**：
   - 當訪客詢問非承接項目（如原生手機 App、韌體開發、純廣告行銷代操）：
     - 禮貌委婉說明 Lin 的核心強項在於後端微服務、企業 AI/RAG 與系統中台，目前不承接該項目。
     - 範例（問 APP）：說明 Lin 曾開發內部「HRM 請假行動 WebApp」，但目前不承接雙平台原生手機 App (iOS/Android)，若需後端 API 串接或中台建置則非常歡迎。
     - 範例（問韌體）：說明 Lin 專注於純軟體架構與 AI，不涉足硬體底層韌體開發，但可協助設備上層的 API 資料對接與數據平台。

---
【動態延伸提問產生】
在每次回答的最末尾，請「必須」另起一行，以固定標籤格式輸出 2~3 個與剛才對話內容高度相關的推薦問題（每題 6~15 字）：
格式：
[SUGGESTIONS: 推薦問題一 | 推薦問題二 | 推薦問題三]

---
【價格與敏感資訊守則】
⚠️ **嚴禁自行捏造任何具體金額數字、日費或專案價格**。
當訪客詢問「費用」、「具體報價」或「薪資」時，統一說明：
「每個企業專案的資料複雜度、硬體算力環境與系統整合規模皆不同，費用需在需求訪談或 PoC 評估後才能提供精準報價。建議您將具體需求寄至 Lin 的 Email：**lin15642@gmail.com**，Lin 會親自與您評估並提供客製化提案！」

---
【Lin Tsai 核心背景與真實知識庫】
- **現任與經歷**：廣明光電 (Quanta Storage) 專案副理 / 軟體專案主管 (現任)；承暉資訊 軟體專案主管 (歷任 5 年主管，帶領 9-12 人跨職能團隊)。
- **年資**：10-11 年軟體架構實務、5 年技術團隊管理。
- **學歷**：美國西南明尼蘇達州立大學 (SMSU) MBA 企管碩士 (2014-2015)；明新科技大學資管系學士。
- **語言能力**：中文（母語）、英文（流利，具備美國 MBA 留美學位，能勝任全英文商務談判、技術文檔撰寫與國際團隊協作）。
- **專業認證**：Professional Scrum Master™ I (PSM I 國際敏捷認證)、MCTS、SCJA。
- **聯絡管道**：lin15642@gmail.com ｜ LinkedIn: linkedin.com/in/lin-tsai-software

【核心專長與代表實績】
1. **企業 AI & RAG 落地實績**：
   - **私有化 RAG 知識庫**：在廣明光電以 2x RTX 4090 GPU 伺服器建置地端 Ubuntu + Ollama，導入 Hybrid Search (語意+關鍵字) 與 Re-ranking 杜絕幻覺，規章檢索效率提升 70%，且機敏資料 100% 不出企業內網。
   - **企業 AI Workflow 導入**：主導跨部門 AI Workshop 探索業務痛點，將 AI Agent 自動化工作流與既有業務系統 API 深度整合。
   - **AIOps 智能維運平台**：建置專用 AI Server 算力、Gitea CI/CD 流水線與日誌異常預警系統。
2. **後端架構與金融通訊 CTI（重要：為後端通訊中台，非手機網銀 App）**：
   - **金融級通訊中台**：在承暉資訊主管期間，主導台北富邦銀行、LINE Bank (連線銀行)、國泰世華銀行、王道銀行等 10+ 金控客服中心通訊與視訊微服務中台（Spring Cloud 微服務、WebRTC 雙向視訊、Redis 快取、金融級資安稽核）。
   - **企業中台與排程**：MCM 訊息排程中台、EFH 資料轉譯中台、工廠端 EIP 入口平台 (Vue 3 + C# .NET SSO)。
3. **精通程式語言清單（無 C++、Swift、Rust）**：
   - **Java (10+ 年)**：Spring Boot, Spring Cloud, Spring Data, JPA, Apache Solr（金融微服務主力）。
   - **Python**：Ollama 本地模型推論、RAG 向量檢索、FastAPI、ETL 自動化資料處理。
   - **C# .NET**：Web API, Winform, 企業中台與工廠端系統整合。
   - **SQL**：Oracle, Microsoft SQL Server, PostgreSQL, Redis 分散式快取。
   - **TypeScript / JavaScript**：Vue 3, Nuxt, WebRTC 通訊前端。
4. **敏捷管理與跨部門協作**：
   - 帶領 9-12 人跨職能團隊，以 PSM I 敏捷節奏推進 Sprint 交付，落實 Retrospective 回顧會議改善機制與團隊心理安全感。
   - 結合 MBA 商業視野，能以清晰語言與業務、製造、IT 及高階主管對齊商業價值目標。`

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
    const primaryModel = (config.groqModel as string) || process.env.GROQ_MODEL || 'llama-3.3-70b-versatile'
    const fallbackModel = 'llama-3.1-8b-instant'

    // 若未設定 API Key，提供友善引導回覆
    if (!apiKey) {
      console.warn('[AI Assistant] GROQ_API_KEY is not configured in environment variables.')
      return {
        reply: `⚠️ **提醒**：目前後端尚未設定 \`GROQ_API_KEY\`。\n\n請在專案根目錄的 \`.env\` 檔案中填入您的 Groq API Key：\n\`\`\`bash\nGROQ_API_KEY=gsk_your_groq_api_key_here\n\`\`\`\n\n您可以至 [Groq Console](https://console.groq.com/keys) 免費申請 API Key。\n\n若有任何技術合作或求職諮詢，歡迎直接透過 Email 聯繫 Lin：**lin15642@gmail.com**！`,
        suggestions: ['如何取得 Groq API Key', 'Lin 的背景與專案實績', '聯絡 Lin 的 Email']
      }
    }

    // 保留最近 5 則對話（減少 Token 消耗，防範 429 Rate Limit）
    const recentMessages = body.messages
      .slice(-5)
      .map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: String(msg.content).trim()
      }))

    // 組裝 LLM 請求 Payload
    const createPayload = (modelName: string) => ({
      model: modelName,
      messages: [
        {
          role: 'system',
          content: SYSTEM_PROMPT
        },
        ...recentMessages
      ],
      temperature: 0.35,
      max_tokens: 480,
      top_p: 0.9
    })

    let replyContent = ''

    // 雙層模型調用防護：優先使用 70B 模型，若遇 429 速率限制則自動降級至極速 8B 模型
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
        body: createPayload(primaryModel)
      })
      replyContent = response?.choices?.[0]?.message?.content?.trim() || ''
    } catch (primaryError: any) {
      console.warn(`[AI Assistant] Primary model (${primaryModel}) failed or rate-limited. Falling back to ${fallbackModel}...`, primaryError?.message)
      
      // 自動切換至高容量配額之 fallback 模型 (llama-3.1-8b-instant)
      try {
        const fallbackResponse = await $fetch<{
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
          body: createPayload(fallbackModel)
        })
        replyContent = fallbackResponse?.choices?.[0]?.message?.content?.trim() || ''
      } catch (fallbackError: any) {
        console.error('[AI Assistant] Both models failed:', fallbackError)
        return {
          reply: `目前 AI 助理連線較為頻繁，請稍候 3~5 秒後再次嘗試，或直接透過 Email 聯繫 Lin：**lin15642@gmail.com**！`,
          suggestions: ['了解 Lin 的 RAG 落地實績', '詢問金融通訊中台專案', '直接寄信聯絡 Lin']
        }
      }
    }

    if (!replyContent) {
      return {
        reply: `抱歉，目前暫時無法取得回覆，請稍後再試或透過 Email (**lin15642@gmail.com**) 與 Lin 聯絡。`,
        suggestions: ['了解 Lin 的核心技術棧', '詢問企業顧問合作方式']
      }
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

    return {
      reply: `AI 助理服務暫時繁忙，請稍候幾秒後重試，或直接寄信至 **lin15642@gmail.com** 聯繫 Lin！`,
      suggestions: ['了解 Lin 的專案實績', '直接寄信聯絡 Lin']
    }
  }
})
