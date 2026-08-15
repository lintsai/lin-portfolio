<template>
  <section id="services" class="py-24 bg-[#07090e] relative overflow-hidden">
    <!-- Ambient Glow background -->
    <div class="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
    <div class="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll fade-in">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3 shadow-inner">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>CONSULTING & CUSTOM COLLABORATION</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          技術諮詢與專案協作 4 大方案
        </h2>
        <p class="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
          不論您需要評估企業私有化 AI 知識庫建置、金融級 CTI 通訊系統整合、微服務架構健檢或 GPU 算力維運，皆能提供客製、可落地的技術協作支援。
        </p>
      </div>

      <!-- 4 Core Service Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <div
          v-for="service in services"
          :key="service.id"
          class="relative bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-indigo-500/50 hover:bg-slate-900 shadow-2xl transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl reveal-on-scroll scale-up"
        >
          <div>
            <!-- Header with Icon & Title -->
            <div class="flex items-start gap-4 mb-6">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border border-indigo-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition duration-300 shrink-0 shadow-inner">
                {{ service.icon }}
              </div>
              <div>
                <h3 class="text-xl font-bold text-white group-hover:text-indigo-300 transition">
                  {{ service.title }}
                </h3>
                <p class="text-xs text-indigo-400 font-medium mt-1">
                  {{ service.subtitle }}
                </p>
              </div>
            </div>

            <!-- Target Audience -->
            <div class="bg-slate-950/70 rounded-xl p-3.5 border border-slate-800/90 mb-5 text-xs text-slate-300">
              <span class="font-bold text-slate-400">適用對象：</span>
              {{ service.targetAudience }}
            </div>

            <!-- Pain Points -->
            <div class="mb-5">
              <h4 class="text-xs font-bold text-red-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <span>⚠️ 直擊團隊痛點</span>
              </h4>
              <ul class="space-y-1.5 text-xs text-slate-300">
                <li v-for="point in service.painPoints" :key="point" class="flex items-start gap-2">
                  <span class="text-red-400 mt-0.5">✕</span>
                  <span class="leading-relaxed">{{ point }}</span>
                </li>
              </ul>
            </div>

            <!-- Deliverables -->
            <div class="mb-6">
              <h4 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <span>✓ 核心交付內容與成效</span>
              </h4>
              <ul class="space-y-2 text-xs text-slate-200">
                <li v-for="item in service.deliverables" :key="item" class="flex items-start gap-2">
                  <span class="text-emerald-400 mt-0.5">▪</span>
                  <span class="leading-relaxed">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Tech Highlights Footer & Correct CTA -->
          <div class="pt-5 border-t border-slate-800/80 mt-auto">
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span
                v-for="tech in service.techHighlights"
                :key="tech"
                class="px-2.5 py-1 text-[11px] font-mono text-indigo-300 bg-indigo-950/40 rounded-lg border border-indigo-800/40"
              >
                #{{ tech }}
              </span>
            </div>

            <a
              href="#contact-services"
              class="w-full py-3 rounded-xl text-xs font-bold text-center text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-md shadow-indigo-600/25 transition duration-200 block"
            >
              針對此項目進行諮詢 / 索取技術方案 →
            </a>
          </div>

        </div>
      </div>

      <!-- 3 Engagement & Pricing Models (Transparent & Grounded) -->
      <div class="mb-20 reveal-on-scroll fade-in">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <span class="text-xs font-bold tracking-widest text-indigo-400 uppercase">PRICING & ENGAGEMENT MODELS</span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            透明彈性的 3 大合作計價模式
          </h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            不需承擔生硬套裝與冗長合約。依專案現況與預算需求量身打造最合適的協作方式。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Model 1: Fixed Scope PoC -->
          <div class="bg-slate-900/80 rounded-3xl border border-slate-800 p-7 hover:border-cyan-500/40 transition duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-2xl mb-5 shadow-inner">
                🧪
              </div>
              <div class="text-xs font-mono font-bold text-cyan-400 mb-1">MODE 01</div>
              <h4 class="text-lg font-bold text-white mb-2">專案里程碑交付 (Fixed-Scope PoC)</h4>
              <p class="text-xs text-slate-300 leading-relaxed mb-4">
                針對範疇明確的系統模組或概念驗證，依需求規格書與各階段驗收標準分期計費。
              </p>
              <div class="space-y-2 text-xs text-slate-400 border-t border-slate-800 pt-3">
                <div class="flex items-center gap-1.5"><span class="text-cyan-400">✓</span> 適用地端 RAG 知識庫、指定 API 模組開發</div>
                <div class="flex items-center gap-1.5"><span class="text-cyan-400">✓</span> 階段驗收交付、成效清晰可控</div>
              </div>
            </div>
            <div class="pt-5 border-t border-slate-800/80 mt-5 text-[11px] text-slate-500 font-mono">
              計價方式：依規格評估客製報價
            </div>
          </div>

          <!-- Model 2: Time & Material / Workshop -->
          <div class="bg-slate-900/80 rounded-3xl border border-slate-800 p-7 hover:border-blue-500/40 transition duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-blue-950/40 border border-blue-800/40 flex items-center justify-center text-2xl mb-5 shadow-inner">
                ⏱️
              </div>
              <div class="text-xs font-mono font-bold text-blue-400 mb-1">MODE 02</div>
              <h4 class="text-lg font-bold text-white mb-2">時數諮詢與工作坊 (Time & Workshop)</h4>
              <p class="text-xs text-slate-300 leading-relaxed mb-4">
                針對短期排障、架構健檢或跨部門 AI 探索工作坊，按預約工時或單場活動靈活計費。
              </p>
              <div class="space-y-2 text-xs text-slate-400 border-t border-slate-800 pt-3">
                <div class="flex items-center gap-1.5"><span class="text-blue-400">✓</span> 適用 1~2 天企業 AI 工作坊、架構審核</div>
                <div class="flex items-center gap-1.5"><span class="text-blue-400">✓</span> 快速切入核心問題、低負擔無合約綁定</div>
              </div>
            </div>
            <div class="pt-5 border-t border-slate-800/80 mt-5 text-[11px] text-slate-500 font-mono">
              計價方式：按時數 / 單場活動計費
            </div>
          </div>

          <!-- Model 3: Fractional Retainer -->
          <div class="bg-slate-900/80 rounded-3xl border border-slate-800 p-7 hover:border-indigo-500/40 transition duration-300 flex flex-col justify-between shadow-xl">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 flex items-center justify-center text-2xl mb-5 shadow-inner">
                🛡️
              </div>
              <div class="text-xs font-mono font-bold text-indigo-400 mb-1">MODE 03</div>
              <h4 class="text-lg font-bold text-white mb-2">定期技術顧問 (Fractional Advisory)</h4>
              <p class="text-xs text-slate-300 leading-relaxed mb-4">
                新創或中小團隊缺乏資深架構師時，以月約定固定諮詢時數，長期提供技術決策與把關。
              </p>
              <div class="space-y-2 text-xs text-slate-400 border-t border-slate-800 pt-3">
                <div class="flex items-center gap-1.5"><span class="text-indigo-400">✓</span> 適用定期架構諮詢、代碼審查與技術選型</div>
                <div class="flex items-center gap-1.5"><span class="text-indigo-400">✓</span> 相當於擁有隨時可調度的外部資深架構師</div>
              </div>
            </div>
            <div class="pt-5 border-t border-slate-800/80 mt-5 text-[11px] text-slate-500 font-mono">
              計價方式：月費固定諮詢時數 (如 10-20h/月)
            </div>
          </div>

        </div>
      </div>

      <!-- 4-Step Engagement Process -->
      <div class="bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl reveal-on-scroll scale-up">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-xs font-bold tracking-widest text-indigo-400 uppercase">HOW WE COLLABORATE</span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            四步協作流程，確保專案精準落地
          </h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-2">
            從 30 分鐘初談釐清痛點、可行性評估、敏捷 PoC 到上線移轉，全程透明可控。
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="step in engagementProcess"
            :key="step.step"
            class="relative bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/40 hover:bg-slate-900 transition group"
          >
            <div class="text-3xl font-black text-slate-700 group-hover:text-indigo-400 transition font-mono mb-3">
              {{ step.step }}
            </div>
            <h4 class="text-base font-bold text-white mb-2">
              {{ step.title }}
            </h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              {{ step.desc }}
            </p>
          </div>
        </div>

        <div class="text-center mt-10 pt-8 border-t border-slate-800/80">
          <p class="text-sm text-slate-300 mb-4">有專案痛點或新構想需要評估？歡迎預約 30 分鐘線上免費架構初談。</p>
          <a
            href="#contact-services"
            class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5"
          >
            <span>立即預約技術初談</span>
            <span>→</span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolioData'

const services = portfolioData.services
const engagementProcess = portfolioData.engagementProcess
</script>
