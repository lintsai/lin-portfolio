<template>
  <section id="contact" class="py-24 bg-[#0a0d14] relative overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
          <span>GET IN TOUCH</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          啟動合作 / 預約諮詢
        </h2>
        <p class="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
          目前持續開放「全職技術主管 / 架構師」職位面試，並承接「企業 AI 知識庫建置、CTI 系統整合與技術顧問」專案。
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left: Direct Contact Card (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl space-y-6">
            
            <h3 class="text-xl font-bold text-white mb-2">直接聯繫方式</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              歡迎透過 Email、電話或 LinkedIn 隨時與我聯繫，通常於 24 小時內回覆。
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

            <!-- Location & Resume -->
            <div class="bg-slate-950/70 rounded-2xl p-4 border border-slate-800 space-y-3 text-xs">
              <div class="flex items-center justify-between text-slate-300">
                <span class="text-slate-400">主要活動地點</span>
                <span class="font-semibold text-white">{{ profile.location }}</span>
              </div>
              <div class="flex items-center justify-between text-slate-300 border-t border-slate-800 pt-3">
                <span class="text-slate-400">完整履歷檔案</span>
                <a
                  :href="profile.resumePdfUrl"
                  download="Lin_Tsai_Resume.pdf"
                  class="font-semibold text-blue-400 hover:text-blue-300 underline flex items-center gap-1"
                >
                  下載 PDF 格式
                </a>
              </div>
            </div>

            <!-- Social Links Matrix -->
            <div class="pt-2">
              <span class="text-xs text-slate-400 font-semibold mb-3 block">專業履歷與社群平台</span>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <a
                  :href="profile.socials.linkedin"
                  target="_blank"
                  rel="noopener"
                  class="p-2.5 bg-slate-950/50 hover:bg-slate-800 rounded-xl border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition flex items-center justify-center gap-2"
                >
                  <span>LinkedIn 檔案</span>
                  <span>↗</span>
                </a>
                <a
                  :href="profile.socials.cakeresume"
                  target="_blank"
                  rel="noopener"
                  class="p-2.5 bg-slate-950/50 hover:bg-slate-800 rounded-xl border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition flex items-center justify-center gap-2"
                >
                  <span>CakeResume</span>
                  <span>↗</span>
                </a>
                <a
                  :href="profile.socials.github"
                  target="_blank"
                  rel="noopener"
                  class="p-2.5 bg-slate-950/50 hover:bg-slate-800 rounded-xl border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition flex items-center justify-center gap-2"
                >
                  <span>GitHub 開源</span>
                  <span>↗</span>
                </a>
                <a
                  :href="profile.socials.blog"
                  target="_blank"
                  rel="noopener"
                  class="p-2.5 bg-slate-950/50 hover:bg-slate-800 rounded-xl border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition flex items-center justify-center gap-2"
                >
                  <span>AI Study Blog</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Right: Inquiry Form (7 cols) -->
        <div class="lg:col-span-7">
          <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
            <h3 class="text-xl font-bold text-white mb-2">線上需求諮詢單</h3>
            <p class="text-xs text-slate-400 mb-6">
              請選擇您的諮詢類型並填寫簡要說明，系統將自動為您整理並建立信件發送。
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-5">
              
              <!-- Inquiry Type Selector -->
              <div>
                <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  諮詢類型 / 合作性質
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    v-for="type in inquiryTypes"
                    :key="type.value"
                    @click="form.type = type.value"
                    class="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-left transition border"
                    :class="[
                      form.type === type.value
                        ? 'bg-blue-600/20 text-blue-300 border-blue-500 shadow-sm'
                        : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                    ]"
                  >
                    {{ type.label }}
                  </button>
                </div>
              </div>

              <!-- Name & Email -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">您的姓名 / 稱呼 *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="例如：王經理 / Alex Lin"
                    class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">聯絡信箱 *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>

              <!-- Company & Organization -->
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">公司 / 單位名稱</label>
                <input
                  v-model="form.company"
                  type="text"
                  placeholder="例如：某某科技 / 某金控資訊部"
                  class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <!-- Message / Details -->
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">需求說明 / 職位介紹 *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  placeholder="請簡要描述您的專案痛點、時程預算，或公司目前正在招募之職缺資訊..."
                  class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>建立並發送聯繫信件</span>
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

const inquiryTypes = [
  { label: '💼 全職工作面試機會', value: '求職面試邀請' },
  { label: '🧠 企業私有化 AI / RAG 建置', value: '企業 AI / RAG 專案諮詢' },
  { label: '📞 客服與 CTI 系統整合', value: '客服與 CTI 系統整合專案' },
  { label: '⚡ 微服務重構與技術顧問', value: '微服務重構與技術顧問' }
]

const form = reactive({
  type: '求職面試邀請',
  name: '',
  email: '',
  company: '',
  message: ''
})

const copyEmail = () => {
  navigator.clipboard.writeText(profile.email)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2500)
}

const handleSubmit = () => {
  const subject = encodeURIComponent(`[個人網站諮詢] ${form.type} - ${form.name} (${form.company || '個人'})`)
  const body = encodeURIComponent(
`您好 Lin，

我是：${form.name}
所屬單位：${form.company || '無'}
聯絡信箱：${form.email}
諮詢類型：${form.type}

需求說明：
${form.message}

期待您的回覆，謝謝！`
  )

  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
}
</script>
