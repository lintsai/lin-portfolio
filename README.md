# Lin Tsai (蔡弘霖) - Personal Portfolio & Technical Advisory Website

> **軟體專案主管 · 解決方案架構師 · 企業 AI 應用顧問**  
> **10-11 年軟體架構實務 × 5 年技術團隊管理 (9-12 人敏捷團隊) × 企業私有化 AI/RAG 落地**

---

## 🌟 核心特色 (Key Features)

- 🤖 **Lin Tsai 專屬 AI 技術顧問特助 (`ChatWidget.vue`)**：
  - 注入 Lin Tsai 完整 10 年軟體經歷、專案實蹟、架構思維與業務邊界之專屬 System Prompt。
  - 後端 Nitro Serverless 安全轉發端點 (`/server/api/chat.post.ts`)，金鑰 100% 機敏不落地。
  - 支援**動態情境延伸提問 (Dynamic Suggestion Chips)**，一鍵點擊無縫對話。
  - 具備 850ms 自然思考擬真、輕量級安全 Markdown 渲染與精緻懸浮視窗。
- 💼 **個人經歷與實績專頁 (`/`)**：
  - 30 秒三大領域精華看板 (3 Pillars)。
  - 34+ 完整專案庫（支援即時搜尋、分類篩選、彈窗詳解與架構圖說明）。
  - 完整職涯時間軸、技能矩陣與學歷證照。
- 🚀 **技術諮詢與專案協作頁 (`/services`)**：
  - 4 大務實交付方案（企業私有化 RAG、全渠道 CTI 通訊中台、高併發後端重構、AIOps/GPU 維運）。
  - 3 大實戰架構思維剖析與 4 階段敏捷合作流程。
- 🔒 **內部定價指南 (`/pricing-internal`)**：
  - 個人私密參考手冊，內建即時互動報價試算器與一鍵複製回信範本。
- 🎨 **現代極簡科技美學**：
  - 深色系高質感主題、GPU 硬體加速滾動進場與流暢毛玻璃質感。

---

## 🛠️ 技術棧 (Tech Stack)

- **前端框架**：Nuxt 4 / Vue 3 (Composition API & `<script setup>`)
- **樣式與設計**：Tailwind CSS (Vanilla Tailwind, Dark Theme `#07090E` / `#0D111A`)
- **後端引擎**：Nuxt 3 Nitro Server Engine (Serverless API Routes)
- **AI 推論**：Groq Cloud API (`llama-3.3-70b-versatile`)
- **類型安全**：TypeScript 5
- **部署平台**：Vercel Edge Network

---

## 🚀 快速啟動 (Quick Start)

### 1. 安裝專案依賴
```bash
npm install
```

### 2. 設定環境變數
複製 `.env.example` 為 `.env` 並填入您的 Groq API Key：
```bash
cp .env.example .env
```
在 `.env` 中設定：
```env
GROQ_API_KEY=gsk_your_groq_api_key_here
GROQ_MODEL=llama-3.3-70b-versatile
```

### 3. 啟動本地開發伺服器
```bash
npm run dev
```
啟動後打開瀏覽器訪問 `http://localhost:3000`。

### 4. 生產打包構建
```bash
npm run build
```

---

## 📄 License
MIT © [Lin Tsai](https://github.com/lintsai)
