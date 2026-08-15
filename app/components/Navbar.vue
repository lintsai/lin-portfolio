<template>
  <nav class="fixed w-full top-0 z-50 bg-[#07090e]/90 backdrop-blur-2xl border-b border-slate-800/80 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 flex-nowrap gap-4">
        
        <!-- Left: Logo & Brand (Never wraps) -->
        <NuxtLink to="/" class="flex items-center gap-3 group shrink-0">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition duration-300 shrink-0">
            <div class="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center font-bold text-white tracking-wider text-base">
              LT
            </div>
          </div>
          <div class="flex flex-col whitespace-nowrap">
            <div class="flex items-center gap-2">
              <span class="text-base font-bold text-white tracking-tight group-hover:text-blue-400 transition">Lin Tsai (蔡弘霖)</span>
            </div>
            <span class="text-xs text-slate-400 hidden sm:inline">軟體專案主管 · 解決方案架構師</span>
          </div>
        </NuxtLink>

        <!-- Center: Mode Switcher Tabs (Desk & Tablet, compact & clean) -->
        <div class="hidden md:flex items-center bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 shadow-inner shrink-0">
          <NuxtLink
            to="/"
            class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap"
            :class="[
              isCareerPage
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            ]"
          >
            <span>💼 個人經歷與實績</span>
          </NuxtLink>

          <NuxtLink
            to="/services"
            class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap"
            :class="[
              isServicesPage
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            ]"
          >
            <span>🚀 技術諮詢與專案合作</span>
          </NuxtLink>
        </div>

        <!-- Right: Action CTAs + Mobile Toggle (Clean flex-nowrap) -->
        <div class="flex items-center gap-2.5 shrink-0">
          <!-- Download Resume Button (Desktop) -->
          <a
            v-if="isCareerPage"
            :href="resumeDownloadUrl"
            download="Lin_Tsai_Resume_2026.pdf"
            target="_blank"
            class="hidden lg:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white rounded-xl border border-slate-700 transition shadow-sm whitespace-nowrap"
            title="下載完整履歷 PDF"
          >
            <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>履歷 (PDF)</span>
          </a>

          <!-- Primary CTA Button -->
          <a
            :href="isCareerPage ? '#contact-career' : '#contact-services'"
            class="px-4 py-2 text-xs font-bold text-white rounded-xl shadow-md transition flex items-center gap-1.5 whitespace-nowrap"
            :class="[
              isCareerPage
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-600/25'
                : 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-indigo-600/25'
            ]"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>{{ isCareerPage ? '合作洽談' : '預約諮詢' }}</span>
          </a>

          <!-- Mobile / Tablet Hamburger Button -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition border border-slate-800"
            aria-label="選單開關"
          >
            <svg v-if="!isMobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div
      v-show="isMobileMenuOpen"
      class="md:hidden bg-[#0a0d14]/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 transition-all duration-300 space-y-4"
    >
      <!-- Mode Switcher Mobile -->
      <div class="grid grid-cols-2 gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800">
        <NuxtLink
          to="/"
          @click="isMobileMenuOpen = false"
          class="py-2 text-center text-xs font-bold rounded-lg transition"
          :class="isCareerPage ? 'bg-blue-600 text-white' : 'text-slate-400'"
        >
          💼 個人經歷與實績
        </NuxtLink>
        <NuxtLink
          to="/services"
          @click="isMobileMenuOpen = false"
          class="py-2 text-center text-xs font-bold rounded-lg transition"
          :class="isServicesPage ? 'bg-indigo-600 text-white' : 'text-slate-400'"
        >
          🚀 技術諮詢與專案合作
        </NuxtLink>
      </div>

      <div class="flex flex-col space-y-1.5">
        <a
          v-for="item in currentNavLinks"
          :key="item.name"
          :href="item.href"
          @click="isMobileMenuOpen = false"
          class="px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition"
        >
          {{ item.name }}
        </a>
      </div>

      <div class="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
        <a
          v-if="isCareerPage"
          :href="resumeDownloadUrl"
          download="Lin_Tsai_Resume_2026.pdf"
          target="_blank"
          class="w-full py-2.5 text-center text-xs font-semibold text-slate-200 bg-slate-800 rounded-xl border border-slate-700 transition"
        >
          📄 下載最新履歷 (PDF)
        </a>
        <a
          :href="isCareerPage ? '#contact-career' : '#contact-services'"
          @click="isMobileMenuOpen = false"
          class="w-full py-2.5 text-center text-xs font-bold text-white rounded-xl shadow-lg transition"
          :class="isCareerPage ? 'bg-blue-600 hover:bg-blue-500' : 'bg-indigo-600 hover:bg-indigo-500'"
        >
          💬 {{ isCareerPage ? '發送職涯合作洽談' : '預約 30 分鐘需求諮詢' }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { portfolioData } from '~/data/portfolioData'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const resumeDownloadUrl = portfolioData.profile.resumePdfUrl

const isCareerPage = computed(() => route.path === '/' || route.path === '')
const isServicesPage = computed(() => route.path === '/services')

const careerNavLinks = [
  { name: '關於我', href: '#about' },
  { name: '專案實績庫', href: '#projects' },
  { name: '職涯歷程', href: '#experience' },
  { name: '專業技能', href: '#skills' },
  { name: '學歷認證', href: '#education' },
  { name: '聯繫洽談', href: '#contact-career' }
]

const servicesNavLinks = [
  { name: '服務概觀', href: '#overview' },
  { name: '4大顧問方案', href: '#service-packages' },
  { name: '落地案例', href: '#case-studies' },
  { name: '交付流程', href: '#engagement-process' },
  { name: '預約諮詢', href: '#contact-services' }
]

const currentNavLinks = computed(() => {
  return isServicesPage.value ? servicesNavLinks : careerNavLinks
})
</script>
