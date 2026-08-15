<template>
  <section id="experience" class="py-24 bg-[#07090e] relative overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll fade-in">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
          <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          <span>CAREER TIMELINE & LEADERSHIP</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          職涯發展歷程與團隊管理實務
        </h2>
        <p class="text-slate-400 text-sm sm:text-base mt-3">
          約 10 年軟體工程深度開發與 5 年技術主管管理經驗，從大型通訊中台研發到企業 AI 應用落地。
        </p>
      </div>

      <!-- Experience Cards Timeline -->
      <div class="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
        <div
          v-for="(exp, idx) in experiences"
          :key="idx"
          class="relative pl-8 md:pl-12 group reveal-on-scroll"
          :class="`delay-${(idx + 1) * 100}`"
        >
          <!-- Timeline Indicator Dot -->
          <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 transition duration-300 shadow-md shadow-blue-500/20"></div>

          <!-- Time Period (Mobile vs Desktop) -->
          <div class="md:absolute md:-left-36 md:top-1 text-xs font-bold text-blue-400 mb-2 md:mb-0 md:text-right md:w-28 tracking-wide font-mono">
            {{ exp.period }}
          </div>

          <!-- Main Experience Card -->
          <div class="bg-slate-900/80 rounded-3xl border border-slate-800 p-6 sm:p-8 hover:border-blue-500/40 hover:bg-slate-900 transition duration-300 shadow-2xl backdrop-blur-md">
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
              <div>
                <h3 class="text-xl font-bold text-white tracking-tight">
                  {{ exp.role }}
                </h3>
                <div class="text-xs sm:text-sm text-indigo-400 font-semibold mt-0.5">
                  {{ exp.company }}
                </div>
              </div>

              <div class="flex flex-wrap items-center gap-2">
                <span
                  v-if="exp.teamSize"
                  class="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                >
                  👥 {{ exp.teamSize }}
                </span>
                <span class="px-2.5 py-1 rounded-md text-xs text-slate-400 bg-slate-950 border border-slate-800">
                  📍 {{ exp.location }}
                </span>
              </div>
            </div>

            <!-- Summary -->
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              {{ exp.summary }}
            </p>

            <!-- Key Achievements -->
            <div class="space-y-2 mb-6">
              <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">主要職責與關鍵實績：</div>
              <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
                <li
                  v-for="(achieve, i) in exp.keyAchievements"
                  :key="i"
                  class="flex items-start gap-2.5"
                >
                  <span class="text-blue-400 mt-0.5 font-bold">✓</span>
                  <span class="leading-relaxed">{{ achieve }}</span>
                </li>
              </ul>
            </div>

            <!-- Skills Chips -->
            <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
              <span
                v-for="s in exp.skills"
                :key="s"
                class="px-2.5 py-1 text-xs bg-slate-950 text-slate-300 rounded-lg border border-slate-800 font-medium"
              >
                {{ s }}
              </span>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolioData'

const experiences = portfolioData.experiences
</script>
