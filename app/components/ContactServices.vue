<template>
  <section id="contact-services" class="py-24 bg-[#0a0d14] relative overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll fade-in">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
          <span>TECHNICAL COLLABORATION</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          預約技術諮詢 / 專案合作
        </h2>
        <p class="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
          歡迎專案負責人、技術主管或團隊夥伴預約 30 分鐘線上技術初談，交流探討可行性與最佳實踐。
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left: Direct Contact Card (5 cols) -->
        <div class="lg:col-span-5 space-y-6 reveal-on-scroll slide-right">
          <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl space-y-6">
            
            <h3 class="text-xl font-bold text-white mb-2">技術協作窗口</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              任何 PoC 概念驗證、模組開發需求或技術諮詢，歡迎直接來信或致電交流。
            </p>

            <!-- Email with Copy Button -->
            <div class="bg-slate-950/70 rounded-2xl p-4 border border-slate-800 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                  📧
                </div>
                <div>
                  <div class="text-[11px] text-slate-400 uppercase font-semibold">電子郵件</div>
                  <a :href="`mailto:${profile.email}`" class="text-sm font-bold text-white hover:text-indigo-400 transition">
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
                <div class="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center">
                  📱
                </div>
                <div>
                  <div class="text-[11px] text-slate-400 uppercase font-semibold">專案電話</div>
                  <a :href="`tel:${profile.phone}`" class="text-sm font-bold text-white hover:text-cyan-400 transition">
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

            <!-- Service Commitments -->
            <div class="bg-slate-950/70 rounded-2xl p-4 border border-slate-800 space-y-2.5 text-xs text-slate-300">
              <div class="font-bold text-white mb-1">🛡️ 顧問服務承諾：</div>
              <div class="flex items-center gap-2">
                <span class="text-emerald-400">✓</span>
                <span>嚴格簽署保密協議 (NDA)，機敏資料安全絕不外洩</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-emerald-400">✓</span>
                <span>先以低成本 PoC 驗證可行性，再評估正式導入</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-emerald-400">✓</span>
                <span>完整架構文件、代碼交接與線上操作維運培訓</span>
              </div>
            </div>

            <div class="pt-2 text-center">
              <NuxtLink
                to="/"
                class="text-xs text-slate-400 hover:text-white underline"
              >
                ← 查看 Lin Tsai 的個人完整職涯履歷與管理背景
              </NuxtLink>
            </div>

          </div>
        </div>

        <!-- Right: Project Inquiry Form (7 cols) -->
        <div class="lg:col-span-7 reveal-on-scroll slide-left">
          <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
            <h3 class="text-xl font-bold text-white mb-2">填寫專案需求單</h3>
            <p class="text-xs text-slate-400 mb-6">
              請選擇諮詢方案並說明您的專案痛點，我們將盡快安排初談。
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-5">
              
              <!-- Service Type -->
              <div>
                <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  諮詢服務方案 *
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    v-for="s in serviceTypes"
                    :key="s.value"
                    @click="form.service = s.value"
                    class="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-left transition border"
                    :class="[
                      form.service === s.value
                        ? 'bg-indigo-600/20 text-indigo-300 border-indigo-500 shadow-sm'
                        : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                    ]"
                  >
                    {{ s.label }}
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
                    placeholder="例如：陳協理 / Alex"
                    class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">公司 / 單位信箱 *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <!-- Company & Timeline -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">公司 / 團隊名稱 *</label>
                  <input
                    v-model="form.company"
                    type="text"
                    required
                    placeholder="例如：某某製造 / 某某金融科技"
                    class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">預計時程 / 預算級距</label>
                  <input
                    v-model="form.budgetTimeline"
                    type="text"
                    placeholder="例如：1~2 個月內 / 預計 20~50 萬"
                    class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">專案背景與痛點說明 *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  placeholder="請簡要描述您目前的系統現況、遇到之技術瓶頸或想實現的 AI / CTI / 微服務應用場景..."
                  class="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>發送專案需求信件</span>
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

const serviceTypes = [
  { label: '🧠 企業私有化 AI / RAG 知識庫', value: '企業私有化 AI 知識庫建置' },
  { label: '📞 金融/企業客服與 CTI 整合', value: '全渠道客服與 CTI 整合專案' },
  { label: '⚡ 高併發微服務架構與重構', value: '後端高併發微服務重構' },
  { label: '🚀 DevOps / AIOps 算力維運', value: 'AIOps 智能維運與算力配置' }
]

const form = reactive({
  service: '企業私有化 AI 知識庫建置',
  name: '',
  email: '',
  company: '',
  budgetTimeline: '',
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
  const subject = encodeURIComponent(`[專案接案諮詢] ${form.service} - ${form.company} (${form.name})`)
  const body = encodeURIComponent(
`您好 Lin 顧問，

我是 ${form.company} 的 ${form.name}。
我們對您的【${form.service}】服務方案很有興趣，希望能預約時間進一步討論專案可行性。

【專案需求與痛點】：
${form.message}

【預計時程/預算】：
${form.budgetTimeline || '面議'}

【聯絡方式】：
信箱：${form.email}

期待收到您的回覆，謝謝！`
  )

  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
}
</script>
