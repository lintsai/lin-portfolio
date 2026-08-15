export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  category: 'ai' | 'finance' | 'enterprise' | 'ops'
  categoryName: string
  period: string
  role: string
  clientOrCompany: string
  summary: string
  highlights: string[]
  techStack: string[]
  image?: string
  logo?: string
  diagramType?: string
  challenge?: string
  solution?: string
  outcome?: string
}

export interface ServiceItem {
  id: string
  title: string
  subtitle: string
  icon: string
  targetAudience: string
  painPoints: string[]
  deliverables: string[]
  techHighlights: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  teamSize?: string
  summary: string
  keyAchievements: string[]
  skills: string[]
}

export const portfolioData = {
  profile: {
    name: '蔡弘霖',
    englishName: 'Lin Tsai',
    personaName: 'PEACXE (皮斯斯)',
    title: '軟體專案主管 / 解決方案架構師',
    subtitle: '軟體專案主管 ｜ 解決方案與系統整合',
    tagline: '讓技術不只可做，更能真正上線、被使用、持續優化。',
    bio: '具備約 10 年軟體開發與 5 年技術管理經驗，長期累積企業系統、後端架構、系統整合與跨部門協作經驗。近年聚焦企業 AI 應用落地，主導 AI Workflow 導入、RAG 知識檢索與 AIOps 等專案，從跨部門 Workshop 與 Use Case 探索，到 AI 解決方案規劃、系統整合與應用落地。擅長將 AI 能力與既有企業系統、資料及工作流程整合，推動可實際使用、可維運與持續優化的 AI 解決方案。',
        email: 'lin15642@gmail.com',
    phone: '0933-649-929',
    location: '台北市 · 新北市 · 桃園市 · 新竹縣市',
    avatarUrl: '/images/lin_portrait_real.png',
    avatarAnimeUrl: '/images/peacxe_anime_avatar.png',
    bannerUrl: '/images/peacxe_banner.png',
    resumePdfUrl: '/Lin_Tsai_Resume.pdf',
    resumeDirectPath: '/Lin_Tsai_Resume.pdf',
    socials: {
      github: 'https://github.com/lintsai',
      linkedin: 'https://www.linkedin.com/in/lin-tsai-software',
      blog: 'https://ailintsai.wordpress.com',
      youtube: 'https://youtube.com',
      twitch: 'https://twitch.tv',
      vocus: 'https://vocus.cc'
    },
    coreTags: [
      'AI / RAG 應用落地',
      '後端微服務 (Java/Python/C#)',
      '5年技術團隊管理 (9-12人)',
      '企業系統與 CTI 中台架構'
    ],
        stats: [
      { label: '軟體工程實戰年資', value: '10~11', unit: '年' },
      { label: '技術主管與團隊管理', value: '5+', unit: '年' },
      { label: '企業/金融級大型專案交付', value: '34+', unit: '案' },
      { label: '敏捷團隊管理規模', value: '9-12', unit: '人' }
    ]
  },

  // 4 大技術諮詢與專案協作方案 (專為 /services 頁面設計)
  services: [
    {
      id: 'rag-ai',
      title: '企業私有化 AI 知識庫 & RAG 導入評估',
      subtitle: '協助規劃內部技術手冊與規章問答系統，保障 100% 機敏數據不出企業內網',
      icon: '🧠',
      targetAudience: '內部文檔繁多查找費時、需嚴格資料隱私與權限控管之製造業、生技醫療、金融業或科技公司。',
      painPoints: [
        '員工花費大量工時在跨部門文件伺服器與多個系統中翻找資料',
        '公司機敏資料不能上傳公有雲，擔心商業機密、專利與客戶隱私外洩',
        '傳統關鍵字檢索無法理解自然語言語意與上下文，搜尋命中率低'
      ],
      deliverables: [
        '地端/私有雲本地 LLM 運算環境規劃 (Ollama / Qwen2.5 / LLaMA / vLLM)',
        '文件清洗、切分 (Chunking) 與向量資料庫整合 (Chroma / Milvus / pgvector)',
        'Hybrid Search (向量語意 + BM25 關鍵字) 與 Re-ranking 二次排序架構',
        '結合權限過濾 (Metadata Filter) 與引用溯源機制，杜絕 AI 幻覺',
        '開箱即用之企業 WebChat 介面 (AnythingLLM / Open WebUI) 與 RESTful API 整合'
      ],
      techHighlights: ['Python', 'Ollama', 'RAG', 'Vector DB', 'bge-m3 / Re-ranker', 'Docker / CUDA', 'Open WebUI']
    },
    {
      id: 'contact-center',
      title: '全渠道客服與 CTI 通訊系統整合諮詢',
      subtitle: '10 年金融與電信級客服中台實務，協助打通電話、文字、視訊與 AI 機器人',
      icon: '📞',
      targetAudience: '欲升級客服中心架構、整合多通路通訊、或評估 Avaya / Genesys 升級之企業團隊。',
      painPoints: [
        '電話、LINE、Facebook、WebChat 訊息分散，客服人員疲於切換多個視窗',
        '既有地端 CTI (Genesys / Avaya) 面臨維護瓶頸，系統擴展或新功能串接不易',
        '缺乏彈性微服務中介層，無法快速串接新一代 CRM、錄音或 AI 輔助系統'
      ],
      deliverables: [
        '全方位通訊中台整合 (文字、電話、WebRTC 視訊客服、電子郵件、案件後送、知識庫)',
        'Avaya (Breeze / AAOD) 與 Genesys 系統 API 串接與事件路由 (Routing / IVR)',
        '銀行級資安與合規性檢驗 (OWASP Top 10、源碼弱掃、金融法遵日誌)',
        '舊系統平滑遷移與雙軌並行 (Parallel Run) 驗收架構規劃'
      ],
      techHighlights: ['Java', 'Spring Boot', 'Spring Cloud', 'Avaya Breeze', 'Genesys', 'WebRTC 視訊', 'Redis', 'Apache Solr']
    },
    {
      id: 'backend-architecture',
      title: '高併發系統架構健檢與微服務模組重構',
      subtitle: '排查系統效能瓶頸，打造高可用性、好擴展與易維護的後端架構',
      icon: '⚡',
      targetAudience: '系統面臨效能瓶頸、單體系統過於龐大難以維護、或需要跨系統資料交換之開發團隊。',
      painPoints: [
        '尖峰業務量增長導致資料庫塞車、查詢緩慢甚至逾時當機',
        '模組高度耦合，改動一處引發多處 Bug，交付週期冗長',
        '跨系統資料轉譯與批次排程缺乏統一控管與重試機制'
      ],
      deliverables: [
        '領域驅動設計 (DDD) 與微服務模組拆分建議報告',
        '高併發快取機制 (Redis 快取擊穿/穿透防護) 與資料庫索引調校',
        '分散式訊息佇列與事件驅動設計 (RabbitMQ / Kafka)',
        '標準化 RESTful API 設計與代碼重構指導 (Code Review)'
      ],
      techHighlights: ['Java / Spring Cloud', 'Python', 'C# .NET', 'Oracle / MSSQL / PostgreSQL', 'Redis', 'Docker']
    },
    {
      id: 'devops-aiops',
      title: 'AIOps 自動化維運與 GPU 算力平台建置',
      subtitle: '從自動化部署、日誌監控到專用 GPU 伺服器配置的實務支援',
      icon: '🚀',
      targetAudience: '需要提升團隊交付速度、建置私有 CI/CD、或搭建專用 AI/GPU 伺服器的技術團隊。',
      painPoints: [
        '手動部署繁瑣易漏，環境不一致導致「我的電腦可以跑、正式機不能跑」',
        '缺乏系統可觀測性 (Observability)，伺服器異常無法第一時間定位原因',
        'GPU 伺服器驅動 (CUDA/cuDNN)、容器與資源排程設定門檻高'
      ],
      deliverables: [
        '自動化 CI/CD 流水線搭建 (Gitea + Docker Actions / GitLab CI / Azure DevOps)',
        'GPU 深度學習與推論伺服器環境初始化 (Ubuntu, NVIDIA Driver, CUDA, Docker)',
        '企業級日誌監控與 Splunk / ELK 視覺化儀表板建置',
        '金鑰與機敏資料安全管理機制 (Secrets Management, SSH Hardening)'
      ],
      techHighlights: ['Docker', 'Kubernetes (K8s)', 'Gitea CI/CD', 'Splunk (SPL)', 'NVIDIA CUDA', 'Linux (Ubuntu/RHEL)']
    }
  ],

  // 匯總來自 2026/03 最新 CakeResume 與 廣明/承暉 雙 Notion 知識庫之完整專案
  projects: [
    // --- 企業 AI 與 RAG 應用 ---
    {
      id: 'ai-workflow-enterprise',
      featured: true,
      title: '企業 AI Workflow 導入與應用落地',
      subtitle: '跨部門 Workshop 探索、Use Case 分析與企業系統深度整合',
      category: 'ai',
      categoryName: '企業 AI 與 RAG',
      period: '2026/03 - 仍在進行',
      role: '主導人 / AI 解決方案架構師',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '與企業內部各部門進行 Workshop，盤點既有工作流程、業務需求與適合導入 AI 的應用場景。整合內部 AI 模型與 RAG 知識庫，推進 PoC 驗證與實際應用導入。',
      highlights: [
        '跨部門 Workshop 賦能：與業務、製造、HR 等單位進行工作坊，盤點業務痛點與可自動化場景。',
        'Use Case 深度分析：規劃客製化 AI Workflow，將 LLM 推論、語音/文件處理與內部 API 深度結合。',
        '端到端 PoC 驗證：從需求探索、概念驗證到正式系統落地，協調 AI 算法、工程開發與業務端資源。',
        '促成企業級 AI 生態系：推動可實際使用、可維運與持續優化的 AI 解決方案。'
      ],
      techStack: ['AI Workflow', 'RAG 知識檢索', 'Prompt Engineering', 'Use Case Analysis', 'System Integration'],
      diagramType: '企業 AI Workflow 導入生命週期',
      challenge: '不同部門對 AI 期望不一，且業務流程繁雜，難以直接套用標準 AI 工具。',
      solution: '透過標準化 Workshop 釐清真正痛點，客製低摩擦力的 AI Workflow 中繼層。',
      outcome: '成功於多個核心部門完成 PoC 驗證並推進正式系統上線。'
    },
    {
      id: 'rag-enterprise-kb',
      featured: true,
      title: '企業知識檢索與 RAG 系統建置',
      subtitle: '從零建置 GPU 算力、本地 LLM 部署與跨平台 Windows 文件伺服器整合',
      category: 'ai',
      categoryName: '企業 AI 與 RAG',
      period: '2025/04 - 仍在進行',
      role: '發起人 / 解決方案架構師 / 核心開發者',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '建立基於 RAG 架構的內部知識庫，讓員工透過自然語言快速查找規章與技術文件。負責從無到有建置 Python、Docker、Ollama 本地 LLM 與 CUDA GPU 加速環境。',
      highlights: [
        '地端 GPU 算力平台：配置 2x RTX 4090 GPU、Ubuntu、Docker、Ollama 本地模型 (Qwen2.5 / bge-m3 / gpt-oss)。',
        '跨系統資料安全整合：透過 cifs 安全掛載內部 Windows 文件伺服器，自動化清洗與向量化 (Vector DB)。',
        'Hybrid Search 檢索防幻覺：結合語意向量與 BM25 關鍵字檢索，搭配 Re-ranking 二次排序與引用文獻追溯。',
        '完成 PoC 驗證：成功驗證 AI 與企業文件系統整合可行性，為全公司 AI 奠定算力與數據基礎。'
      ],
      techStack: ['Python', 'RAG', 'Ollama', 'Docker', 'CUDA / GPU', 'PyTorch', 'Vector DB', 'Open WebUI'],
      diagramType: '企業私有化 RAG 分層檢索架構',
      challenge: '企業機敏資料嚴禁上傳公有雲，且內部文件格式繁雜，傳統關鍵字搜尋精準度低。',
      solution: '打造 100% 地端私有 RAG 管道，搭配精準分塊與重新排序演算法，杜絕資料外洩與 AI 幻覺。',
      outcome: '大幅縮短跨部門規章檢索時間 70%，獲管理層高度肯定。'
    },
    {
      id: 'personal-ai-assistant',
      featured: true,
      title: '個人 AI 助理與工作流設計 (AI OS)',
      subtitle: 'Small LLMs + 本地離線運行 + RAG 待辦生成與反饋回饋',
      category: 'ai',
      categoryName: '企業 AI 與 RAG',
      period: '2025/07 - 仍在進行',
      role: '獨立研究與開發者',
      clientOrCompany: 'AI Study / 開源研究',
      summary: '打造運行於個人裝置（PC/手機）的離線 AI 助理。採用 Small LLMs (Phi-3, Qwen) 本地部署，結合 RAG 工作流設計，實作待辦生成、建議回饋與週期性回顧。',
      highlights: [
        '邊緣端離線運行：採用輕量級 Small LLMs，在個人裝置高效運行，確保 100% 數據隱私與即時反應。',
        '工作流與待辦生成：導入 RAG 與工作流設計，自動化分析日常筆記並生成具體行動建議。',
        '用戶反饋學習機制：設計用戶修正記錄機制，讓 AI 持續校準，提升個人化精準度。'
      ],
      techStack: ['Python', 'Ollama', 'Small LLMs', 'RAG', 'Chroma DB', 'Edge AI'],
      diagramType: '個人離線 AI OS 架構設計',
      challenge: '邊緣設備算力有限，需在低功耗下保證推論流暢度與上下文精準度。',
      solution: '針對輕量模型微調提示詞範本，結合輕量向量資料庫進行精準上下文檢索。',
      outcome: '成功完成個人 AI 助理概念驗證，作為未來個人 AI OS 持續擴充基礎。'
    },

    // --- 金融與電信大型通訊中台 ---
    {
      id: 'fubon-video-banking',
      featured: true,
      title: '台北富邦銀行 視訊客服系統建置專案',
      subtitle: '微服務通訊中台整合、WebRTC 雙向視訊與客製化金融需求',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2022/03 - 2022/08',
      role: 'SA / SD / PG / PM',
      clientOrCompany: '台北富邦銀行 (承暉資訊)',
      summary: '主導台北富邦銀行視訊客服系統開發。整合客服中心產品系統 info360 與銀行客製化需求，採用 Spring Cloud 微服務與 Redis 快取架構。',
      highlights: [
        '微服務高併發架構：採用 Spring Boot、Spring Cloud、Spring Data 與 Apache Solr 打造通訊中台。',
        '高可靠快取與資料庫：整合 Redis 快取與 Microsoft SQL Server，保障交易資料一致性。',
        '金融級資安合規：嚴格落實金融業資安稽核、弱點掃描修補與連線加密標準。'
      ],
      techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Apache Solr', 'Redis', 'MSSQL', 'Git'],
      diagramType: '富邦銀行視訊客服系統架構',
      challenge: '金控對高可用性、連線資安與視訊連線品質要求極高。',
      solution: '採用微服務架構解耦通訊與業務模組，並透過 Redis 分散式鎖保障並發一致性。',
      outcome: '順利通過銀行各項嚴格驗收與滲透測試，穩定上線營運。'
    },
    {
      id: 'linebank-contact-center',
      featured: true,
      title: '連線銀行 (LINE Bank) 客服系統建置專案',
      subtitle: '純網銀 Avaya Breeze 平台建置、API 串接與客製化通訊整合',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2019/06 - 2021/06',
      role: 'SA / SD / PG / PM',
      clientOrCompany: 'LINE Bank (連線商業銀行)',
      summary: '為台灣首家純網銀打造客服通訊核心。建置及整合 Avaya 客服中心產品 (Breeze) 並整合各項純網銀客製化業務需求。',
      highlights: [
        '純網銀通訊底座：建置 Avaya Breeze 通訊架構，實現純網銀 7x24 小時高可用客服。',
        '企業級應用伺服器：部署於 JBoss EAP 與 Microsoft SQL Server 叢集環境。',
        '全方位通訊中台：採用 Spring Boot/Cloud 與 Apache Solr 實現毫秒級訊息檢索與路由。'
      ],
      techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Avaya Breeze', 'Apache Solr', 'JBoss EAP', 'MSSQL'],
      diagramType: 'LINE Bank 客服平台整合架構',
      challenge: '純網銀無實體分行，客服系統為主要客戶服務入口，對穩定性與反應速度要求極高。',
      solution: '深度整合 Avaya Breeze 事件驅動架構與 Spring Cloud 微服務中台。',
      outcome: '成功支援 LINE Bank 開業營運，支撐百萬純網銀行戶之日常客服需求。'
    },
    {
      id: 'cathay-video-banking',
      title: '國泰世華銀行 視訊客服系統建置專案',
      subtitle: '大型金控視訊服務系統建置與客製化通訊整合',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2020/06 - 2021/03',
      role: 'SA / SD / PG / PM',
      clientOrCompany: '國泰世華銀行 (承暉資訊)',
      summary: '建置及整合國泰世華銀行視訊客服系統與各項客製化金融業務流程，確保金融級高可用性與交易軌跡完整性。',
      highlights: [
        '視訊通訊架構整合：整合 WebRTC 視訊流與客服工作台，支援遠端開戶與身分驗證。',
        '高可用微服務架構：採用 Spring Cloud、Apache Solr 與 JBoss EAP 叢集部署。',
        '全週期專案領導：從需求訪談、系統架構設計到現場壓力測試與驗收。'
      ],
      techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Apache Solr', 'JBoss EAP', 'MSSQL'],
      diagramType: '國泰世華視訊客服架構圖',
      challenge: '需在極短專案時限內完成系統建置並通過國泰世華各項嚴格資安審核。',
      solution: '模組化封裝視訊與通訊核心，縮短客製化開發與測試週期。',
      outcome: '如期高質量交付，順利上線支援全行視訊服務。'
    },
    {
      id: 'o-bank-video-contact',
      title: '王道銀行 (O-Bank) 視訊客服系統建置專案',
      subtitle: '數位銀行視訊預約、WebCall 轉 Video Call 與客製化整合',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2023/06 - 2023/08',
      role: 'SA / SD / PG / PM',
      clientOrCompany: '王道商業銀行 (承暉資訊)',
      summary: '整合 info360 客服中心微服務平台與王道銀行數位客服客製化需求，支援線上視訊開戶與視訊預約機制。',
      highlights: [
        '視訊預約與轉接：開發 Web Call 轉接 Video Call 與視訊排程預約模組。',
        '微服務架構升級：Spring Cloud、Solr 檢索與 Redis 分散式鎖機制。',
        '金融級壓測驗證：完成高併發連線壓力測試與資料庫調校。'
      ],
      techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Apache Solr', 'Redis', 'MSSQL', 'Git'],
      diagramType: '王道銀行數位視訊客服架構',
      challenge: '提供無縫的 Web 到視訊通話切換體驗，確保資料庫連線池在高流量下穩定。',
      solution: '設計狀態同步機制，並以 Redis 快取即時狀態與訊息流。',
      outcome: '如期交付並順利通過銀行各項功能與弱點掃描驗收。'
    },
    {
      id: 'gofundrich-upgrade',
      title: '基富通證券 客服系統升級專案',
      subtitle: '全台最大基金平台客服系統核心重構與渠道擴充',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2022/08 - 2023/08',
      role: 'SA / SD / PG / PM',
      clientOrCompany: '基富通證券 (承暉資訊)',
      summary: '主導基富通證券客服系統全面升級，重構文字客服、電話整合與案件後送流程，提升投顧服務響應效率。',
      highlights: [
        '核心架構重構：由舊版單體系統遷移至 Spring Cloud 微服務中台。',
        '多渠道通訊整合：打通文字客服、電子郵件與後台案件後送派工。',
        '高可用快取設計：導入 Redis 快取與 Solr 歷史對話全文檢索。'
      ],
      techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Apache Solr', 'Redis', 'MSSQL', 'Git'],
      diagramType: '基富通證券通訊中台升級架構',
      challenge: '在不停機的前提下，完成歷史數百萬筆客服數據遷移與新舊系統切換。',
      solution: '設計雙軌並行 (Parallel Run) 驗證機制與批次同步腳本，保障數據零遺失。',
      outcome: '成功完成系統平滑升級，大幅提升客服坐席查詢與回覆效能。'
    },
    {
      id: 'esun-voice-center',
      title: '玉山銀行 語音客服系統建置專案',
      subtitle: '整合 Avaya AAOD 語音互動 (IVR) 與客服中心平台客製化',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2020/07 - 2021/06',
      role: 'SA / SD / PG / PM',
      clientOrCompany: '玉山商業銀行 (承暉資訊)',
      summary: '整合 Avaya 語音核心 (AAOD) 與 info360 產品，實作來電彈屏、技能群組路由、錄音回放與即時客服話務報表。',
      highlights: [
        '語音通訊深度整合：串接 Avaya AAOD 流程，實現精準 IVR 分流。',
        '即時話務監控：以 Spring Data 與 Solr 建立秒級坐席狀態與通話報表。',
        '高可靠部署：Tomcat 叢集與 Microsoft SQL Server 高可用環境。'
      ],
      techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Avaya AAOD', 'Apache Solr', 'Tomcat', 'MSSQL'],
      diagramType: '玉山銀行語音客服與 IVR 整合架構',
      challenge: '尖峰進線流量大，需在數百毫秒內完成 CTI 事件解析與坐席電腦彈屏。',
      solution: '採用非同步事件監聽與快取分流，確保彈屏零延遲。',
      outcome: '穩定支撐玉山銀行信用卡與財富管理客戶之每日海量語音服務。'
    },
    {
      id: 'fet-emma-robot',
      title: '遠傳電信「愛瑪」客服機器人專案',
      subtitle: '百萬用戶文字客服串接、機器人知識庫與 NLP 語意解析',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2016/11 - 2018/04',
      role: 'PG (軟體開發工程師)',
      clientOrCompany: '遠傳電信 (FarEasTone)',
      summary: '文字客服串接機器人服務，並導入機器人知識庫與語意解析功能。串接 WebLogic、Tomcat、Linux 與 Oracle 資料庫環境。',
      highlights: [
        '文字客服機器人中台：串接 NLP 語意解析服務與文字客服 Gateway Router，自動化回答常規問題。',
        '高可用電信環境：部署於 Oracle DB、WebLogic 與 Tomcat 叢集環境。',
        '多通路前端介接：串接 Web Chat、JavaScript 與 HTML 前端元件。'
      ],
      techStack: ['Java', 'JavaScript', 'HTML', 'NLP 語意解析', 'Tomcat', 'WebLogic', 'Linux', 'Oracle DB'],
      diagramType: '遠傳愛瑪機器人架構與分流機制',
      challenge: '電信進線量龐大且問題句型繁多，需在毫秒內完成意圖判斷與精準回答。',
      solution: '設計分層路由演算法，機器人無法識別時自動無縫轉接真人客服。',
      outcome: '有效分流電信客服中心 40% 以上常規諮詢，大幅節省營運人力成本。'
    },

    // --- 製造業與企業核心 MIS 系統 ---
    {
      id: 'splunk-budget-dashboard',
      featured: true,
      title: 'Splunk 預算執行率儀表板 (QSI)',
      subtitle: 'Python 自動化 ETL 資料清洗與 Splunk Dashboard Studio 視覺化',
      category: 'enterprise',
      categoryName: '製造與企業 MIS',
      period: '2024/09 - 2024/11',
      role: 'SA / SD / PG / PM',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '使用 Python 自動化清理跨部門財務與專案支出資料並匯入 Splunk，使用 Dashboard Studio 開發多維度預算執行率儀表板，支援管理層即時決策。',
      highlights: [
        '自動化 ETL 管道：Python 撰寫資料清洗與轉換腳本，定時匯入 Splunk 索引庫。',
        '視覺化決策看板：利用 Splunk SPL 與 Dashboard Studio 設計多層級下鑽分析圖表。',
        '端到端全權交付：獨立負責需求訪談 (SA)、架構設計 (SD)、開發 (PG) 與專案管理 (PM)。'
      ],
      techStack: ['Python', 'Splunk Dashboard Studio', 'SPL (Search Processing Language)', 'VSCode', 'Git'],
      diagramType: 'Splunk 預算分析儀表板架構',
      challenge: '各部門財務資料格式不一，手動匯整報表耗時且缺乏即時性。',
      solution: '以 Python 建立標準化 ETL 處理流程，配合 Splunk 即時運算提供動態看板。',
      outcome: '將每月預算審查報表產出時間從數天縮短至秒級即時查詢。'
    },
    {
      id: 'glpi-itsm',
      title: 'ITSM-GLPI 導入與客製化開發',
      subtitle: '企業內部 IT 服務管理與自動化工單系統整合',
      category: 'enterprise',
      categoryName: '製造與企業 MIS',
      period: '2026/03 - 仍在進行',
      role: 'Research / SD / PG',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '導入開源企業級 IT 服務管理平台 GLPI，並透過 PHP 與 Go 進行客製化插件開發與內部系統整合，結合 Claude / Codex 加速開發交付。',
      highlights: [
        'ITSM 系統整合：導入 GLPI 管理公司 IT 資產、設備追蹤與服務工單（HelpDesk）。',
        '客製化後端模組：使用 PHP 與 Go 撰寫擴充模組，串接內部身分認證 (AD/LDAP) 與通知中台。',
        'AI 輔助工程加速：運用 Claude 與 Codex 進行代碼生成與重構，大幅提升開發效率。'
      ],
      techStack: ['PHP', 'Go', 'GLPI', 'Claude / Codex', 'VSCode', 'Git', 'GitLab CI'],
      diagramType: 'ITSM GLPI 服務管理架構',
      challenge: '既有 IT 服務工單分散且缺乏統一資產關聯，需在不更動既有資料庫前提下快速導入。',
      solution: '以 GLPI 為核心架構，開發客製 API 與資料同步模組，實現平滑過渡。',
      outcome: '建立統一的 IT 服務窗口，顯著提升內部 IT 需求處理與資產清點效率。'
    },
    {
      id: 'itam-asset-system',
      title: 'ITAM 資產盤點系統及自動化報表',
      subtitle: 'SQL 自動化資料處理、定時發信與資產盤點前端系統',
      category: 'enterprise',
      categoryName: '製造與企業 MIS',
      period: '2024/11 - 2025/03',
      role: 'SA / SD / PG',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '設計及開發企業 ITAM 資產盤點系統，使用 SQL 開發對應報表並整合定時發信系統，大幅提升資產清點準確度。',
      highlights: [
        '端到端系統開發：使用 C# 後端、Vue.js 前端與 Oracle 資料庫。',
        '自動化報表發布：定時排程比對 IT 設備狀態並產出異常通報郵件。',
        '精確權限控管：支援不同廠區、部門管理人員之盤點權限劃分。'
      ],
      techStack: ['C#', 'Vue.js', 'Oracle SQL', 'VSCode', 'Git'],
      diagramType: 'ITAM 資產盤點架構',
      challenge: '跨廠區設備流動頻繁，人工紙本盤點容易出現帳物不符。',
      solution: '開發線上掃描盤點與資料庫自動核銷功能，結合即時報表。',
      outcome: '縮短全公司季度資產盤點工時 65%，帳物準確率大幅提升。'
    },
    {
      id: 'factory-eip-platform',
      featured: true,
      title: '工廠端 EIP 企業入口平台與權控中台',
      subtitle: '工廠統一入口、權控模組、公告系統與架構設計',
      category: 'enterprise',
      categoryName: '製造與企業 MIS',
      period: '2024/08 - 2025/06',
      role: 'SA / SD',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '設計工廠端 EIP (企業資訊入口平台)，統一控管全球工廠的權限模組、公告系統與營運應用導覽。',
      highlights: [
        '標準化架構設計：以 UML (使用者案例、循序圖、API Spec) 定義微服務介面。',
        '現代化前端：採用 C# .NET API + Vue 3 + Vuetify 3 打造高流暢介面。',
        '統一單一登入 (SSO)：整合 AD 帳號與角色授權管理 (RBAC)。'
      ],
      techStack: ['C#', 'Vue 3', 'Vuetify 3', 'HTML/JS', 'IIS', 'GitLab'],
      diagramType: 'EIP 企業入口與權控模組架構',
      challenge: '工廠內部舊系統林立、登入入口分散，缺乏統一發布與權限管控機制。',
      solution: '建立統一 EIP Gateway，將權限、公告與子系統導航模組化抽離。',
      outcome: '成為全球數千名工廠同仁每日登入的核心工作門戶。'
    },
    {
      id: 'mcm-efh-middleware',
      title: 'MCM 訊息排程系統 & EFH 資料轉譯中台',
      subtitle: '百萬級排程發送、B2B 資料交換與分散式資料庫轉譯',
      category: 'enterprise',
      categoryName: '製造與企業 MIS',
      period: '2023/10 - 至今',
      role: 'SA / SD',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '主導設計企業核心中台 MCM (統一控管排程與訊息發送) 與 EFH (統一控管資料轉譯至檔案或資料庫)。',
      highlights: [
        '高可靠資料轉譯：設計轉譯引擎，穩定處理每日海量 B2B 訂單、產線數據轉換。',
        '訊息與排程控管：統一收斂 AMS 發信、定時任務與異常重試機制。',
        'UML 完整規格：撰寫 Activity Diagram、Sequence Diagram、Class Diagram 與 ERD。'
      ],
      techStack: ['C# .NET', 'Vue 3', 'Oracle DB', 'UML Architecture', 'IIS', 'GitLab'],
      diagramType: 'MCM / EFH 訊息與資料轉譯中台架構',
      challenge: '舊有各系統排程分散在多台伺服器，出錯時難以即時追蹤與復原。',
      solution: '將排程、發信與轉譯模組解耦為統一中台，提供可視化監控面板。',
      outcome: '大幅提升資料交換穩定度，降低維運人員排障時間 60%。'
    },

    // --- 平台與維運 / AIOps ---
    {
      id: 'aiops-platform',
      featured: true,
      title: '企業 AIOps 智能維運平台建構',
      subtitle: '專用 AI 算力、Gitea CI/CD pipeline 與日誌異常分析',
      category: 'ops',
      categoryName: '平台與維運',
      period: '2025/04 - 仍在進行',
      role: 'IT 技術主管 / 架構師',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '導入 AIOps 架構，利用 AI Server 進行日誌分析、異常偵測與自動化維運。建立 Gitea CI/CD pipeline 與 SSH / Secret 安全管理機制。',
      highlights: [
        'AIOps 運算核心：完成專用 AI Server (CUDA, PyTorch) 建置，為模型訓練與推論提供算力基礎。',
        'AIOps 自動化流程：建立 Gitea CI/CD pipeline，專責部署維運監控與分析工具。',
        '安全數據通道：配置 SSH 與 Secret 管理，為 AIOps 平台採集數據與自動化指令做好準備。'
      ],
      techStack: ['AIOps', 'CI/CD', 'Gitea', 'Docker', 'CUDA / GPU', 'PyTorch', 'SSH', 'Linux'],
      diagramType: 'AIOps 智能維運與日誌分析流水線',
      challenge: '傳統維運靠人工盯盤與事後排查，效率低下且無法提前預警潛在故障。',
      solution: '建置專用 AIOps 算力節點與標準化 CI/CD 流水線，實現自動化分析與部署。',
      outcome: '奠定企業智能維運基礎，實現維運工具一鍵自動發布。'
    },

    // --- (新增) 承暉資訊：金融與電信客服建置專案 ---
    {
      id: 'fet-line-contact',
      title: '遠傳 Line 文字客服整合專案',
      subtitle: '開發全新文字客服底層系統，作為未來產品核心',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2018/12 - 2019/10',
      role: 'SA / SD / PG',
      clientOrCompany: '遠傳電信 (承暉資訊)',
      summary: '開發全新文字客服系統底層架構，並整合 Line 渠道與電信端業務邏輯，做為未來產品化的基礎。',
      highlights: [
        '新一代產品核心：開發基於 Spring Boot 的新一代文字客服底層架構。',
        '多渠道串接：串接 Line 官方帳號 API，實現無縫的訊息流與事件觸發。'
      ],
      techStack: ['Java 8', 'Spring Boot', 'Spring Data', 'MSSQL'],
      challenge: '既有系統架構無法擴充應付未來高併發的社群通訊軟體進線。',
      solution: '重新設計系統底層，採用 Spring Boot 搭配非同步佇列處理海量訊息。',
      outcome: '成功打造具備高擴充性的文字客服底層，並順利承接遠傳 Line 進線業務。'
    },
    {
      id: 'testrite-contact',
      title: '特力客服系統建置專案',
      subtitle: '特力集團客服系統建置與線上渠道架構調整',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2018/12 - 2019/10',
      role: 'PG',
      clientOrCompany: '特力集團 (承暉資訊)',
      summary: '為特力集團建置全渠道客服系統，並進行線上渠道 (Chat, Email, Helpdesk, Line, Voice, Video) 的架構優化與調整。',
      highlights: [
        '全渠道架構優化：重整多種進線管道的訊息佇列與路由邏輯。',
        '企業級伺服器部署：部署於 JBoss EAP 與 MSSQL 叢集。'
      ],
      techStack: ['Java 8', 'JBoss EAP', 'MSSQL'],
      challenge: '客戶擁有多元品牌與多樣化的進線管道，需統一集中管理與分派。',
      solution: '透過統一的中介層與標準化的通訊協定，將異質系統整合至單一客服工作台。',
      outcome: '成功整合特力集團全渠道客服，提升客服人員接單與處理效率。'
    },
    {
      id: 'hlh-contact',
      title: '恆隆行客服系統建置專案',
      subtitle: '整合文字與電話客服系統',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2019/04 - 2019/09',
      role: 'PG',
      clientOrCompany: '恆隆行 (承暉資訊)',
      summary: '為恆隆行建置並整合文字客服及電話客服系統，客製化相關業務需求。',
      highlights: [
        '跨渠道整合：無縫整合文字與語音進線。'
      ],
      techStack: ['Java', 'Tomcat', 'MSSQL'],
      challenge: '需快速建置並上線，以應對電商促銷檔期的龐大客服量。',
      solution: '套用標準化 info360 核心並針對重點客製化流程進行優化。',
      outcome: '如期交付上線，穩定支撐檔期高峰流量。'
    },
    {
      id: 'yuanta-contact',
      title: '元大投信客服系統建置專案',
      subtitle: '投信金融業客服與通訊整合',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2019/04 - 2019/08',
      role: 'SA / SD / PG',
      clientOrCompany: '元大投信 (承暉資訊)',
      summary: '負責元大投信客服系統之需求訪談、系統分析與客製化開發。',
      highlights: [
        '金融業合規：嚴格遵守投信業資安與個資遮蔽規範。',
        '全文檢索：導入 Apache Solr 提升知識庫與歷史對話搜尋速度。'
      ],
      techStack: ['Java', 'Spring Boot', 'Apache Solr', 'IntelliJ IDEA'],
      challenge: '金融客戶對個資處理與日誌稽核有嚴格要求。',
      solution: '在資料層實作全系統加密與脫敏機制，確保日誌與資料庫安全。',
      outcome: '順利通過資安稽核並上線營運。'
    },
    {
      id: 'hotai-tm',
      title: '和潤電話行銷系統建置專案',
      subtitle: '開發全新電話行銷 (TM) 系統底層',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2018/06 - 2019/09',
      role: 'SA / SD / PG',
      clientOrCompany: '和潤企業 (承暉資訊)',
      summary: '開發全新的一套電話行銷 (Telemarketing) 系統，作為未來產品底層，並整合文字客服與電話行銷業務。',
      highlights: [
        'TM 產品化核心：從零設計與開發具備名單派發、回撥排程與績效統計的電銷核心。',
        '與文字客服整合：打通電銷與線上客服的資料流，實現跨部門協作。'
      ],
      techStack: ['Java', 'Spring Data', 'Tomcat', 'MSSQL'],
      challenge: '電銷名單數量龐大，且分配與回收邏輯極為複雜。',
      solution: '設計基於狀態機的名單流轉機制，確保百萬級名單的高效分派與鎖定。',
      outcome: '成功建置電銷系統底層，大幅提升和潤車貸電銷團隊的名單撥打效率。'
    },
    {
      id: 'titansoft-contact',
      title: '鈦坦科技文字客服系統建置專案',
      subtitle: '跨國軟體企業文字客服解決方案',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2020/06 - 2021/03',
      role: 'SA / SD / PG',
      clientOrCompany: '鈦坦科技 (承暉資訊)',
      summary: '為鈦坦科技導入文字客服系統並客製化開發相關企業內部系統介接。',
      highlights: [
        '高效文字通訊：建構基於 WebSocket 的即時雙向文字客服通道。'
      ],
      techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Apache Solr'],
      challenge: '客戶本身即為頂尖軟體公司，對 API 設計與系統架構要求標準極高。',
      solution: '採用高標準的 RESTful API 規範與完善的系統文件交付。',
      outcome: '獲得客戶技術團隊認可，順利完成系統整合。'
    },
    {
      id: 'fet-ivr-upgrade',
      title: '遠傳語音互動技術系統轉移專案',
      subtitle: '翻新語音互動 (IVR) 技術框架',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2016/12 - 2017/04',
      role: 'PG',
      clientOrCompany: '遠傳電信 (承暉資訊)',
      summary: '將舊有語音互動 (IVR) 系統框架改寫升級至新一代技術框架，並與 Avaya AAOD 深度整合。',
      highlights: [
        '架構翻新：重構十萬行級別的舊版 IVR 流程代碼。'
      ],
      techStack: ['Java', 'Avaya AAOD', 'Tomcat', 'Oracle DB'],
      challenge: '舊版語音流程錯綜複雜，且缺乏完整文件。',
      solution: '透過反編譯與程式碼追蹤釐清邏輯，利用 Avaya AAOD 進行視覺化流程重構。',
      outcome: '完成核心 IVR 流程無痛轉移，顯著提升後續維護與擴充速度。'
    },
    {
      id: 'fcb-contact',
      title: '天逸金融客服系統建置專案',
      subtitle: '整合客服產品與客製化開發',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2015/11 - 2017/06',
      role: 'SA / SD / PG',
      clientOrCompany: '天逸金融 (承暉資訊)',
      summary: '負責天逸金融客服系統之建置、客製化開發與上線維運。',
      highlights: [
        '核心系統整合：將客服模組與天逸內部金融產品系統介接。'
      ],
      techStack: ['Java', 'Tomcat', 'MSSQL'],
      challenge: '需要深度了解供應鏈金融業務邏輯以設計客製化客服介面。',
      solution: '與客戶端 SA 密切合作，透過頻繁的敏捷迭代釐清規格。',
      outcome: '系統穩定上線，優化其金融產品之客戶服務流程。'
    },
    {
      id: 'taishin-contact',
      title: '台新證券客服系統建置專案',
      subtitle: '證券業全通路客服建置',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2018/05 - 2019/03',
      role: 'SA / SD / PG',
      clientOrCompany: '台新證券 (承暉資訊)',
      summary: '建置台新證券客服中心，涵蓋前端介面翻新與後端 API 串接。',
      highlights: [
        '前端介面翻新：利用 JavaScript/HTML 打造新一代客服工作台介面。'
      ],
      techStack: ['Java', 'JavaScript', 'HTML', 'Tomcat', 'MSSQL'],
      challenge: '證券下單與帳務查詢的 API 串接需要極高的即時性與精確度。',
      solution: '設計高效非同步串接層，確保客服查詢資料無延遲。',
      outcome: '全面提升台新證券客服回應投資人之效率。'
    },
    {
      id: 'fet-im-upgrade',
      title: '遠傳客服即時通升級專案',
      subtitle: '即時通訊中台升級與效能調校',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2016/06 - 2016/11',
      role: 'SA / SD / PG',
      clientOrCompany: '遠傳電信 (承暉資訊)',
      summary: '負責遠傳客服即時通 (WebChat) 系統之效能升級、架構調整與客製化擴充。',
      highlights: [
        '高可用環境調校：優化 WebLogic 與 Oracle DB 叢集之連線池與 GC 策略。'
      ],
      techStack: ['Java', 'WebLogic', 'Oracle DB', 'Linux'],
      challenge: '尖峰時刻進線量龐大，舊系統容易產生 OOM (Out of Memory) 崩潰。',
      solution: '利用 JVM Profiling 找出記憶體洩漏點並重構核心通訊模組。',
      outcome: '成功解決系統崩潰問題，提升系統吞吐量 300%。'
    },
    {
      id: 'kgi-contact',
      title: '凱基證券文字客服系統建置專案',
      subtitle: '證券業文字客服與數位化轉型',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2020/04 - 2020/05',
      role: 'SA / SD / PG / PM',
      clientOrCompany: '凱基證券 (承暉資訊)',
      summary: '快速交付凱基證券之文字客服系統，整合 Solr 全文檢索與快速回覆機制。',
      highlights: [
        '極速交付：於一個月內完成需求釐清、開發測試與上線佈署。'
      ],
      techStack: ['Java', 'Spring Boot', 'Apache Solr'],
      challenge: '專案時程極為壓縮。',
      solution: '精確劃分 MVP (最小可行性產品) 範圍，利用既有 Spring Boot 模組快速組合。',
      outcome: '如期交付，協助客戶順利啟動數位客服轉型。'
    },
    {
      id: 'tmnewa-contact',
      title: '新安東京海上文字客服建置專案',
      subtitle: '產險業文字客服整合',
      category: 'finance',
      categoryName: '金融與電信 CTI',
      period: '2020/07 - 2021/06',
      role: 'SA / SD / PG / PM',
      clientOrCompany: '新安東京海上產險 (承暉資訊)',
      summary: '建置新安東京海上產險之文字客服系統，並整合產險特有之理賠與報案流程介接。',
      highlights: [
        '保險業務整合：客製化開發理賠進度查詢與保單關聯機制。'
      ],
      techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Apache Solr'],
      challenge: '產險業務流程繁瑣且表單眾多。',
      solution: '利用 Spring Cloud 將不同業務系統封裝為微服務，降低介接複雜度。',
      outcome: '順利上線，有效減少保戶等待理賠進度之電話進線量。'
    },

    // --- (新增) 廣明光電：製造與企業核心系統專案 ---
    {
      id: 'hrm-leave-app',
      title: 'HRM 請假 APP 開發',
      subtitle: '工廠端行動化差勤管理系統',
      category: 'enterprise',
      categoryName: '製造與企業 MIS',
      period: '2024/05 - 2024/06',
      role: 'SD',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '設計與規劃工廠端 HRM 請假 APP，提供同仁便捷的行動化請假與簽核流程。',
      highlights: [
        '行動化架構：以 C# 後端 API 搭配 Vue.js 實作響應式前端，適配各類行動裝置。',
        'UML 規格定義：完整撰寫使用者案例、循序圖與資料關係圖。'
      ],
      techStack: ['C#', 'Vue.js', 'UML', 'IIS', 'GitLab'],
      challenge: '需無縫對接既有老舊的 HR 核心系統資料庫。',
      solution: '設計中介 API 層，隔離新舊系統邏輯。',
      outcome: '成功交付系統架構設計，加速開發團隊落地實作。'
    },
    {
      id: 'erp-custom-report',
      title: 'ERP 自定義報表系統',
      subtitle: 'IT 設定導向之彈性報表生成器',
      category: 'enterprise',
      categoryName: '製造與企業 MIS',
      period: '2024/03 - 2024/07',
      role: 'SD',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '設計一套動態報表平台，允許 IT 快速設定 SQL 與欄位屬性，即時提供給 User 使用。',
      highlights: [
        '動態渲染架構：前端根據後端定義的 JSON 設定，自動渲染查詢條件與表格。',
        '解放 IT 生產力：大幅減少為單一報表硬編碼 (Hard-code) 的工時。'
      ],
      techStack: ['C#', 'Vue.js', 'HTML/JS', 'UML', 'IIS'],
      challenge: '每月新增大量客製化報表需求，消耗極多 IT 開發資源。',
      solution: '抽象出「查詢引擎」與「動態UI元件」，實現報表配置化。',
      outcome: '報表開發時間由數天縮短至數小時內完成配置。'
    },
    {
      id: 'agile-plm-upgrade',
      title: 'Oracle Agile PLM 系統升級',
      subtitle: 'PLM 核心系統版本升級 (9.3.1.2 → 9.3.6)',
      category: 'enterprise',
      categoryName: '製造與企業 MIS',
      period: '2023/10 - 2024/07',
      role: 'PG',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '協助製造業核心 Agile PLM 系統跨版本升級，負責客製化程式 (Java) 之改寫、測試與 Debug。',
      highlights: [
        '核心系統升級：處理新舊版 API 不相容與底層架構變更之技術問題。',
        '企業級部署：熟悉 Oracle WebLogic 叢集環境與 Java 效能監控。'
      ],
      techStack: ['Java', 'Oracle', 'WebLogic', 'Eclipse'],
      challenge: '數百支歷史客製化程式在升級後產生無法預期的錯誤。',
      solution: '建立自動化比對腳本與詳細的測試計畫，逐一修復 API 調用。',
      outcome: '成功無痛升級，保障全球工廠研發與製造流程順暢。'
    },
    {
      id: 'esop-download-sys',
      title: 'ESOP 文件下載系統',
      subtitle: 'SOP 產線文件發布與串接整合',
      category: 'enterprise',
      categoryName: '製造與企業 MIS',
      period: '2025/07 - 仍在進行',
      role: 'SA / SD / PG',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '整合 Agile PLM 系統，串接並開發工廠產線所需之 SOP (ESOP) 文件自動化下載發布系統。',
      highlights: [
        '跨系統整合：打通 PLM 圖文庫與產線終端站台。',
        '異質技術棧：結合 Java 與 C# .NET API，實現檔案流高效傳輸。'
      ],
      techStack: ['Java', 'C#', 'Vue.js', 'GitLab'],
      challenge: '產線機台需確保下載到的永遠是最新簽核版本的 SOP，不容許延遲。',
      solution: '實作檔案快取與版本校驗機制 (Checksum)，兼顧效能與準確性。',
      outcome: '實現廠區 SOP 零紙本化與版本 100% 同步。'
    },
    {
      id: 'k8s-factory-research',
      title: 'K8S 工廠導入研究與規劃',
      subtitle: '評估 Kubernetes 落地製造業可行性',
      category: 'ops',
      categoryName: '平台與維運',
      period: '2024/06 - 仍在進行',
      role: 'Researcher',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '研究並與主管層討論 Kubernetes (K8S) 容器化編排架構導入工廠端系統之可行性與藍圖規劃。',
      highlights: [
        '容器化戰略規劃：評估微服務與容器化對工廠高可用架構之效益。',
        '技術培訓與驗證：於 Linux 環境實作 K8S Cluster PoC。'
      ],
      techStack: ['Kubernetes (K8s)', 'Docker', 'Linux'],
      challenge: '工廠 IT 團隊缺乏 K8s 維運經驗，且對系統穩定性極度保守。',
      solution: '制定漸進式導入藍圖，由邊緣/次要服務優先容器化，降低風險。',
      outcome: '完成可行性評估報告，為下一代工廠微服務架構打下理論基礎。'
    },
    {
      id: 'qsi-maintenance-systems',
      title: '廣明光電 8 大核心維運系統',
      subtitle: '支撐全球工廠與企業營運的底層關鍵服務',
      category: 'ops',
      categoryName: '平台與維運',
      period: '2023 - 仍在進行',
      role: 'IT 技術主管 / 開發者',
      clientOrCompany: '廣明光電 (Quanta Storage Inc.)',
      summary: '負責廣明光電 8 套以上核心日常維運系統的架構維護、升級與排障，保障企業與工廠端 7x24 營運不中斷。',
      highlights: [
        'AMS 排程發信 & B2B 客戶資料交換系統：採用 C# Winform 與 IIS，日處理海量自動化資料交換。',
        'KPI 與 Budget 財務管理：利用 C#/JS 打造內部高階主管視角之營運與財務運算平台。',
        '工廠生產與終端應用：維護 PTM 生產檔案管理、PDA 倉庫掃描 APP (Android/Zebra) 與 LMS 標籤列印系統。'
      ],
      techStack: ['C#', 'Winform', 'IIS', 'Android/Java', 'GitLab'],
      challenge: '系統高度依賴且不可停機，且跨越 Windows/Android 多種終端。',
      solution: '建立完善的版控 (GitLab)、異常監控告警與標準化緊急應變流程。',
      outcome: '維持系統 99.9% 高可用性，穩健支撐全球廠區營運。'
    }
  ],

  // 職涯經歷 (100% 依據最新 2026/03 CakeResume 與 Notion 管理實務)
  experiences: [
    {
      company: '廣明光電股份有限公司 (Quanta Storage Inc.，光電產業 500人以上)',
      role: '專案副理 / 軟體專案主管',
      period: '2023/09 - 仍在職',
      location: '桃園市龜山區',
      teamSize: '跨部門技術領導與專案管理',
      summary: '負責企業內部系統與 AI 應用之需求分析、架構規劃、系統整合、後端開發與技術管理。',
      keyAchievements: [
        '1. 負責企業內部系統與 AI 應用之需求分析、架構規劃、系統整合、後端開發與技術管理。',
        '2. 推動企業 AI Workflow 導入，與各部門進行 Workshop，盤點業務流程、需求痛點與適合導入 AI 的應用場景。',
        '3. 運用公司內部既有 AI 模型與 RAG 知識檢索能力，依不同部門需求規劃 AI Workflow 與客製化應用。',
        '4. 協助各部門將 AI 能力整合至既有工作流程與企業系統，從需求探索、PoC 驗證推進至實際應用導入。',
        '5. 帶領團隊進行需求釐清、開發協作、排程推進及跨部門溝通，協調 AI、系統與業務端共同完成解決方案落地。',
        '6. 主導 MCM 訊息排程系統、EFH 資料轉譯中台、工廠端 EIP 平台、ITAM 資產盤點、HRM 請假 APP、ERP 自定義報表與 Splunk 預算儀表板之 SA/SD 架構設計。',
        '7. 成功完成泰國廠 (TMT) 遷廠系統搬遷與 Oracle Agile PLM (9.3.1.2 → 9.3.6) 核心系統升級。'
      ],
      skills: ['#GitLab', '#C#', '#UML', '#Java', '#Splunk', '#Python', 'RAG', 'Ollama', 'Docker', 'CUDA', 'AIOps']
    },
    {
      company: '承暉資訊整合股份有限公司 (電腦系統整合服務業 30~100人)',
      role: '軟體開發主管 (軟體專案主管)',
      period: '2019/04 - 2023/08 (4 年 5 個月)',
      location: '新北市新店區',
      teamSize: '管理 9~12 人跨職能工程團隊',
      summary: '全面管理開發部門日常運作與公司核心客戶服務產品 "info360" 的架構研發與交付。',
      keyAchievements: [
        '1. 負責開發部門工作管理：帶領 9~12 人工程團隊，規劃 Sprint、Epic/Feature/Backlog 與工作分配。',
        '2. 負責客戶服務產品 "info360" 架構與模組開發：整合文字、語音 (Avaya/Genesys)、視訊 (WebRTC) 與智能機器人。',
        '3. 敏捷開發工作流程管理：推動 Scrum / Kanban / PSM I 敏捷框架，建立 PM、Dev、QA 協同機制。',
        '4. 品質管理與測試管理：落實 SonarQube 源碼掃描、JMeter 效能壓測、JUnit 單元測試與 OWASP Top 10 防護。',
        '5. 導入持續整合及部署 (Azure DevOps CI/CD Pipeline)，交付台北富邦、LINE Bank、國泰世華、王道銀行、基富通證券等 10+ 大型金控專案。'
      ],
      skills: ['#Java', '#軟體工程系統開發', '#MS SQL', '#Spring', '#軟體程式設計', '#系統架構規劃', 'Azure DevOps', 'CTI', 'Scrum (PSM I)']
    },
    {
      company: '承暉資訊整合股份有限公司 (電腦系統整合服務業 30~100人)',
      role: '軟體開發工程師 (軟體工程師)',
      period: '2015/10 - 2019/04 (3 年 7 個月)',
      location: '新北市新店區',
      summary: '高併發後端系統開發、通訊協定整合與底層通訊架構研發。',
      keyAchievements: [
        '1. 與電信業配合完成四個客服系統專案開發 (包含打造全台首線「遠傳愛瑪客服機器人」與 Line 文字客服整合)。',
        '2. 與證券業配合完成五個客服系統專案開發 (包含元大投信、凱基證券等)。',
        '3. 與銀行業配合完成四個客服系統專案開發 (包含玉山銀行語音客服等)。',
        '4. 建立客戶服務系統產品 "info360" 的底層開發：建立文字客服 (WebChat / FB Chat)、電話客服 (Avaya AAOD / Telesynergy) 與視訊客服 (Avaya / Genesys)。',
        '5. 於產品建立電子郵件客服系統、案件後送系統、電銷系統 (TM) 與知識庫系統 (KM)。'
      ],
      skills: ['#Java', '#軟體程式設計', '#軟體工程系統開發', '#MS SQL', '#資料庫程式設計', '#系統架構規劃', 'Avaya AAOD', 'Genesys', 'Tomcat', 'WebLogic']
    }
  ],

  // 技能矩陣 (100% 依據最新 2026/03 CakeResume 專長)
  skillCategories: [
    {
      category: 'AI / 智能應用',
      icon: '🧠',
      skills: [
        { name: 'LLM & Agent Workflow', level: '精通', desc: 'LLM, RAG, Agent Workflow, 提示工程 (Prompt Engineering)' },
        { name: '本地模型部署', level: '精通', desc: 'Ollama, 本地模型部署, 向量化流程 (Vectorization)' },
        { name: '機器學習框架', level: '熟練', desc: 'PyTorch, TensorFlow, Python, CUDA / cuDNN' }
      ]
    },
    {
      category: '系統與後端',
      icon: '⚙️',
      skills: [
        { name: '核心語言與框架', level: '精通 (10年)', desc: 'Java, Python, C#, Spring, Spring Boot, Spring Cloud, REST API' },
        { name: '資料庫與分析設計', level: '精通', desc: '資料庫設計 (Oracle / MSSQL / PostgreSQL / Redis), 系統分析設計 (SA/SD, UML)' }
      ]
    },
    {
      category: '平台與維運',
      icon: '☁️',
      skills: [
        { name: '容器與編排', level: '精通', desc: 'Docker, Kubernetes, Linux (Ubuntu/RHEL)' },
        { name: 'CI/CD 與監控', level: '精通', desc: 'CI/CD, Gitea, GitLab, Azure DevOps, Splunk, ELK Stack, GPU/CUDA 環境建置' }
      ]
    },
    {
      category: '管理與協作',
      icon: '👥',
      skills: [
        { name: '技術團隊管理', level: '資深 (5年主管)', desc: '技術團隊管理 (9~12人), 跨部門溝通, 專案推進' },
        { name: '需求分析與敏捷', level: '專家', desc: '需求分析, 系統整合, Scrum / Agile (PSM I)' }
      ]
    }
  ],

  // 學歷與認證 (100% 依據最新 2026/03 CakeResume)
  educationAndCerts: {
    education: [
      {
        degree: 'MBA - Master of Business Administration 碩士畢業',
        school: 'Southwest Minnesota State University (美國)',
        period: '2014/08 - 2015/08',
        description: '美國企管碩士畢業。提升國際溝通視野、專案管理與商業策略思維。'
      },
      {
        degree: '資管系 大學畢業',
        school: '私立明新科技大學 (Minghsin University of Science and Technology)',
        period: '2009/09 - 2013/06',
        description: '奠定 Java 程式設計、資訊系統開發、資料庫與軟體工程核心基礎。'
      }
    ],
    certifications: [
      {
        name: 'Professional Scrum Master™ I (PSM I)',
        issuer: 'Scrum.org',
        badge: '/images/psm-cert.png',
        desc: '國際敏捷認證 Scrum Master。'
      },
      {
        name: 'Microsoft Certified Technology Specialist (MCTS)',
        issuer: 'Microsoft',
        desc: '微軟專業技術專家認證。'
      },
      {
        name: 'Sun Certified Java Associate (SCJA)',
        issuer: 'Sun Microsystems / Oracle',
        desc: 'Sun Java 國際認證。'
      },
      {
        name: 'MTA-微軟專業應用技術國際認證',
        issuer: 'Certiport / Microsoft',
        desc: '微軟專業應用技術國際認證。'
      }
    ]
  },

  // 推薦人背書 (100% 依據最新 2026/03 CakeResume)
  references: [
    {
      name: '林智凱',
      title: '處長',
      company: '承暉資訊整合股份有限公司',
      contact: 'holylin@crm.com.tw',
      phone: '0928-273-727'
    },
    {
      name: '張宇綸',
      title: '高級工程師',
      company: '廣明光電股份有限公司',
      contact: 'yulunforwork@gmail.com',
      phone: '0985-126-291'
    }
  ],

  // 合作接案流程
  engagementProcess: [
    {
      step: '01',
      title: '痛點諮詢與需求評估',
      desc: '與您深度溝通現有架構、業務痛點、數據安全規範與預期目標，快速釐清可行性。'
    },
    {
      step: '02',
      title: '方案架構與 PoC 概念驗證',
      desc: '規劃系統架構圖與技術選型，先以低成本 PoC 驗證關鍵流程，確認成效後再進入正式開發。'
    },
    {
      step: '03',
      title: '敏捷迭代開發與品質測試',
      desc: '採用 Scrum 敏捷節奏分批交付，包含自動化測試、資安掃描、API 規範與完整代碼審查。'
    },
    {
      step: '04',
      title: '上線部署、交接與維運培訓',
      desc: '協助正式機/GPU伺服器環境配置、建立 CI/CD 流水線與監控告警，並提供完整技術移轉與文件。'
    }
  ]
}
