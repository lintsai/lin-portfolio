<template>
  <section id="skills" class="py-24 bg-[#0a0d14] relative overflow-hidden">
    <!-- Glow -->
    <div class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll fade-in">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
          <span>COMPREHENSIVE SKILLSET</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          專業能力與技術矩陣
        </h2>
        <p class="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
          融合 10 年後端微服務工程、金融級通訊整合、敏捷領導力與前瞻企業 AI 落地技術。
        </p>
      </div>

      <!-- Skills Categories Grid with Staggered Scroll Reveal -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-on-scroll scale-up">
        <div
          v-for="(category, cIdx) in skillCategories"
          :key="category.category"
          class="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 hover:border-blue-500/40 hover:bg-slate-900 shadow-2xl transition-all duration-300 flex flex-col justify-between backdrop-blur-xl"
        >
          <div>
            <!-- Category Title -->
            <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <span class="text-2xl">{{ category.icon }}</span>
              <h3 class="text-lg font-bold text-white">
                {{ category.category }}
              </h3>
            </div>

            <!-- Skills List -->
            <div class="space-y-3.5">
              <div
                v-for="skill in category.skills"
                :key="skill.name"
                class="bg-slate-950/60 rounded-2xl p-3.5 border border-slate-850 hover:border-blue-500/30 transition"
              >
                <div class="flex items-center justify-between gap-2 mb-1">
                  <span class="text-sm font-bold text-white">{{ skill.name }}</span>
                  <span
                    class="px-2 py-0.5 text-[10px] font-semibold rounded"
                    :class="[
                      skill.level.includes('精通') || skill.level.includes('專家')
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                    ]"
                  >
                    {{ skill.level }}
                  </span>
                </div>
                <p class="text-xs text-slate-400 font-mono leading-relaxed">
                  {{ skill.desc }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolioData'

const skillCategories = portfolioData.skillCategories
</script>
