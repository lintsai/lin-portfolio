<template>
  <div class="fixed bottom-6 right-6 z-50 font-sans pointer-events-none">
    <!-- 1. 懸浮啟動按鈕 (Floating Action Button) -->
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
    >
      <button
        v-if="!isOpen"
        @click="toggleChat"
        aria-label="開啟 AI 助理對話"
        class="pointer-events-auto absolute bottom-0 right-0 origin-bottom-right group flex items-center gap-3 px-4 py-3 bg-[#111827]/95 hover:bg-[#1f293d] text-white rounded-full border border-blue-500/40 shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 select-none whitespace-nowrap"
      >
        <!-- 脈衝動畫光環 -->
        <span class="absolute -top-1 -right-1 flex h-3.5 w-3.5 pointer-events-none">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-500 border-2 border-[#111827]"></span>
        </span>

        <!-- AI 圖標 -->
        <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>

        <!-- 按鈕文字提示 -->
        <span class="text-sm font-semibold text-slate-100 group-hover:text-blue-300 transition-colors pr-1 hidden sm:inline-block">
          💬 詢問 AI 助理
        </span>
      </button>
    </transition>

    <!-- 2. AI 對話視窗 (Chat Modal Window) -->
    <transition
      enter-active-class="transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1)"
      enter-from-class="opacity-0 scale-90 translate-y-3"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-200 cubic-bezier(0.16, 1, 0.3, 1)"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-90 translate-y-3"
    >
      <div
        v-if="isOpen"
        class="pointer-events-auto absolute bottom-0 right-0 origin-bottom-right flex flex-col w-[92vw] sm:w-[410px] h-[580px] max-h-[82vh] bg-[#0d111a]/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(37,99,235,0.2)] overflow-hidden"
      >
        <!-- 頂部標題列 (Header) -->
        <div class="px-4 py-3.5 bg-[#131b2c] border-b border-slate-700/60 flex items-center justify-between relative">
          <!-- 頂部高光條紋 -->
          <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

          <div class="flex items-center gap-2.5">
            <div class="relative">
              <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-md">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#131b2c] rounded-full"></span>
            </div>

            <div>
              <div class="flex items-center gap-1.5">
                <h3 class="text-sm font-bold text-slate-100 tracking-wide">Lin's AI Assistant</h3>
                <span class="px-1.5 py-0.5 text-[10px] font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded">顧問特助</span>
              </div>
              <p class="text-[11px] text-slate-400 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                LLaMA 3.3 70B · 專屬知識庫驅動
              </p>
            </div>
          </div>

          <!-- 右側功能按鈕 (清空 / 關閉) -->
          <div class="flex items-center gap-1">
            <button
              @click="clearHistory"
              title="清空對話紀錄"
              aria-label="清空對話紀錄"
              class="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
            <button
              @click="toggleChat"
              title="關閉視窗"
              aria-label="關閉視窗"
              class="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- 訊息列表區域 (Message Container) -->
        <div
          ref="messagesContainer"
          class="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent text-sm"
        >
          <!-- 對話歷史氣泡 -->
          <div
            v-for="(msg, index) in messages"
            :key="index"
            class="flex flex-col"
            :class="msg.role === 'user' ? 'items-end' : 'items-start'"
          >
            <!-- 角色身分與時間戳記 -->
            <div class="flex items-center gap-1.5 mb-1 text-[11px] text-slate-400 px-1">
              <span v-if="msg.role === 'assistant'" class="font-medium text-blue-400">Lin's AI</span>
              <span v-else class="font-medium text-slate-300">您 (訪客)</span>
              <span class="text-[10px] text-slate-500">{{ msg.time }}</span>
            </div>

            <!-- 氣泡本體 -->
            <div
              class="max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed text-sm shadow-sm transition-all"
              :class="[
                msg.role === 'user'
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-tr-none'
                  : 'bg-[#182030] text-slate-200 border border-slate-700/70 rounded-tl-none prose prose-invert prose-sm max-w-none'
              ]"
            >
              <!-- Assistant 支援簡易 Markdown 渲染 -->
              <div v-if="msg.role === 'assistant'" class="chat-markdown" v-html="renderMarkdown(msg.content)"></div>
              <!-- User 純文字呈現 -->
              <div v-else class="whitespace-pre-wrap break-words">{{ msg.content }}</div>

              <!-- 動態延伸引導提問 (Suggestion Chips) -->
              <div
                v-if="msg.role === 'assistant' && msg.suggestions && msg.suggestions.length > 0"
                class="mt-2.5 pt-2 border-t border-slate-700/50 flex flex-col gap-1.5 not-prose"
              >
                <div class="text-[11px] font-medium text-blue-300 flex items-center gap-1">
                  <span>💡</span> 您可能想接著問：
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <button
                    v-for="(sug, sIdx) in msg.suggestions"
                    :key="sIdx"
                    @click="sendQuickPrompt(sug)"
                    :disabled="isLoading"
                    class="text-xs text-left px-2.5 py-1.5 bg-[#121927] hover:bg-blue-600/30 text-blue-200 hover:text-white border border-blue-500/30 hover:border-blue-400 rounded-lg transition-all flex items-center gap-1.5 group disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                  >
                    <span class="text-blue-400 text-[10px] group-hover:translate-x-0.5 transition-transform">➜</span>
                    <span>{{ sug }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 載入中狀態 (Typing Indicator) -->
          <div v-if="isLoading" class="flex flex-col items-start space-y-1">
            <div class="flex items-center gap-1.5 mb-1 text-[11px] text-blue-400 px-1">
              <span class="font-medium">Lin's AI</span>
              <span class="text-[10px] text-slate-500">正在組織回覆...</span>
            </div>
            <div class="bg-[#182030] border border-slate-700/70 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style="animation-delay: 0ms"></div>
              <div class="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style="animation-delay: 150ms"></div>
              <div class="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style="animation-delay: 300ms"></div>
            </div>
          </div>
        </div>

        <!-- 底部輸入區域 (Input Bar) -->
        <div class="p-3 bg-[#101624] border-t border-slate-700/60">
          <form @submit.prevent="sendMessage" class="flex items-center gap-2">
            <input
              ref="inputField"
              v-model="inputMessage"
              type="text"
              :disabled="isLoading"
              placeholder="詢問 Lin 的專案實績、技術架構或接案顧問..."
              class="flex-1 bg-[#182234] text-slate-100 placeholder-slate-400 text-sm px-3.5 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              :disabled="isLoading || !inputMessage.trim()"
              aria-label="發送訊息"
              class="p-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white rounded-xl transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center shrink-0 shadow-md"
            >
              <svg v-if="!isLoading" class="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <svg v-else class="w-4 h-4 animate-spin text-slate-300" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </form>

          <!-- 底部提示免責 -->
          <div class="mt-2 text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
            <span>AI 助理回答僅供參考 · 深度洽談：</span>
            <a href="mailto:lin15642@gmail.com" class="text-blue-400 hover:underline">lin15642@gmail.com</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, onMounted, watch } from 'vue'

