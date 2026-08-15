<template>
  <section id="case-studies" class="py-24 bg-[#080b11] border-t border-slate-800/80 relative overflow-hidden">
    <!-- Glow -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll fade-in">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3 shadow-inner">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>ARCHITECTURAL CASE STUDIES & ROI</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          實戰經驗：3 大代表性架構落地思維
        </h2>
        <p class="text-base sm:text-lg text-slate-400 mt-3 leading-relaxed">
          從「團隊痛點、架構策略到實質成效」，展示如何協助團隊攻克真實技術難題。
        </p>
      </div>

      <!-- 3 Case Study Panels -->
      <div class="space-y-10">
        
        <!-- Case 1: Private AI / RAG -->
        <div class="bg-slate-900/80 rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-2xl backdrop-blur-xl hover:border-cyan-500/40 transition duration-300 reveal-on-scroll slide-right">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div class="text-xs font-mono font-bold text-cyan-400 tracking-wider mb-1">CASE 01 · 企業 AI 與地端 RAG</div>
              <h3 class="text-2xl font-bold text-white">
                製造與金融業「地端私有化 AI 知識庫」零外洩導入方案
              </h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 text-xs font-mono bg-cyan-950/50 text-cyan-300 rounded-lg border border-cyan-800/40">#RAG</span>
              <span class="px-3 py-1 text-xs font-mono bg-cyan-950/50 text-cyan-300 rounded-lg border border-cyan-800/40">#Ollama</span>
              <span class="px-3 py-1 text-xs font-mono bg-cyan-950/50 text-cyan-300 rounded-lg border border-cyan-800/40">#HybridSearch</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-xs sm:text-sm">
            <div class="bg-red-950/20 p-5 rounded-2xl border border-red-900/30">
              <div class="font-bold text-red-400 mb-2 flex items-center gap-1.5">
                <span>⚠️ 企業面臨痛點</span>
              </div>
              <p class="text-slate-300 leading-relaxed text-xs">
                內部技術規格與機敏文件分散於各部門伺服器，員工查找耗時，且機敏文件受法規限制絕對不能上傳公有雲 ChatGPT，傳統關鍵字檢索又無法精準回答。
              </p>
            </div>

            <div class="bg-blue-950/20 p-5 rounded-2xl border border-blue-900/30">
              <div class="font-bold text-blue-400 mb-2 flex items-center gap-1.5">
                <span>💡 顧問架構策略</span>
              </div>
              <p class="text-slate-300 leading-relaxed text-xs">
                規劃地端私有運算環境 (Ollama + Qwen2.5/LLaMA)，結合向量資料庫與 BM25 混合檢索 (Hybrid Search) 與二次重排 (Re-ranking)，並內建權限過濾與原文引用溯源。
              </p>
            </div>

            <div class="bg-emerald-950/20 p-5 rounded-2xl border border-emerald-900/30">
              <div class="font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
                <span>🏆 交付成效與 ROI</span>
              </div>
              <p class="text-slate-300 leading-relaxed text-xs">
                100% 保障資料不出內網，搜尋命中率由 40% 提升至 85% 以上，跨部門工程與合規文檔查詢平均縮短 65% 處理工時，有效杜絕 AI 幻覺。
              </p>
            </div>
          </div>
        </div>

        <!-- Case 2: High-Concurrency Financial CTI -->
        <div class="bg-slate-900/80 rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-2xl backdrop-blur-xl hover:border-blue-500/40 transition duration-300 reveal-on-scroll slide-left">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div class="text-xs font-mono font-bold text-blue-400 tracking-wider mb-1">CASE 02 · 金融電信 CTI 中台</div>
              <h3 class="text-2xl font-bold text-white">
                大型金控與純網銀「百萬級高併發通訊與智能分流」重構
              </h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 text-xs font-mono bg-blue-950/50 text-blue-300 rounded-lg border border-blue-800/40">#SpringCloud</span>
              <span class="px-3 py-1 text-xs font-mono bg-blue-950/50 text-blue-300 rounded-lg border border-blue-800/40">#WebRTC</span>
              <span class="px-3 py-1 text-xs font-mono bg-blue-950/50 text-blue-300 rounded-lg border border-blue-800/40">#AvayaCTI</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-xs sm:text-sm">
            <div class="bg-red-950/20 p-5 rounded-2xl border border-red-900/30">
              <div class="font-bold text-red-400 mb-2 flex items-center gap-1.5">
                <span>⚠️ 企業面臨痛點</span>
              </div>
              <p class="text-slate-300 leading-relaxed text-xs">
                尖峰時段進線量暴增導致舊系統記憶體洩漏 (OOM) 崩潰，且文字、語音、視訊等渠道各自孤立，無法統一管理坐席狀態與客戶旅程數據。
              </p>
            </div>

            <div class="bg-blue-950/20 p-5 rounded-2xl border border-blue-900/30">
              <div class="font-bold text-blue-400 mb-2 flex items-center gap-1.5">
                <span>💡 顧問架構策略</span>
              </div>
              <p class="text-slate-300 leading-relaxed text-xs">
                採用 Spring Cloud 微服務重構通訊中繼層，引入非同步訊息佇列削峰填谷，整合 WebRTC 與 Avaya 底層 CTI 協定，並實作金融全系統加密與即時排班路由。
              </p>
            </div>

            <div class="bg-emerald-950/20 p-5 rounded-2xl border border-emerald-900/30">
              <div class="font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
                <span>🏆 交付成效與 ROI</span>
              </div>
              <p class="text-slate-300 leading-relaxed text-xs">
                系統吞吐量提升 300%，穩定承載台北富邦、LINE Bank 百萬級用戶進線，智能機器人與路由分流成功降低人工話務進線量達 40%。
              </p>
            </div>
          </div>
        </div>

        <!-- Case 3: Complex Enterprise MIS & AIOps -->
        <div class="bg-slate-900/80 rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-2xl backdrop-blur-xl hover:border-indigo-500/40 transition duration-300 reveal-on-scroll slide-right">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div class="text-xs font-mono font-bold text-indigo-400 tracking-wider mb-1">CASE 03 · 核心系統升級與 AIOps</div>
              <h3 class="text-2xl font-bold text-white">
                跨國製造業「核心 PLM 系統升級與全球廠區自動化維運」
              </h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 text-xs font-mono bg-indigo-950/50 text-indigo-300 rounded-lg border border-indigo-800/40">#AgilePLM</span>
              <span class="px-3 py-1 text-xs font-mono bg-indigo-950/50 text-indigo-300 rounded-lg border border-indigo-800/40">#AIOps</span>
              <span class="px-3 py-1 text-xs font-mono bg-indigo-950/50 text-indigo-300 rounded-lg border border-indigo-800/40">#Splunk</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-xs sm:text-sm">
            <div class="bg-red-950/20 p-5 rounded-2xl border border-red-900/30">
              <div class="font-bold text-red-400 mb-2 flex items-center gap-1.5">
                <span>⚠️ 企業面臨痛點</span>
              </div>
              <p class="text-slate-300 leading-relaxed text-xs">
                全球工廠 7x24 運轉不容許停機，歷史累積數百支客製化 Java 程式在跨版本升級時面臨高風險相容性問題，日常維運靠人工事後排查、效率低下。
              </p>
            </div>

            <div class="bg-blue-950/20 p-5 rounded-2xl border border-blue-900/30">
              <div class="font-bold text-blue-400 mb-2 flex items-center gap-1.5">
                <span>💡 顧問架構策略</span>
              </div>
              <p class="text-slate-300 leading-relaxed text-xs">
                建立自動化 API 比對與灰階測試流程，並導入 Splunk 日誌儀表板、專用 GPU 節點與 CI/CD AIOps 自動化監控，實作故障預警與健康度監測。
              </p>
            </div>

            <div class="bg-emerald-950/20 p-5 rounded-2xl border border-emerald-900/30">
              <div class="font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
                <span>🏆 交付成效與 ROI</span>
              </div>
              <p class="text-slate-300 leading-relaxed text-xs">
                成功達成泰國遷廠與 PLM 跨版本無痛升級，關鍵日常維運系統維持 99.9% 高可用性，日誌排查時間由數小時縮短至 10 分鐘內。
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
