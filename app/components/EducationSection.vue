<template>
  <section id="education" class="py-24 bg-[#0a0d14]/70 border-t border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left: Education & Certifications (7 cols) -->
        <div class="lg:col-span-7 space-y-10 reveal-on-scroll slide-right">
          
          <!-- Education Block -->
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
              <span>EDUCATION</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">
              學歷背景 (中英文學歷)
            </h2>

            <div class="space-y-4">
              <div
                v-for="(edu, idx) in educationAndCerts.education"
                :key="idx"
                class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition shadow-lg"
              >
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 class="text-base sm:text-lg font-bold text-white">
                    {{ edu.degree }}
                  </h3>
                  <span class="text-xs font-semibold text-blue-400">
                    {{ edu.period }}
                  </span>
                </div>
                <div class="text-xs sm:text-sm font-medium text-indigo-300 mb-2">
                  {{ edu.school }}
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">
                  {{ edu.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Certifications Block -->
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <span>CERTIFICATIONS</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">
              專業證照與資格認證
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="(cert, idx) in educationAndCerts.certifications"
                :key="idx"
                class="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/30 transition flex flex-col justify-between shadow-lg"
              >
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-emerald-600/10 text-emerald-400 flex items-center justify-center flex-shrink-0 text-base">
                    📜
                  </div>
                  <div>
                    <h4 class="text-xs sm:text-sm font-bold text-white mb-1">
                      {{ cert.name }}
                    </h4>
                    <div class="text-[11px] text-emerald-400 font-medium mb-1">
                      {{ cert.issuer }}
                    </div>
                    <p class="text-[11px] text-slate-400 leading-relaxed">
                      {{ cert.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Right: References & Creator Persona (5 cols) -->
        <div class="lg:col-span-5 space-y-8 reveal-on-scroll slide-left">
          
          <!-- References Block -->
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
              <span>PROFESSIONAL REFERENCES</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">
              主管推薦人背書
            </h2>

            <div class="space-y-4">
              <div
                v-for="(ref, idx) in references"
                :key="idx"
                class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition shadow-lg"
              >
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-base font-bold text-white">
                    {{ ref.name }} <span class="text-xs text-purple-400 font-normal">| {{ ref.title }}</span>
                  </h3>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/40 font-semibold">
                    推薦人
                  </span>
                </div>
                <div class="text-xs font-medium text-slate-300 mb-3">
                  {{ ref.company }}
                </div>
                <div class="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <a :href="`mailto:${ref.contact}`" class="hover:text-blue-400 transition flex items-center gap-1">
                    <span>✉️</span> {{ ref.contact }}
                  </a>
                  <span v-if="ref.phone" class="text-slate-600">|</span>
                  <span v-if="ref.phone">📞 {{ ref.phone }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Creator & AI Explorer Persona Card (PEACXE) -->
          <div class="bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-900 rounded-3xl border border-purple-900/40 p-6 relative overflow-hidden group shadow-xl">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500/60 shadow-lg flex-shrink-0 bg-black">
                <img
                  src="/images/peacxe_anime_avatar.png"
                  alt="PEACXE 皮斯斯"
                  class="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div>
                <div class="text-xs text-purple-400 font-bold tracking-wider">CREATOR & AI EXPLORER</div>
                <h3 class="text-lg font-extrabold text-white tracking-tight">
                  PEACXE (皮斯斯)
                </h3>
                <div class="text-xs text-slate-400 font-mono">
                  AI BUILDS. I CREATE. WE PLAY.
                </div>
              </div>
            </div>

            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              熱愛探索前瞻 AI Agent、遊戲專案與內容創作，透過社群與開源分享技術洞察。
            </p>

            <div class="grid grid-cols-2 gap-2 text-center text-xs">
              <a
                :href="profile.socials.blog"
                target="_blank"
                rel="noopener"
                class="p-2.5 bg-slate-950/70 hover:bg-purple-900/30 rounded-xl border border-purple-900/30 text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5"
              >
                <span>AI Blog</span>
                <span>↗</span>
              </a>
              <a
                :href="profile.socials.github"
                target="_blank"
                rel="noopener"
                class="p-2.5 bg-slate-950/70 hover:bg-purple-900/30 rounded-xl border border-purple-900/30 text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolioData'

const educationAndCerts = portfolioData.educationAndCerts
const references = portfolioData.references
const profile = portfolioData.profile
</script>
