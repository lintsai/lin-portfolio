<template>
  <section class="py-20 bg-[#07090e] relative overflow-hidden border-t border-slate-800/60">
    <!-- Ambient glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll fade-in">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3 shadow-inner">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          <span>CORE EXPERTISE & COMPETENCIES</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          30 秒讀懂：三大黃金實戰領域
        </h2>
        <p class="text-slate-400 text-sm sm:text-base mt-2.5 leading-relaxed">
          融合 10 年後端微服務架構底蘊、5 年技術主管領導力與前瞻企業 AI 落地實踐。
        </p>
      </div>

      <!-- 3 Pillars Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Pillar 1: Enterprise AI & RAG -->
        <div class="bg-slate-900/80 hover:bg-slate-900 rounded-3xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 p-8 flex flex-col justify-between group shadow-2xl backdrop-blur-xl reveal-on-scroll scale-up delay-100">
          <div>
            <!-- Icon Box & Header -->
            <div class="flex items-center justify-between mb-6">
              <div class="w-14 h-14 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition duration-300">
                🤖
              </div>
              <span class="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                AI / RAG / AIOps
              </span>
            </div>

            <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition mb-2">
              企業 AI 與 RAG 落地實務
            </h3>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              主導企業 AI Workflow 導入與跨部門 Workshop 探索，盤點流程痛點，結合私有化地端 LLM 與 RAG 知識檢索技術打造實用方案。
            </p>

            <!-- Highlights list -->
            <div class="space-y-2.5 mb-6 border-t border-slate-800/80 pt-4">
              <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">核心實戰能力：</div>
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-cyan-400 font-bold mt-0.5">▹</span>
                <span>跨部門 AI Workshop 盤點業務流程與落地評估</span>
              </div>
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-cyan-400 font-bold mt-0.5">▹</span>
                <span>地端 Ollama / LLaMA / Qwen2.5 運算環境規劃</span>
              </div>
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-cyan-400 font-bold mt-0.5">▹</span>
                <span>向量資料庫混合檢索 (Hybrid Search + Re-ranking)</span>
              </div>
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-cyan-400 font-bold mt-0.5">▹</span>
                <span>AIOps 專用 GPU 算力節點配置與自動化維運</span>
              </div>
            </div>
          </div>

          <!-- Bottom Tech Tags -->
          <div class="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-cyan-300 rounded border border-slate-800">Python</span>
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-cyan-300 rounded border border-slate-800">RAG</span>
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-cyan-300 rounded border border-slate-800">Ollama</span>
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-cyan-300 rounded border border-slate-800">PyTorch</span>
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-cyan-300 rounded border border-slate-800">Docker</span>
          </div>
        </div>

        <!-- Pillar 2: High-Concurrency Financial CTI -->
        <div class="bg-slate-900/80 hover:bg-slate-900 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 p-8 flex flex-col justify-between group shadow-2xl backdrop-blur-xl reveal-on-scroll scale-up delay-200">
          <div>
            <!-- Icon Box & Header -->
            <div class="flex items-center justify-between mb-6">
              <div class="w-14 h-14 rounded-2xl bg-blue-950/40 border border-blue-800/40 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition duration-300">
                🏦
              </div>
              <span class="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                CTI / Microservices
              </span>
            </div>

            <h3 class="text-xl font-bold text-white group-hover:text-blue-300 transition mb-2">
              金融電信高併發 CTI 中台
            </h3>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              多年金融與電信客服中台架構經驗，主導視訊/文字/語音多渠道通訊中台研發，支援百萬級用戶高可用、即時通訊與資安加密。
            </p>

            <!-- Highlights list -->
            <div class="space-y-2.5 mb-6 border-t border-slate-800/80 pt-4">
              <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">核心實戰能力：</div>
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-blue-400 font-bold mt-0.5">▹</span>
                <span>金融級 WebRTC 視訊鑑價與高解析錄影存證中台</span>
              </div>
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-blue-400 font-bold mt-0.5">▹</span>
                <span>純網銀全渠道文字與語音 (IVR) 智能路由中台</span>
              </div>
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-blue-400 font-bold mt-0.5">▹</span>
                <span>Spring Boot / Cloud 微服務高併發架構調校</span>
              </div>
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-blue-400 font-bold mt-0.5">▹</span>
                <span>符合金管會規範之金融資安加密與全文檢索 (Solr)</span>
              </div>
            </div>
          </div>

          <!-- Bottom Tech Tags -->
          <div class="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-blue-300 rounded border border-slate-800">Java / Spring Boot</span>
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-blue-300 rounded border border-slate-800">WebRTC</span>
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-blue-300 rounded border border-slate-800">Solr</span>
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-blue-300 rounded border border-slate-800">Redis</span>
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-blue-300 rounded border border-slate-800">Avaya CTI</span>
          </div>
        </div>

        <!-- Pillar 3: Engineering Leadership & System Integration -->
        <div class="bg-slate-900/80 hover:bg-slate-900 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 p-8 flex flex-col justify-between group shadow-2xl backdrop-blur-xl reveal-on-scroll scale-up delay-300">
          <div>
            <!-- Icon Box & Header -->
            <div class="flex items-center justify-between mb-6">
              <div class="w-14 h-14 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition duration-300">
                👥
              </div>
              <span class="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Leadership / MIS / MBA
              </span>
            </div>

            <h3 class="text-xl font-bold text-white group-hover:text-indigo-300 transition mb-2">
              技術團隊領導與核心系統整合
            </h3>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              5 年以上技術主管實務，帶領 9-12 人跨職能團隊。具備美國 MBA 與 PSM 敏捷認證，兼具技術深度、業務思維與跨部門溝通推進力。
            </p>

            <!-- Highlights list -->
            <div class="space-y-2.5 mb-6 border-t border-slate-800/80 pt-4">
              <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">核心實戰能力：</div>
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-indigo-400 font-bold mt-0.5">▹</span>
                <span>帶領 9-12 人敏捷團隊 (SA/SD/PG/DevOps/QA)</span>
              </div>
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-indigo-400 font-bold mt-0.5">▹</span>
                <span>主導泰國廠 (TMT) 遷廠系統搬遷與環境部署</span>
              </div>
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-indigo-400 font-bold mt-0.5">▹</span>
                <span>Oracle Agile PLM (9.3.1.2 → 9.3.6) 跨版本升級</span>
              </div>
              <div class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-indigo-400 font-bold mt-0.5">▹</span>
                <span>MCM 訊息排程、EFH 資料轉譯、工廠 EIP 門戶架構</span>
              </div>
            </div>
          </div>

          <!-- Bottom Tech Tags -->
          <div class="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-indigo-300 rounded border border-slate-800">C# / .NET</span>
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-indigo-300 rounded border border-slate-800">Vue 3</span>
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-indigo-300 rounded border border-slate-800">Oracle PLM</span>
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-indigo-300 rounded border border-slate-800">Splunk</span>
            <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-indigo-300 rounded border border-slate-800">PSM I 敏捷</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
