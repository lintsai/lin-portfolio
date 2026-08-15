<template>
  <div class="min-h-screen bg-[#07090e] text-slate-200 pt-44 pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-6xl mx-auto space-y-12">
      
      <!-- Top Secret Banner / Header -->
      <div class="bg-slate-900/95 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3 shadow-inner">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span>🔒 INTERNAL REFERENCE ONLY · 私人內部定價小抄 & 報價指南</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-black text-white tracking-tight">
            技術顧問與接案定價基準表 (Rate Card)
          </h1>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">
            本頁面為個人內部參考，未在公開導航列放置連結，並已啟用 <code class="text-amber-300 font-mono">noindex</code> 隱藏防搜尋。
          </p>
        </div>

        <NuxtLink
          to="/services"
          class="px-5 py-2.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition shrink-0 flex items-center gap-1.5"
        >
          <span>← 返回公開服務頁</span>
        </NuxtLink>
      </div>

      <!-- 1. 🧮 實戰報價指南：3 步公式 & 即時互動試算器 -->
      <div class="bg-gradient-to-br from-indigo-950/40 via-slate-900/90 to-slate-900/90 border border-indigo-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
        <div class="max-w-3xl mb-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-2">
            <span>🧮 實戰報價試算器</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-white">
            面對客戶時，我該怎麼計算報價？（超實用 3 步公式）
          </h2>
          <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            接案報價的核心是<strong>「預估工時（人天）× 基準日薪 (NT$ 12,000) × 客戶規模係數」</strong>：
          </p>
        </div>

        <!-- 3 Steps Visual Breakdown -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-2">
            <div class="text-xs font-bold text-indigo-400 font-mono">STEP 1 · 預估人天 (Days)</div>
            <div class="text-sm font-bold text-white">估算你要花多少「整天」</div>
            <p class="text-xs text-slate-400 leading-relaxed">
              1 人天 = 8 小時。例如：
              <br />• 痛點工作坊：約 <strong>2 天</strong> (備課+現場)
              <br />• 地端 RAG PoC：約 <strong>10~12 天</strong> (3~4週)
              <br />• 架構健檢/排障：約 <strong>2~3 天</strong>
            </p>
          </div>

          <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-2">
            <div class="text-xs font-bold text-blue-400 font-mono">STEP 2 · 基準日薪 (Daily Rate)</div>
            <div class="text-sm font-bold text-white">設定個人基本成本價</div>
            <p class="text-xs text-slate-400 leading-relaxed">
              以資深技術主管身價，設定基準日薪為：
              <br /><strong class="text-blue-300 font-mono">NT$ 12,000 / 天</strong> (約時薪 NT$ 1,500)
              <br />基礎成本 = 10 天 × 12,000 = <strong>12 萬元</strong>
            </p>
          </div>

          <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-2">
            <div class="text-xs font-bold text-cyan-400 font-mono">STEP 3 · 乘上客戶係數</div>
            <div class="text-sm font-bold text-white">依對象規模調整報價</div>
            <p class="text-xs text-slate-400 leading-relaxed">
              • <strong>小微新創 (Tier 1)</strong>：× 1.0 ➜ <strong>12 萬</strong>
              <br />• <strong>中型企業 (Tier 2)</strong>：× 1.3 ➜ <strong>15.6 萬</strong> (含會議溝通)
              <br />• <strong>大型企業 (Tier 3)</strong>：× 1.8 ➜ <strong>21.6 萬</strong> (含規格書/審查)
            </p>
          </div>
        </div>

        <!-- 🚀 Interactive Instant Rate Calculator -->
        <div class="bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-indigo-500/40">
          <h3 class="text-base font-bold text-white mb-4 flex items-center gap-2">
            <span>⚡ 即時報價試算器 (動態帶入計算)</span>
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
            <!-- Service Type Selector -->
            <div>
              <label class="block text-xs font-semibold text-slate-400 mb-2">1. 選擇預估專案類型</label>
              <select
                v-model="calculator.serviceType"
                @change="onServiceTypeChange"
                class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="rag_poc">🧪 地端 RAG 知識庫 PoC 原型</option>
                <option value="workshop">🧠 跨部門 AI 痛點探索工作坊</option>
                <option value="architecture_review">🔍 系統架構健檢與 Code Review</option>
                <option value="custom_module">💻 客製化後端微服務/轉譯模組</option>
                <option value="custom_days">⏱️ 自訂預估人天 (手動輸入)</option>
              </select>
            </div>

            <!-- Estimated Days -->
            <div>
              <label class="block text-xs font-semibold text-slate-400 mb-2">2. 預估工作天數 (人天)</label>
              <div class="flex items-center gap-2">
                <input
                  v-model.number="calculator.days"
                  type="number"
                  min="1"
                  max="60"
                  class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
                />
                <span class="text-xs text-slate-400 shrink-0">天 (8h/天)</span>
              </div>
            </div>

            <!-- Client Tier Selector -->
            <div>
              <label class="block text-xs font-semibold text-slate-400 mb-2">3. 客戶規模 / 複雜度係數</label>
              <select
                v-model.number="calculator.tierMultiplier"
                class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                <option :value="1.0">Tier 1 · 小微團隊 / 新創 (1.0x 基礎價)</option>
                <option :value="1.3">Tier 2 · 中型企業 / 主力標準 (1.3x 推薦)</option>
                <option :value="1.8">Tier 3 · 大型企業 / 金融製造 (1.8x 完整規格)</option>
              </select>
            </div>
          </div>

          <!-- Calculated Output Card -->
          <div class="bg-slate-900/90 rounded-xl p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div class="text-xs text-slate-400">
                建議總報價（{{ calculator.days }} 人天 × NT$ 12,000 × {{ calculator.tierMultiplier }} 係數）：
              </div>
              <div class="text-2xl sm:text-3xl font-black text-indigo-300 font-mono mt-1">
                NT$ {{ calculatedTotalFormatted }}
              </div>
              <div class="text-[11px] text-slate-400 mt-1 flex flex-wrap gap-3 font-mono">
                <span>啟動款 (40%): NT$ {{ calculatedDepositFormatted }}</span>
                <span>中期款 (30%): NT$ {{ calculatedMidFormatted }}</span>
                <span>尾款 (30%): NT$ {{ calculatedFinalFormatted }}</span>
              </div>
            </div>

            <button
              @click="applyToEmailTemplate"
              class="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition shadow-md shrink-0 flex items-center gap-1.5"
            >
              <span>帶入下方回信範本 ⬇</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 2. 🇹🇼 台灣市場真實行情與三階客戶分類小抄 -->
      <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-xl">
        <h2 class="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <span>🇹🇼 台灣市場真實行情與「客戶類型階梯報價」小抄</span>
        </h2>
        <p class="text-xs text-slate-400 mb-6 leading-relaxed">
          相較大型系統整合商（SI 廠商動輒數十萬至上百萬），個人技術主管專家的<strong>性價比極高且溝通敏捷</strong>。初談時先確認客戶規模再出價：
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <!-- Tier 1: Small / Friendly -->
          <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-emerald-400 font-mono">TIER 1 · 小微團隊 / 建立信任</span>
              <span class="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">親民入門</span>
            </div>
            <div class="text-xs font-bold text-white">新創、微型工作室、朋友介紹</div>
            <p class="text-[11px] text-slate-400 leading-relaxed">
              預算有限（&lt; 5~8 萬），重視快速有感。建議先以工作坊或時數諮詢切入。
            </p>
            <div class="pt-2 border-t border-slate-800/80 text-xs font-mono text-emerald-300 space-y-1">
              <div>• 1天 AI 工作坊：NT$ 25,000 ~ 35,000</div>
              <div>• 時數諮詢：NT$ 1,800 ~ 2,500 / hr</div>
            </div>
          </div>

          <!-- Tier 2: Mid-market Standard -->
          <div class="bg-slate-950/80 p-5 rounded-2xl border border-indigo-500/30 space-y-2 relative">
            <div class="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              🌟 主力標準推薦
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-indigo-400 font-mono">TIER 2 · 中型企業 / 成長型新創</span>
              <span></span>
            </div>
            <div class="text-xs font-bold text-white">50~200人企業、A輪後新創、SI協力廠商</div>
            <p class="text-[11px] text-slate-400 leading-relaxed">
              有明確痛點與預算編列。找大廠太貴，找初階外包做不出來，最需要你的專案經驗。
            </p>
            <div class="pt-2 border-t border-slate-800/80 text-xs font-mono text-indigo-300 space-y-1">
              <div>• 1個月 RAG 原型：NT$ 100,000 ~ 180,000</div>
              <div>• 定期技術顧問：NT$ 35,000 ~ 50,000 / 月</div>
            </div>
          </div>

          <!-- Tier 3: Enterprise -->
          <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-cyan-400 font-mono">TIER 3 · 大型企業 / 金融製造</span>
              <span class="text-[11px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400">完整交付</span>
            </div>
            <div class="text-xs font-bold text-white">上市櫃製造業、金融電信、跨國企業</div>
            <p class="text-[11px] text-slate-400 leading-relaxed">
              高度重視資安合規、地端 GPU 叢集、權限控管與完整架構規格文件。
            </p>
            <div class="pt-2 border-t border-slate-800/80 text-xs font-mono text-cyan-300 space-y-1">
              <div>• 私有化 AI 系統：NT$ 200,000 ~ 450,000+</div>
              <div>• 專案深度健檢：NT$ 40,000 ~ 80,000 / 次</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. 📊 4 大核心服務報價基準詳細表 (完整保留原本卡片) -->
      <div>
        <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span>📊 4 大核心服務報價基準詳細表 (細節參考)</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- Item 1: AI Workshop & PoC -->
          <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 shadow-xl hover:border-cyan-500/40 transition">
            <div class="flex items-center justify-between mb-4">
              <span class="text-2xl">🧠</span>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                PoC / Workshop
              </span>
            </div>
            <h3 class="text-lg font-bold text-white mb-1">企業 AI 落地評估與 RAG PoC 原型</h3>
            <p class="text-xs text-slate-400 mb-4 leading-relaxed">
              包含地端 Ollama/LLaMA 運算環境搭建、文件清洗切分、向量檢索調優與 WebChat 介面整合。
            </p>

            <div class="bg-slate-950/80 rounded-2xl p-4 border border-slate-800/90 space-y-2 mb-4">
              <div class="flex justify-between items-center text-xs">
                <span class="text-slate-400 font-medium">1~2 天跨部門 AI 痛點工作坊</span>
                <strong class="text-white font-mono text-sm">NT$ 30,000 ~ 50,000 / 場</strong>
              </div>
              <div class="flex justify-between items-center text-xs border-t border-slate-800/60 pt-2">
                <span class="text-slate-400 font-medium">1 個月私有化 RAG 原型搭建 (PoC)</span>
                <strong class="text-cyan-400 font-mono text-sm">NT$ 100,000 ~ 220,000 / 案</strong>
              </div>
            </div>

            <div class="text-[11px] text-slate-500">
              💡 備註：依文檔數量（數十份 vs 數萬份）與是否需要權限隔離/GPU 叢集調整。
            </div>
          </div>

          <!-- Item 2: Architecture Review & Code Review -->
          <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 shadow-xl hover:border-blue-500/40 transition">
            <div class="flex items-center justify-between mb-4">
              <span class="text-2xl">🔍</span>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-950/60 text-blue-400 border border-blue-800/40">
                Advisory / Review
              </span>
            </div>
            <h3 class="text-lg font-bold text-white mb-1">系統架構健檢、Code Review 與排障</h3>
            <p class="text-xs text-slate-400 mb-4 leading-relaxed">
              針對高併發效能瓶頸、記憶體洩漏、資料庫慢查詢或單體系統微服務拆分評估。
            </p>

            <div class="bg-slate-950/80 rounded-2xl p-4 border border-slate-800/90 space-y-2 mb-4">
              <div class="flex justify-between items-center text-xs">
                <span class="text-slate-400 font-medium">每小時線上諮詢 / 代碼審查</span>
                <strong class="text-white font-mono text-sm">NT$ 2,000 ~ 3,500 / hr</strong>
              </div>
              <div class="flex justify-between items-center text-xs border-t border-slate-800/60 pt-2">
                <span class="text-slate-400 font-medium">單次深度健檢報告 (含分析+建議書)</span>
                <strong class="text-blue-400 font-mono text-sm">NT$ 25,000 ~ 40,000 / 次</strong>
              </div>
            </div>

            <div class="text-[11px] text-slate-500">
              💡 備註：通常可先約 30 分鐘初談，確認問題範圍後出具評估工時。
            </div>
          </div>

          <!-- Item 3: Retainer Fractional Tech Lead -->
          <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 shadow-xl hover:border-indigo-500/40 transition">
            <div class="flex items-center justify-between mb-4">
              <span class="text-2xl">🛡️</span>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-800/40">
                Monthly Retainer
              </span>
            </div>
            <h3 class="text-lg font-bold text-white mb-1">定期兼職技術顧問 (Fractional Advisory)</h3>
            <p class="text-xs text-slate-400 mb-4 leading-relaxed">
              新創或中小團隊缺乏資深架構師，每月固定時數協助技術決策、架構把關與新人 Code Review。
            </p>

            <div class="bg-slate-950/80 rounded-2xl p-4 border border-slate-800/90 space-y-2 mb-4">
              <div class="flex justify-between items-center text-xs">
                <span class="text-slate-400 font-medium">輕量顧問方案 (每月 8~10 小時)</span>
                <strong class="text-white font-mono text-sm">NT$ 25,000 ~ 35,000 / 月</strong>
              </div>
              <div class="flex justify-between items-center text-xs border-t border-slate-800/60 pt-2">
                <span class="text-slate-400 font-medium">核心架構方案 (每月 15~20 小時)</span>
                <strong class="text-indigo-400 font-mono text-sm">NT$ 40,000 ~ 60,000 / 月</strong>
              </div>
            </div>

            <div class="text-[11px] text-slate-500">
              💡 備註：建議簽署 3 個月或 6 個月約定，並註明未用完時數不跨月累計。
            </div>
          </div>

          <!-- Item 4: Custom Development Delivery -->
          <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 shadow-xl hover:border-emerald-500/40 transition">
            <div class="flex items-center justify-between mb-4">
              <span class="text-2xl">💻</span>
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                Fixed-Scope Project
              </span>
            </div>
            <h3 class="text-lg font-bold text-white mb-1">客製化後端模組與 API 系統開發</h3>
            <p class="text-xs text-slate-400 mb-4 leading-relaxed">
              承接特定後端微服務 (Java / C# / Python)、通訊中台整合或資料轉譯 (MCM/EFH) 模組。
            </p>

            <div class="bg-slate-950/80 rounded-2xl p-4 border border-slate-800/90 space-y-2 mb-4">
              <div class="flex justify-between items-center text-xs">
                <span class="text-slate-400 font-medium">獨立中小型功能模組 (約 2~3 週工期)</span>
                <strong class="text-white font-mono text-sm">NT$ 50,000 ~ 100,000 / 案</strong>
              </div>
              <div class="flex justify-between items-center text-xs border-t border-slate-800/60 pt-2">
                <span class="text-slate-400 font-medium">完整獨立子系統交付 (約 1~2 個月工期)</span>
                <strong class="text-emerald-400 font-mono text-sm">NT$ 120,000 ~ 300,000 / 案</strong>
              </div>
            </div>

            <div class="text-[11px] text-slate-500">
              💡 備註：依需求規格書評估總工時（每人天估算基準約 NT$ 10,000 ~ 16,000）。
            </div>
          </div>

        </div>
      </div>

      <!-- 4. 付款里程碑與初談提綱 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Standard Payment Milestones -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-xl">
          <h3 class="text-base font-bold text-white mb-4 flex items-center gap-2">
            <span>💳 標準合約付款里程碑 (保護自身權益)</span>
          </h3>
          <div class="space-y-4 text-xs">
            <div class="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div class="flex justify-between font-bold text-white mb-1">
                <span>1. 專案啟動款 (30% ~ 40%)</span>
                <span class="text-blue-400">合約簽訂後 7 日內</span>
              </div>
              <p class="text-slate-400 text-[11px]">啟動架構分析、環境初始化與需求規格書確認。</p>
            </div>

            <div class="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div class="flex justify-between font-bold text-white mb-1">
                <span>2. 中期交付款 (30%)</span>
                <span class="text-indigo-400">核心 PoC / 主要 API 測試通過</span>
              </div>
              <p class="text-slate-400 text-[11px]">完成核心功能開發並於測試機 (Staging) 進行功能展示。</p>
            </div>

            <div class="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div class="flex justify-between font-bold text-white mb-1">
                <span>3. 驗收尾款 (30% ~ 40%)</span>
                <span class="text-emerald-400">正式部署移轉與代碼交接</span>
              </div>
              <p class="text-slate-400 text-[11px]">完成驗收確認書簽署，交付技術文件與程式碼儲存庫。</p>
            </div>
          </div>
        </div>

        <!-- 30-Min Discovery Checklist -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-xl">
          <h3 class="text-base font-bold text-white mb-4 flex items-center gap-2">
            <span>📋 30 分鐘初談必問清單 (釐清真偽需求)</span>
          </h3>
          <div class="space-y-3 text-xs text-slate-300">
            <div class="flex items-start gap-2">
              <span class="text-blue-400 font-bold">Q1.</span>
              <span><strong>目前的具體痛點是什麼？</strong>（例如：文件查不到？系統尖峰崩潰？不知道如何評估 AI？）</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-blue-400 font-bold">Q2.</span>
              <span><strong>現有的技術環境為何？</strong>（地端 Windows/Linux 伺服器？有無 GPU 算力？主要資料庫是什麼？）</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-blue-400 font-bold">Q3.</span>
              <span><strong>期望的交付時程與死線 (Deadline)？</strong>（期望 1 個月 PoC 驗證，還是長期季度專案？）</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-blue-400 font-bold">Q4.</span>
              <span><strong>內部是否已有專責對接窗口與預算編列？</strong>（確認是已立項有預算，還是前期初步探索）</span>
            </div>
          </div>
        </div>

      </div>

      <!-- 5. Quick Copyable Quotation Email Template (Dynamic Contact Info from Profile) -->
      <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <span>✉️ 一鍵複製：初談後標準報價回信範本 (已套用正確電話與信箱)</span>
            </h3>
            <p class="text-xs text-slate-400">初談結束後 24 小時內寄出，展現專業效率與清晰結構。</p>
          </div>
          <button
            @click="copyTemplate"
            class="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition shadow-md flex items-center gap-1.5 shrink-0"
          >
            <span>{{ copied ? '已複製範本 ✓' : '📋 複製回信範本' }}</span>
          </button>
        </div>

        <div class="bg-slate-950 rounded-2xl p-5 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
<pre class="whitespace-pre-wrap">{{ quoteTemplateText }}</pre>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { portfolioData } from '~/data/portfolioData'

const profile = portfolioData.profile
const copied = ref(false)

// Interactive Calculator State
const calculator = reactive({
  serviceType: 'rag_poc',
  days: 10,
  tierMultiplier: 1.3
})

const onServiceTypeChange = () => {
  if (calculator.serviceType === 'rag_poc') calculator.days = 10
  else if (calculator.serviceType === 'workshop') calculator.days = 2
  else if (calculator.serviceType === 'architecture_review') calculator.days = 3
  else if (calculator.serviceType === 'custom_module') calculator.days = 7
}

const calculatedTotal = computed(() => {
  return Math.round(calculator.days * 12000 * calculator.tierMultiplier)
})

const calculatedTotalFormatted = computed(() => {
  return calculatedTotal.value.toLocaleString()
})

const calculatedDepositFormatted = computed(() => {
  return Math.round(calculatedTotal.value * 0.4).toLocaleString()
})

const calculatedMidFormatted = computed(() => {
  return Math.round(calculatedTotal.value * 0.3).toLocaleString()
})

const calculatedFinalFormatted = computed(() => {
  return Math.round(calculatedTotal.value * 0.3).toLocaleString()
})

const quoteWeeks = computed(() => Math.max(1, Math.round(calculator.days / 2.5)))

const quoteTemplateText = computed(() => {
  return `[主旨]：【技術合作評估與方案建議】貴司 [專案名稱] - Lin Tsai (蔡弘霖)

您好 [對方姓名/主管稱謂]：

感謝今天與您進行 30 分鐘的線上技術交流。針對貴司目前面臨的【[如：地端文件搜尋效率低落 / 內部 AI 導入評估]】，我為您整理了初步的解決方案與合作規劃建議如下：

一、 核心目標與交付範疇 (Scope of Work)：
1. [交付項 1：如 本地 Ollama + LLaMA 運算環境搭建與向量資料庫配置]
2. [交付項 2：如 核心業務手冊切分與 Hybrid 語意檢索整合]
3. [交付項 3：如 開箱即用 WebChat 操作介面與操作移轉培訓]

二、 建議合作模式與時程：
• 預計工期：約 [${quoteWeeks.value} 週] (自環境與規格確認後起算)
• 合作計價：NT$ ${calculatedTotalFormatted.value} (含規格確認、PoC 原型搭建與移轉交接)
• 付款方式：專案啟動款 40% (NT$ ${calculatedDepositFormatted.value}) / 中期展示款 30% (NT$ ${calculatedMidFormatted.value}) / 驗收尾款 30% (NT$ ${calculatedFinalFormatted.value})

三、 後續進行步驟：
若上述範疇與方向符合貴司預期，我們可於本週安排簽訂合作備忘錄 (MOU / 勞務合約) 並正式啟動環境準備。

如有任何細節需要進一步討論調整，歡迎隨時來信或回電交流！

祝 研安，
Lin Tsai (蔡弘霖)
${profile.title}
聯絡電話：${profile.phone}
Email：${profile.email}`
})

const applyToEmailTemplate = () => {
  copied.value = false
}

const copyTemplate = () => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(quoteTemplateText.value)
  } else {
    const el = document.createElement('textarea')
    el.value = quoteTemplateText.value
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2500)
}

useHead({
  title: '🔒 內部定價與報價指南 | Lin Tsai',
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})
</script>
