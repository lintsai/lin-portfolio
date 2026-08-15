<template>
  <section id="contact-career" class="py-24 bg-[#0a0d14] relative overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll fade-in">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3 shadow-inner">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          <span>CAREER COOPERATION & LEADERSHIP</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          職涯合作與技術交流洽談
        </h2>
        <p class="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
          歡迎獵頭顧問、企業高管或技術長洽談「軟體專案主管 / 技術總監 (Tech Lead / Engineering Director)」、「解決方案架構師 (Solution Architect)」或策略性技術顧問合作。
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left: Direct Contact Card (5 cols) -->
        <div class="lg:col-span-5 space-y-6 reveal-on-scroll slide-right">
          <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl space-y-6">
            
            <h3 class="text-xl font-bold text-white mb-2">直接聯繫窗口</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              歡迎透過 Email 或電話直接聯繫，通常於 24 小時內回覆。
            </p>

            <!-- Email with Copy Button -->
            <div class="bg-slate-950/70 rounded-2xl p-4 border border-slate-800 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  📧
                </div>
                <div>
                  <div class="text-[11px] text-slate-400 uppercase font-semibold">電子郵件</div>
                  <a :href="`mailto:${profile.email}`" class="text-sm font-bold text-white hover:text-blue-400 transition">
                    {{ profile.email }}
                  </a>
                </div>
              </div>

              <button
                @click="copyEmail"
                class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              >
                {{ copied ? '已複製 ✓' : '複製' }}
              </button>
            </div>

            <!-- Phone -->
            <div class="bg-slate-950/70 rounded-2xl p-4 border border-slate-800 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                  📱
                </div>
                <div>
                  <div class="text-[11px] text-slate-400 uppercase font-semibold">聯絡電話</div>
                  <a :href="`tel:${profile.phone}`" class="text-sm font-bold text-white hover:text-emerald-400 transition">
                    {{ profile.phone }}
                  </a>
                </div>
              </div>

              <a
                :href="`tel:${profile.phone}`"
                class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              >
                撥打
              </a>
            </div>

            <!-- Job Preferences -->
            <div class="bg-slate-950/70 rounded-2xl p-4 border border-slate-800 space-y-3 text-xs">
              <div class="flex items-center justify-between text-slate-300">
                <span class="text-slate-400">偏好合作型態</span>
                <span class="font-semibold text-white">全職領導職缺 · 顧問合作 · 混合辦公</span>
              </div>
              <div class="flex items-center justify-between text-slate-300">
                <span class="text-slate-400">主要活動地點</span>
                <span class="font-semibold text-white">台北市 · 新北市 · 桃園市 · 新竹縣市</span>
              </div>
              <div class="flex items-center justify-between text-slate-300">
                <span class="text-slate-400">可洽談時間</span>
                <span class="font-semibold text-emerald-400">錄取確認後約 1~2 個月可就任</span>
              </div>
              <div class="flex items-center justify-between text-slate-300 border-t border-slate-800 pt-3">
                <span class="text-slate-400">完整版個人資歷</span>
                <a
                  :href="profile.resumePdfUrl"
                  target="_blank"
                  class="font-semibold text-blue-400 hover:text-blue-300 underline flex items-center gap-1"
                >
                  下載 PDF 履歷 ↗
                </a>
              </div>
            </div>

            <!-- Social Links -->
            <div class="pt-2">
              <span class="text-xs text-slate-400 font-semibold mb-3 block">專業履歷與社群平台</span>
              <div class="grid grid-cols-3 gap-2 text-xs">
                <a
                  :href="profile.socials.linkedin"
                  target="_blank"
                  rel="noopener"
                  class="p-2.5 bg-slate-950/50 hover:bg-slate-800 rounded-xl border border-slate-800 text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
                <a
                  :href="profile.socials.github"
                  target="_blank"
                  rel="noopener"
                  class="p-2.5 bg-slate-950/50 hover:bg-slate-800 rounded-xl border border-slate-800 text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
                <a
                  :href="profile.socials.blog"
                  target="_blank"
                  rel="noopener"
                  class="p-2.5 bg-slate-950/50 hover:bg-slate-800 rounded-xl border border-slate-800 text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5"
                >
                  <span>AI Blog</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Right: Inquiry Form (7 cols) -->
        <div class="lg:col-span-7 reveal-on-scroll slide-left">
          <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
            <h3 class="text-xl font-bold text-white mb-2">發送職涯合作洽談</h3>
            <p class="text-xs text-slate-400 mb-6">
              請填寫貴司開放之領導職務或合作簡介，系統將為您直接產生專屬聯繫郵件。
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-5">
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">您的姓名 / 稱謂 *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="例如：王主管 / HR Alex"
                    class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">聯絡信箱 *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="hr@company.com"
                    class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">公司 / 單位名稱 *</label>
                  <input
                    v-model="form.company"
                    type="text"
                    required
                    placeholder="例如：某某科技 / 某金控資訊部"
                    class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">職位 / 合作項目名稱 *</label>
                  <input
                    v-model="form.jobTitle"
                    type="text"
                    required
                    placeholder="例如：軟體專案主管 / 解決方案架構師"
                    class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">職位範疇 / 合作說明 *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  placeholder="請簡要說明團隊職責、主要技術棧、合作期望或方便交流討論的時間..."
                  class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>發送職涯合作信件</span>
                <span>→</span>
              </button>

            </form>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { portfolioData } from '~/data/portfolioData'

const profile = portfolioData.profile
const copied = ref(false)

const form = reactive({
  name: '',
  email: '',
  company: '',
  jobTitle: '',
  message: ''
})

const copyEmail = () => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(profile.email)
  } else {
    const textArea = document.createElement('textarea')
    textArea.value = profile.email
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2500)
}

const handleSubmit = () => {
  const subject = encodeURIComponent(`[職涯合作洽談] ${form.company} - ${form.jobTitle} (聯絡人: ${form.name})`)
  const body = encodeURIComponent(
`您好 Lin 弘霖，

我是 ${form.company} 的 ${form.name}。
我們目前正在招募【${form.jobTitle}】職位（或評估相關技術合作），看到您的經歷與專案實績非常符合我們的需求，希望能與您安排時間進一步交流洽談。

【職位與合作說明】：
${form.message}

聯絡信箱：${form.email}

期待收到您的回覆，謝謝！`
  )

  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
}
</script>
