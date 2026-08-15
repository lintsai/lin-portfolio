<template>
  <Teleport to="body">
    <div
      v-if="isOpen && project"
      class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8"
      role="dialog"
      aria-modal="true"
    >
      <!-- Backdrop with blur -->
      <div
        class="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fade-in"
        @click="$emit('close')"
      ></div>

      <!-- Modal Container -->
      <div
        class="relative bg-[#0d111a] border border-slate-700/80 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 text-left text-slate-200 animate-scale-up"
        @click.stop
      >
        <!-- Top Sticky Header -->
        <div class="sticky top-0 bg-[#0d111a]/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex justify-between items-center z-20">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {{ project.categoryName }}
            </span>
            <span class="text-xs text-slate-400 font-mono">{{ project.period }}</span>
          </div>

          <button
            @click="$emit('close')"
            class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="關閉視窗 (ESC)"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Modal Body Content -->
        <div class="p-6 sm:p-8 space-y-8">
          
          <!-- Project Title & Subtitle Banner -->
          <div class="border-b border-slate-800 pb-6">
            <div class="text-xs font-mono uppercase text-indigo-400 font-semibold mb-1 tracking-wider">
              {{ project.clientOrCompany }}
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {{ project.title }}
            </h3>
            <p class="text-sm sm:text-base text-slate-300 mt-2 font-medium">
              {{ project.subtitle }}
            </p>

            <div class="flex flex-wrap gap-3 mt-4 text-xs text-slate-300">
              <div class="bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-800 flex items-center gap-2">
                <span class="text-slate-400">{{ props.isServicesMode ? '服務客戶' : '專案歸屬' }}：</span>
                <span class="font-semibold text-white">{{ project.clientOrCompany }}</span>
              </div>
              <div v-if="!props.isServicesMode" class="bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-800 flex items-center gap-2">
                <span class="text-slate-400">擔任角色：</span>
                <span class="font-semibold text-indigo-300">{{ project.role }}</span>
              </div>
            </div>
          </div>

          <!-- Project Summary -->
          <div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              專案概述 (Executive Summary)
            </h4>
            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/50 p-4 rounded-2xl border border-slate-800/80">
              {{ project.summary }}
            </p>
          </div>

          <!-- Challenge & Solution Dual Panels -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-if="project.challenge" class="bg-red-950/20 rounded-2xl p-5 border border-red-900/30">
              <h4 class="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>⚠️ 背景挑戰與痛點 (Challenge)</span>
              </h4>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {{ project.challenge }}
              </p>
            </div>

            <div v-if="project.solution" class="bg-emerald-950/20 rounded-2xl p-5 border border-emerald-900/30">
              <h4 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>💡 技術架構與解決策略 (Solution)</span>
              </h4>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {{ project.solution }}
              </p>
            </div>
          </div>

          <!-- Key Implementation Highlights -->
          <div v-if="project.highlights && project.highlights.length > 0">
            <h4 class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>核心實作與技術亮點 (Key Highlights)</span>
            </h4>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
              <li
                v-for="(highlight, hIdx) in project.highlights"
                :key="hIdx"
                class="bg-slate-900/60 rounded-xl p-3.5 border border-slate-800/80 flex items-start gap-3 hover:border-slate-700 transition"
              >
                <span class="text-blue-400 font-bold shrink-0 mt-0.5">▹</span>
                <span class="leading-relaxed">{{ highlight }}</span>
              </li>
            </ul>
          </div>

          <!-- Outcome / Quantified Impact -->
          <div v-if="project.outcome" class="bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-slate-900 rounded-2xl p-5 border border-blue-800/40">
            <h4 class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
              <span>🏆 商業成效與交付成果 (Outcome & ROI)</span>
            </h4>
            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {{ project.outcome }}
            </p>
          </div>

          <!-- Tech Stack Tags -->
          <div>
            <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              使用技術棧 (Tech Stack)
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="px-3 py-1 text-xs font-mono text-cyan-300 bg-slate-900 rounded-lg border border-slate-700/80 shadow-sm"
              >
                #{{ tech }}
              </span>
            </div>
          </div>

        </div>

        <!-- Sticky Footer Bar with CTA -->
        <div class="sticky bottom-0 bg-[#0d111a]/95 backdrop-blur-md px-6 py-4 border-t border-slate-800 flex justify-between items-center">
          <a
            :href="props.isServicesMode ? '#contact-services' : '#contact-career'"
            @click="$emit('close')"
            class="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition shadow-md shadow-blue-600/30 flex items-center gap-2"
          >
            <span>{{ props.isServicesMode ? '洽詢類似架構顧問建置' : '職涯合作 / 技術洽談' }}</span>
            <span>→</span>
          </a>

          <button
            @click="$emit('close')"
            class="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
          >
            關閉視窗 (ESC)
          </button>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { watch, onMounted, onUnmounted } from 'vue'
import type { ProjectItem } from '~/data/portfolioData'

const props = defineProps<{
  isOpen: boolean
  project: ProjectItem | null
  isServicesMode?: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

// Lock body scrolling when modal is open
watch(() => props.isOpen, (newVal) => {
  if (typeof window !== 'undefined') {
    if (newVal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

// Listen to Escape key
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  if (typeof window !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-scale-up {
  animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
