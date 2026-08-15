<template>
  <header id="overview" class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <!-- Ambient glowing backgrounds -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>
    <div class="absolute top-1/3 right-10 w-[450px] h-[320px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl reveal-on-scroll fade-in">
      
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-800/90 text-indigo-400 border border-indigo-500/20 shadow-inner mb-6">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
        <span>技術諮詢 · 專案協作 · 企業 AI 工作坊 · 架構健檢</span>
      </div>

      <!-- Main Heading (Smooth responsive PC headline) -->
      <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
        <span class="inline-block whitespace-nowrap">私有化 AI 落地評估</span>
        <span class="block sm:inline sm:ml-3 bg-gradient-to-r from-indigo-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
          與高可用系統架構協作
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
        協助團隊與企業打破技術瓶頸。提供地端 RAG 知識庫搭建評估、AI 導入工作坊、高併發微服務重構與系統架構健檢等專業支援，打造務實可落地的解決方案。
      </p>

      <!-- Action CTAs -->
      <div class="flex flex-wrap justify-center gap-4 mb-14">
        <a
          href="#contact-services"
          class="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5 flex items-center gap-2"
        >
          <span>預約 30 分鐘線上技術初談</span>
          <span>→</span>
        </a>

        <a
          href="#service-packages"
          class="px-8 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 hover:text-white border border-slate-700 transition flex items-center gap-2"
        >
          <span>檢視 4 大合作方案與實務</span>
        </a>
      </div>

      <!-- 4 Value Highlights Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-left reveal-on-scroll scale-up">
        <div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 hover:border-indigo-500/30 transition">
          <div class="text-indigo-400 text-lg mb-1">🔒 100% 地端私有</div>
          <div class="text-xs text-slate-300">機敏資料與文件不出企業內網，杜絕外洩風險。</div>
        </div>
        <div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 hover:border-blue-500/30 transition">
          <div class="text-blue-400 text-lg mb-1">⚡ 高併發實戰經驗</div>
          <div class="text-xs text-slate-300">10年金控與電信百萬級流量架構調校底蘊。</div>
        </div>
        <div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 hover:border-cyan-500/30 transition">
          <div class="text-cyan-400 text-lg mb-1">👥 跨部門工作坊</div>
          <div class="text-xs text-slate-300">盤點業務痛點，低成本驗證 AI 概念與可行性。</div>
        </div>
        <div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 hover:border-emerald-500/30 transition">
          <div class="text-emerald-400 text-lg mb-1">📈 彈性協作模式</div>
          <div class="text-xs text-slate-300">提供 PoC 概念驗證、模組開發與架構諮詢支援。</div>
        </div>
      </div>

    </div>
  </header>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolioData'
</script>