interface DisplayMessage {
  role: 'user' | 'assistant'
  content: string
  time: string
  suggestions?: string[]
}

const isOpen = ref(false)
const isLoading = ref(false)
const inputMessage = ref('')
const messagesContainer = ref<HTMLElement | null>(null)
const inputField = ref<HTMLInputElement | null>(null)

// 取得當前時間字串 HH:mm
const getCurrentTime = () => {
  const now = new Date()
  return now.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false })
}

// 預設歡迎訊息
const initialWelcomeMessage: DisplayMessage = {
  role: 'assistant',
  content: '您好！我是 **Lin Tsai (蔡弘霖)** 的專屬 AI 助理 🤖。\n\n您可以向我詢問關於 Lin 的架構經驗、AI 專案實績或顧問諮詢合作！',
  time: getCurrentTime(),
  suggestions: [
    '🧠 介紹企業私有化 AI/RAG 實績',
    '⚡ 10年後端微服務與金融 CTI',
    '👥 5年技術管理與團隊規模',
    '🚀 顧問諮詢與專案協作流程'
  ]
}

const messages = reactive<DisplayMessage[]>([
  { ...initialWelcomeMessage }
])

// 切換對話視窗開關
const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      scrollToBottom()
      inputField.value?.focus()
    })
  }
}

// 清空對話紀錄
const clearHistory = () => {
  messages.splice(0, messages.length, {
    ...initialWelcomeMessage,
    time: getCurrentTime()
  })
}

// 點擊快捷推薦詞發送
const sendQuickPrompt = (promptText: string) => {
  inputMessage.value = promptText
  sendMessage()
}

// 自動捲動至底
const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// 發送訊息
const sendMessage = async () => {
  const text = inputMessage.value.trim()
  if (!text || isLoading.value) return

  // 1. 加入使用者訊息
  messages.push({
    role: 'user',
    content: text,
    time: getCurrentTime()
  })

  inputMessage.value = ''
  isLoading.value = true
  await scrollToBottom()

  try {
    // 2. 轉換為後端格式
    const payloadMessages = messages.map((m) => ({
      role: m.role,
      content: m.content
    }))

    // 3. 呼叫 Nuxt 3 伺服器端 API 並加入自然思考擬真延遲 (約 850ms)
    const [response] = await Promise.all([
      $fetch<{ reply?: string; suggestions?: string[] }>('/api/chat', {
        method: 'POST',
        body: {
          messages: payloadMessages
        }
      }),
      new Promise((resolve) => setTimeout(resolve, 1350)) // 擬真思考時間 (1.35秒)
    ])

    const replyText = response?.reply || '抱歉，目前暫時無法取得回覆，請稍後再試或透過 Email (lin15642@gmail.com) 與 Lin 聯絡。'
    const replySuggestions = response?.suggestions || []

    // 4. 加入助理回覆與引導提問
    messages.push({
      role: 'assistant',
      content: replyText,
      suggestions: replySuggestions,
      time: getCurrentTime()
    })
  } catch (error: any) {
    console.error('[ChatWidget] Error:', error)
    const errStatusMessage = error?.data?.statusMessage || error?.message || '伺服器連線異常'
    messages.push({
      role: 'assistant',
      content: `❌ **連線發生異常**：${errStatusMessage}\n\n若問題持續，歡迎直接透過 Email 聯繫 Lin：**lin15642@gmail.com**`,
      suggestions: ['詢問 Lin 的其他技術專長', '直接寄信聯絡 Lin'],
      time: getCurrentTime()
    })
  } finally {
    isLoading.value = false
    await scrollToBottom()
    nextTick(() => {
      inputField.value?.focus()
    })
  }
}

