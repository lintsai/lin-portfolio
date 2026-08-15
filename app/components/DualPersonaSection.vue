<template>
  <section class="py-12 bg-[#0a0d14] border-y border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2">Dual Value Positioning</h2>
        <p class="text-2xl sm:text-3xl font-extrabold text-white">滿足全職團隊領導與專案顧問外包需求</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        <!-- Track 1: Job Seeking (求職) -->
        <div class="relative group bg-gradient-to-b from-slate-900/90 to-slate-950/90 rounded-2xl p-7 border border-slate-800 hover:border-indigo-500/50 shadow-xl transition duration-300 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <span>💼 企業全職領導 (Tech Leadership)</span>
              </div>
              <span class="text-xs text-slate-500 font-mono">Full-time Hire</span>
            </div>

            <h3 class="text-xl font-bold text-white group-hover:text-indigo-300 transition">
              軟體專案主管 / 解決方案架構師
            </h3>

            <p class="text-sm text-slate-300 leading-relaxed">
              {{ dualPersona.recruitment.description }}
            </p>

            <div class="space-y-2 pt-2">
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">適配職位：</span>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="role in dualPersona.recruitment.roles"
                  :key="role"
                  class="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {{ role }}
                </span>
              </div>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
            <a href="#experience" class="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group/btn">
              <span>檢視 10 年職涯與管理經歷</span>
              <span class="group-hover/btn:translate-x-1 transition">→</span>
            </a>
            <a :href="resumePdfUrl" download class="text-xs text-slate-400 hover:text-white underline">
              下載完整履歷
            </a>
          </div>
        </div>

        <!-- Track 2: Freelance & Consulting (接案) -->
        <div class="relative group bg-gradient-to-b from-slate-900/90 to-slate-950/90 rounded-2xl p-7 border border-slate-800 hover:border-blue-500/50 shadow-xl transition duration-300 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <span>🚀 專案接案與技術顧問 (Consulting)</span>
              </div>
              <span class="text-xs text-slate-500 font-mono">Freelance & PoC</span>
            </div>

            <h3 class="text-xl font-bold text-white group-hover:text-blue-300 transition">
              企業 AI 導入 / CTI 客服中台 / 微服務重構
            </h3>

            <p class="text-sm text-slate-300 leading-relaxed">
              {{ dualPersona.freelance.description }}
            </p>

            <div class="space-y-2 pt-2">
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">交付核心領域：</span>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="role in dualPersona.freelance.roles"
                  :key="role"
                  class="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {{ role }}
                </span>
              </div>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
            <a href="#services" class="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group/btn">
              <span>探索 4 大顧問服務方案</span>
              <span class="group-hover/btn:translate-x-1 transition">→</span>
            </a>
            <a href="#contact" class="text-xs font-semibold text-slate-300 hover:text-white bg-blue-600/30 hover:bg-blue-600/50 px-3 py-1 rounded-md border border-blue-500/30 transition">
              預約需求訪談
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolioData'

const dualPersona = portfolioData.dualPersona
const resumePdfUrl = portfolioData.profile.resumePdfUrl
</script>
