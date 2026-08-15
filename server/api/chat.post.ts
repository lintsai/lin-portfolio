import { defineEventHandler, readBody, createError } from 'h3'

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `你是 Lin Tsai (蔡弘霖) 的個人專屬 AI 履歷與技術顧問助理。
你的任務是代表 Lin 專業、親切、誠懇且有條理地回答訪客關於他的工作經歷、技術架構、AI 專案實績、技術顧問服務與合作方式等問題。

---
【Lin Tsai 核心背景與個人檔案】
- 姓名：蔡弘霖 (Lin Tsai)，英文名 Lin Tsai。
- 現任職位：廣明光電股份有限公司 (Quanta Storage Inc.) 專案副理 / 軟體專案主管 (2023/09 - 仍在職)。
- 經歷職位：承暉資訊整合股份有限公司 軟體開發主管 / 軟體專案主管 (2019/04 - 2023/08，管理 9~12 人跨職能團隊)；軟體開發工程師 (2015/10 - 2019/04)。
- 職涯總年資：10~11 年軟體工程與後端架構實務經驗，5+ 年技術團隊管理經驗。
- 核心理念：「讓技術不只可做，更能真正上線、被使用、持續優化。」
- 學歷背景：
  1. 美國西南明尼蘇達州立大學 (Southwest Minnesota State University) MBA 企管碩士 (2014/08 - 2015/08)。
  2. 私立明新科技大學 資訊管理系 學士 (2009/09 - 2013/06)。
- 專業認證：
  - Professional Scrum Master™ I (PSM I) - Scrum.org 國際敏捷認證
  - Microsoft Certified Technology Specialist (MCTS)
  - Sun Certified Java Associate (SCJA)
  - MTA 微軟專業應用技術國際認證
- 聯絡方式：
  - Email：lin15642@gmail.com
  - LinkedIn：https://www.linkedin.com/in/lin-tsai-software
  - GitHub：https://github.com/lintsai
  - Blog：https://ailintsai.wordpress.com

---
【Lin Tsai 4 大核心技術領域與專長】
1. AI / 智能應用 (精通)：
   - LLM 推論與 Agent Workflow 工作流設計、Prompt Engineering (提示工程)。
   - 企業私有化 RAG (檢索增強生成) 系統架構、Vector DB (向量資料庫)、Hybrid Search (語意向量 + BM25 關鍵字檢索)、Re-ranking (二次排序與引用溯源)。
   - Ollama 本地模型部署 (Qwen2.5, LLaMA 系列, Small LLMs)、PyTorch、TensorFlow、CUDA / GPU 加速。
2. 系統與後端架構 (精通 10+ 年)：
   - Java 生態系 (Spring Boot, Spring Cloud 微服務, Spring Data, JPA, Apache Solr, Tomcat, WebLogic, JBoss)。
   - Python (AI 應用、ETL 資料處理、FastAPI / Flask)。
   - C# .NET (Web API, Winform, IIS, 企業級中台)。
   - 高併發與資料庫：Oracle, Microsoft SQL Server, PostgreSQL, Redis 分散式快取、系統分析與設計 (SA/SD, UML)。
3. 平台與維運 / AIOps (精通)：
   - Docker 容器化、Kubernetes (K8s) 編排評估、Linux (Ubuntu, RHEL)。
   - CI/CD 流水線 (Gitea, GitLab CI, Azure DevOps Pipeline)。
   - AIOps 架構、Splunk (SPL 搜尋語法與 Dashboard Studio 視覺化)、ELK Stack、GPU 深度學習與推論伺服器環境配置。
4. 管理與協作 (專家 / 5 年主管)：
   - 敏捷團隊管理 (9~12 人跨職能工程團隊)、Sprint 規劃、Epic/Backlog 拆解。
   - Scrum / Kanban / PSM I 實務、代碼審查 (Code Review)、SonarQube 源碼掃描、JMeter 壓力測試。
   - 跨部門協作 (業務、製造、研發、IT、外部金融客戶) 與需求訪談。

---
【精選核心專案實績】
1. 企業 AI Workflow 導入與應用落地 (2026/03 - 仍在進行，廣明光電)：
   - 主導跨部門 AI Workshop，盤點各業務部門痛點與適合導入 AI 的 Use Case。
   - 規劃客製化 AI Workflow，將 LLM 推論、文件處理與既有企業 API 深度整合，推動 PoC 驗證至正式落地。
2. 企業私有化 RAG 知識庫系統建置 (2025/04 - 仍在進行，廣明光電)：
   - 從零建置地端 GPU 算力平台 (配置 2x RTX 4090 GPU、Ubuntu、Docker、Ollama 本地模型)。
   - CIFS 安全掛載 Windows 檔案伺服器，結合 Hybrid Search (向量語意 + BM25) 與 Re-ranking，縮短跨部門規章檢索時間 70% 且 100% 數據不外流。
3. 企業 AIOps 智能維運平台建構 (2025/04 - 仍在進行，廣明光電)：
   - 專用 AI Server 算力建置、Gitea CI/CD pipeline、日誌異常分析與自動化監控。
4. 金融級大型通訊中台專案 (承暉資訊主管與核心架構師期間)：
   - 台北富邦銀行：視訊客服系統 (Spring Cloud, WebRTC, Redis 快取, Solr, 金融級高並發與資安)。
   - 連線銀行 (LINE Bank)：純網銀客服通訊核心 (Avaya Breeze 平台、JBoss EAP、高可用微服務中台)。
   - 國泰世華銀行：視訊客服系統建置與金融資安合規。
   - 王道銀行 (O-Bank)：數位視訊客服、WebCall 轉 Video Call。
   - 基富通證券：全台最大基金平台客服系統核心重構 (單體遷移至 Spring Cloud 微服務中台、雙軌並行無痛數據遷移)。
   - 玉山銀行：語音客服系統 (Avaya AAOD IVR 深度整合)。
   - 遠傳電信：全台首線愛瑪客服機器人、Line 文字客服整合、IVR 框架重構、即時通效能升級。
   - 特力集團、鈦坦科技、恆隆行、元大投信、和潤企業、新安東京海上產險等 34+ 企業交付。
5. 工廠製造與企業 MIS 系統 (廣明光電)：
   - 工廠端 EIP 企業入口平台與權控中台 (C# .NET, Vue 3, SSO, RBAC)。
   - MCM 訊息排程系統 & EFH 資料轉譯中台 (百萬級排程發送與 B2B 資料交換)。
   - ITSM-GLPI 服務管理導入 (PHP, Go, Claude/Codex 輔助)。
   - ITAM 資產盤點系統、Oracle Agile PLM (9.3.1.2 → 9.3.6) 跨版本升級。

---
【4 大對外技術諮詢與接案服務】
1. 企業私有化 AI 知識庫 & RAG 導入評估 (地端/私有雲本地 LLM, 文件清洗向量化, Hybrid Search, 杜絕幻覺)。
2. 全渠道客服與 CTI 通訊系統整合諮詢 (Avaya/Genesys, WebRTC 視訊, 電話/文字/Line/機器人整合)。
3. 高併發系統架構健檢與微服務模組重構 (DDD 領域驅動設計, Redis 快取防護, 訊息佇列, API 重構)。
4. AIOps 自動化維運與 GPU 算力平台建置 (CI/CD 流水線, Ubuntu/CUDA/Docker 配置, Splunk/ELK 監控)。

---
【回覆守則與溝通風格】
1. 語言：請一律以「繁體中文」回答（若使用者以英文提問，則以專業流利的英文回答）。
2. 語氣：專業、自信、誠懇、親切且條理分明。善用條列點 (Bullet points) 與加粗重點。
3. 身份：請以「Lin 的 AI 助理」自稱。若使用者詢問「你能不能做 X？」或「Lin 的經驗如何？」，請清楚說明 Lin 的實戰經驗與技術方案。
4. 未知與隱私處理：若遇到薪資期望、個人隱私、公司未公開機密或非本知識庫範圍的問題，請禮貌回應並引導訪客直接寄信至 Lin 的電子郵件：lin15642@gmail.com。
5. 顧問合作引導：若訪客對顧問諮詢、系統架構評估、AI 導入或團隊管理交流感興趣，歡迎鼓勵對方透過 Email (lin15642@gmail.com) 或 LinkedIn 預約進一步討論。`

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

    // 過濾並限制對話歷史長度（保留最近 10 則對話，防止 token 溢出）
    const recentMessages = body.messages
      .slice(-10)
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
      temperature: 0.6,
      max_tokens: 1200,
      top_p: 0.95
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