// 輕量化安全 Markdown 轉 HTML 解析器
const renderMarkdown = (content: string): string => {
  if (!content) return ''

  // 0. 預先處理：若編號清單被連在句號後 (如「...。2. 」)，自動補上換行
  let raw = content.replace(/([。！？；])\s*(\d+\.\s+)/g, '$1\n$2')

  // 1. HTML 跳脫 (防止 XSS)
  let html = raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // 2. 代碼區塊 ```code```
  html = html.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (_match, _lang, code) => {
    return `<pre class="my-2.5 p-3 bg-[#0a0f18] text-blue-300 font-mono text-xs rounded-xl overflow-x-auto border border-slate-800 shadow-inner"><code>${code.trim()}</code></pre>`
  })

  // 3. 行內代碼 `code`
  html = html.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 mx-0.5 rounded bg-slate-800/90 text-blue-300 font-mono text-xs border border-slate-700">$1</code>')

  // 4. 粗體 **text**
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')

  // 5. 標題 ###、##、#
  html = html.replace(/^###\s+(.+)$/gm, '<h5 class="text-sm font-bold text-blue-300 mt-2 mb-1">$1</h5>')
  html = html.replace(/^##\s+(.+)$/gm, '<h4 class="text-sm font-bold text-blue-200 mt-2.5 mb-1">$1</h4>')
  html = html.replace(/^#\s+(.+)$/gm, '<h3 class="text-base font-bold text-white mt-3 mb-1.5">$1</h3>')

  // 6. 連結 [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline underline-offset-2">$1</a>')

  // 7. 解析項目符號清單 (- / *) 與 編號清單 (1. / 2.)
  const lines = html.split('\n')
  const formattedLines: string[] = []
  let listType: 'ul' | 'ol' | null = null

  for (let line of lines) {
    const trimmed = line.trim()
    const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('* ')
    const isNumbered = /^\d+\.\s+/.test(trimmed)

    if (isBullet) {
      if (listType !== 'ul') {
        if (listType === 'ol') formattedLines.push('</ol>')
        formattedLines.push('<ul class="my-2 space-y-1.5 list-disc list-outside ml-4 text-slate-200">')
        listType = 'ul'
      }
      formattedLines.push(`<li class="leading-relaxed pl-1">${trimmed.substring(2)}</li>`)
    } else if (isNumbered) {
      if (listType !== 'ol') {
        if (listType === 'ul') formattedLines.push('</ul>')
        formattedLines.push('<ol class="my-2 space-y-1.5 list-decimal list-outside ml-4 text-slate-200">')
        listType = 'ol'
      }
      const itemContent = trimmed.replace(/^\d+\.\s+/, '')
      formattedLines.push(`<li class="leading-relaxed pl-1">${itemContent}</li>`)
    } else {
      if (listType) {
        formattedLines.push(listType === 'ul' ? '</ul>' : '</ol>')
        listType = null
      }
      formattedLines.push(line)
    }
  }

  if (listType) {
    formattedLines.push(listType === 'ul' ? '</ul>' : '</ol>')
  }

  html = formattedLines.join('\n')

  // 8. 換行轉換為緊湊段落間距或 <br/>
  html = html.replace(/<\/ul>\s*<br\s*\/?>/gi, '</ul>')
  html = html.replace(/<\/ol>\s*<br\s*\/?>/gi, '</ol>')
  html = html.replace(/\n\n+/g, '<div class="h-1.5"></div>')
  html = html.replace(/\n/g, '<br/>')

  return html
}

// 監聽訊息變化自動滾動
watch(
  () => messages.length,
  () => {
    scrollToBottom()
  }
)
</script>

<style scoped>
/* 隱藏原生捲軸但保留捲動功能 */
.scrollbar-thin::-webkit-scrollbar {
  width: 5px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #2b3648;
  border-radius: 9999px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #3b82f6;
}

/* Markdown 樣式微調 */
.chat-markdown :deep(p) {
  margin: 0.15rem 0;
}
.chat-markdown :deep(ul),
.chat-markdown :deep(ol) {
  margin: 0.25rem 0;
}
.chat-markdown :deep(li) {
  margin: 0.1rem 0;
  line-height: 1.45;
}
</style>
