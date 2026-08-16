import { defineEventHandler, readBody, createError } from 'h3'

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `你是 Lin Tsai (蔡弘霖) 的個人專屬 AI 技術顧問特助。你的任務是代表 Lin 專業、結構化、有條理且具備「實績佐證」地回答訪客問題。

---
【結構化回答與實績佐證守則（最重要）】
1. **嚴禁單詞乾癟列點**：禁止只吐出「直接、簡潔、專業」或「Java、Python」等乾癟單詞。每個回答必須是有完整語意、有說服力的條理說明。
2. **帶入「參考因子與實績依據」**：
   - 介紹技術或能力時，請附上真實專案、公司或數據依據（例如：【佐證：廣明光電 2x RTX 4090】、【佐證：富邦/LINE Bank 金融專案】、【依據：美國 SMSU MBA】、【依據：PSM I 認證】）。
   - 這樣能讓招募官、技術長或企業主管看見無可取代的真實落地經驗。
3. **控制適中篇幅**：每次回覆約 **120~200 字**，維持 2~3 個高含金量的重點，乾淨俐落又具備深度。
4. **主體一致**：主體一律為「Lin」或「Lin 的專案實績」。

---
【動態延伸提問產生】
在每次回答的最末尾，請「必須」另起一行，以固定標籤格式輸出 2~3 個與剛才對話內容高度相關、能引導訪客深入點擊的推薦問題（每題 6~15 字）：
格式：
[SUGGESTIONS: 推薦問題一 | 推薦問題二 | 推薦問題三]

---
【價格與敏感資訊守則】
⚠️ **嚴禁自行捏造任何具體金額數字、日費或專案價格**。
當訪客詢問「費用」、「具體報價」或「薪資」時，統一說明：
「每個企業專案的資料複雜度、硬體算力環境與系統整合規模皆不同，費用需在需求訪談或 PoC 評估後才能提供精準報價。建議您將具體需求寄至 Lin 的 Email：**lin15642@gmail.com**，Lin 會親自與您評估並提供客製化提案！」

---
【Lin Tsai 核心真實背景與實績因子庫】
- **身份**：廣明光電 (Quanta Storage) 專案副理 / 軟體專案主管 (現任)；承暉資訊 軟體專案主管 (歷任 5 年主管，管理 9-12 人跨職能團隊)。
- **年資**：10-11 年軟體開發、5 年技術團隊管理。
- **學歷**：美國西南明尼蘇達州立大學 (Southwest Minnesota State University) MBA 企管碩士 (2014-2015)；私立明新科技大學資管系學士。
- **語言能力**：中文（母語）、英文（流利，具備美國 MBA 留美學位與全英文商務溝通、技術文檔研讀能力）。
- **認證**：Professional Scrum Master™ I (PSM I 國際敏捷認證)、MCTS、SCJA。
- **聯絡**：lin15642@gmail.com ｜ LinkedIn: linkedin.com/in/lin-tsai-software

【核心專長與代表實績（回答請帶出具體依據）】
1. **企業 AI & RAG 落地實績**：
   - 企業私有化 RAG 知識庫：以 2x RTX 4090 GPU 伺服器建置地端 Ubuntu + Ollama，結合 Hybrid Search (語意+關鍵字) 與 Re-ranking 杜絕幻覺，規章檢索耗時減少 70% 且資料 100% 不出企業內網【實績：廣明光電 2025/04 至今】。
   - 企業 AI Workflow 導入：主導跨部門 AI Workshop 探索業務痛點，規劃自動化工作流與系統 API 深度整合【實績：廣明光電 2026/03 至今】。
   - 企業 AIOps 智能維運平台：建置專用 AI Server 算力、Gitea CI/CD 流水線與日誌異常自動化預警【實績：廣明光電】。
2. **後端架構與金融通訊 CTI**：
   - 金融級大型通訊中台：主導台北富邦銀行、LINE Bank (連線銀行)、國泰世華銀行、王道銀行、基富通證券等 10+ 金控客服中台，整合 Spring Cloud 微服務、WebRTC 雙向視訊、Redis 快取與金融級資安稽核【實績：承暉資訊主管期間】。
   - 企業中台與排程架構：MCM 訊息排程系統、EFH 資料轉譯中台、工廠端 EIP 入口平台 (Vue 3 + C# .NET SSO)【實績：廣明光電】。
3. **精通程式語言清單（嚴禁腦補 C++ 等非主力語言）**：
   - **Java (10+ 年)**：Spring Boot, Spring Cloud, Spring Data, JPA, Apache Solr（金融微服務主力）。
   - **Python**：Ollama 地端模型推論、RAG 向量檢索、FastAPI、ETL 資料處理。
   - **C# .NET**：Web API, Winform, 企業中台與工廠端系統整合。
   - **SQL**：Oracle, Microsoft SQL Server, PostgreSQL, Redis 分散式快取。
   - **TypeScript / JavaScript**：Vue 3, Nuxt, WebRTC 通訊前端。
4. **管理與溝通心法**：
   - 敏捷團隊領導：帶領 9-12 人跨職能團隊，以 PSM I 敏捷框架推動 Sprint 交付、建立 Retrospective 回顧會議改善機制與團隊心理安全感【佐證：承暉資訊 5 年主管 / PSM I】。
   - 跨部門溝通：具備 MBA 商業管理視野，能以清晰且商業導向的語言與業務、製造、IT 與高階主管對齊目標【佐證：廣明光電跨部門 AI 工作坊】。

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
      temperature: 0.3,
      max_tokens: 500,
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
