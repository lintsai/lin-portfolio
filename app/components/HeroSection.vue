<template>
  <header id="about" class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <!-- Ambient glowing backgrounds -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>
    <div class="absolute top-1/3 right-10 w-[450px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Column: Career Intro Content (7 cols) -->
        <div class="lg:col-span-7 space-y-6 text-left reveal-on-scroll slide-right">
          
          <!-- Top Badge (Clean responsive nowrap on PC) -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-800/90 text-blue-400 border border-blue-500/25 shadow-inner whitespace-nowrap">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span class="font-bold text-emerald-400">開放高階職涯洽談</span>
            <span class="text-slate-600">•</span>
            <span class="text-slate-300">10年後端架構 × 5年技術管理</span>
          </div>

          <!-- Main Heading (Smooth PC layout, never awkward break) -->
          <div>
            <div class="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-1.5">
              {{ profile.name }} · {{ profile.englishName }}
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.2]">
              <span class="inline-block whitespace-nowrap">軟體專案主管</span>
              <span class="inline-block whitespace-nowrap bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent sm:ml-3">
                解決方案架構師
              </span>
            </h1>
          </div>

          <!-- Tagline Quote -->
          <div class="border-l-4 border-blue-500 pl-4 py-2 my-3 bg-slate-900/60 rounded-r-2xl max-w-2xl border-y border-r border-slate-800/80 shadow-md">
            <p class="text-sm sm:text-base font-medium text-slate-200 italic leading-snug">
              “{{ profile.tagline }}”
            </p>
          </div>

          <!-- Core Capability Tags (Clean 4 punchy items) -->
          <div class="flex flex-wrap gap-2 pt-0.5">
            <span
              v-for="tag in profile.coreTags"
              :key="tag"
              class="px-3 py-1 text-xs font-medium bg-slate-800/90 text-slate-300 rounded-lg border border-slate-700/70 shadow-sm whitespace-nowrap"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Bio Paragraph -->
          <p class="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {{ profile.bio }}
          </p>

          <!-- Career Action Buttons -->
          <div class="flex flex-wrap gap-3.5 pt-2">
            <a
              :href="profile.resumePdfUrl"
              download="Lin_Tsai_Resume_2026.pdf"
              target="_blank"
              class="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              title="點擊直接下載完整資歷手冊 (PDF)"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>下載完整資歷 (PDF)</span>
            </a>

            <a
              href="#projects"
              class="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 hover:text-white border border-slate-700/80 transition transform hover:-translate-y-0.5 flex items-center gap-2 shadow-sm"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>檢視專案實績庫</span>
            </a>

            <a
              href="#contact-career"
              class="px-5 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition flex items-center gap-2"
            >
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>聯繫交流</span>
            </a>
          </div>

          <!-- Social Links (CakeResume removed) -->
          <div class="flex items-center gap-4 pt-2 text-xs sm:text-sm text-slate-400">
            <span class="text-xs uppercase tracking-wider text-slate-500 font-semibold">專業連結：</span>
            <a :href="profile.socials.linkedin" target="_blank" rel="noopener" class="hover:text-blue-400 transition font-medium">
              LinkedIn ↗
            </a>
            <span class="text-slate-700">•</span>
            <a :href="profile.socials.github" target="_blank" rel="noopener" class="hover:text-blue-400 transition font-medium">
              GitHub ↗
            </a>
            <span class="text-slate-700">•</span>
            <a :href="profile.socials.blog" target="_blank" rel="noopener" class="hover:text-blue-400 transition font-medium">
              AI Study Blog ↗
            </a>
          </div>
        </div>

        <!-- Right Column: Authentic Lin Tsai Portrait Photo (5 cols) -->
        <div class="lg:col-span-5 flex justify-center reveal-on-scroll slide-left">
          <div class="relative w-full max-w-md group">
            
            <!-- Radiant Background Glow -->
            <div class="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 rounded-3xl blur-2xl opacity-35 group-hover:opacity-60 transition duration-500"></div>

            <div class="relative bg-slate-900/90 rounded-3xl border border-slate-800/90 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
              
              <!-- Circular Portrait Frame (Exact user photo) -->
              <div class="relative mx-auto w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-slate-700/80 shadow-2xl mb-6 bg-slate-950">
                <img
                  src="/images/lin_portrait_real.png"
                  alt="Lin Tsai 蔡弘霖"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <!-- Quick Info List -->
              <div class="space-y-2.5 text-left text-xs text-slate-300 border-t border-slate-800/80 pt-4">
                <div class="flex items-center justify-between">
                  <span class="text-slate-400 font-medium">現職單位</span>
                  <span class="font-semibold text-white">廣明光電股份有限公司 | 專案副理</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-400 font-medium">團隊管理規模</span>
                  <span class="font-semibold text-indigo-300">5年主管 · 帶領 9~12 人敏捷團隊</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-400 font-medium">最高學歷</span>
                  <span class="font-semibold text-white">美國 SMSU MBA 企管碩士</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-400 font-medium">專業證照</span>
                  <span class="font-semibold text-emerald-400 flex items-center gap-1">
                    <img src="/images/psm-cert.png" alt="PSM I" class="w-3.5 h-3.5 inline-block" />
                    PSM™ I 敏捷 Master
                  </span>
                </div>
              </div>

              <!-- Quick Direct Contact Button -->
              <a
                :href="`mailto:${profile.email}`"
                class="mt-5 w-full py-2.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 font-semibold text-xs rounded-xl border border-blue-500/30 transition flex items-center justify-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>發送郵件直接聯繫 ({{ profile.email }})</span>
              </a>

            </div>
          </div>
        </div>

      </div>

      <!-- Stats Metric Grid with Staggered Scroll Reveal -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-10 border-t border-slate-800/80 reveal-on-scroll scale-up">
        <div
          v-for="stat in profile.stats"
          :key="stat.label"
          class="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 text-center hover:border-blue-500/40 hover:bg-slate-900/80 transition duration-300 group shadow-md"
        >
          <div class="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-blue-400 transition tracking-tight">
            {{ stat.value }} <span class="text-sm sm:text-base font-normal text-slate-400">{{ stat.unit }}</span>
          </div>
          <div class="text-xs sm:text-sm text-slate-400 mt-1.5 font-medium">
            {{ stat.label }}
          </div>
        </div>
      </div>

    </div>
  </header>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolioData'

const profile = portfolioData.profile
</script>
