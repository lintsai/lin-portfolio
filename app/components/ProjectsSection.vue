<template>
  <section id="projects" class="py-24 bg-[#080b11] border-y border-slate-800/80 relative overflow-hidden">
    <!-- Ambient light glow -->
    <div class="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>
    <div class="absolute bottom-10 right-10 w-[450px] h-[300px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span>{{ props.isServicesMode ? 'PROVEN ARCHITECTURE & CLIENT SUCCESS' : 'PROJECT PORTFOLIO & ARCHITECTURE' }}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {{ props.isServicesMode ? '成功案例與系統架構實績' : '精選專案實績與系統架構' }}
          </h2>
          <p class="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            <template v-if="props.isServicesMode">
              協助製造業、金控銀行與電信跨界解決高併發通訊、內部 AI 知識庫與自動化維運痛點，具備完整端到端交付經驗。
            </template>
            <template v-else>
              累積 34+ 個大型專案研發與維運實績，深度跨足企業私有化 AI、金融級 CTI 通訊中台、製造業核心 MIS 與 AIOps 自動化。
            </template>
          </p>
        </div>

        <!-- Mode Toggle Pill (Featured vs All) -->
        <div class="flex items-center bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 self-start lg:self-end shadow-inner">
          <button
            @click="viewMode = 'featured'"
            class="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2"
            :class="[
              viewMode === 'featured'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200'
            ]"
          >
            <span>⭐ 精選代表作 ({{ featuredCount }})</span>
          </button>

          <button
            @click="viewMode = 'all'"
            class="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2"
            :class="[
              viewMode === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200'
            ]"
          >
            <span>📁 完整專案庫 ({{ totalCount }})</span>
          </button>
        </div>
      </div>

      <!-- Search & Category Filters Bar -->
      <div class="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 mb-8 backdrop-blur-md space-y-4">
        <div class="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          
          <!-- Category Tabs -->
          <div class="flex flex-wrap gap-2">
            <button
              v-for="cat in categories"
              :key="cat.id"
              @click="activeCategory = cat.id"
              class="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5"
              :class="[
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              ]"
            >
              <span>{{ cat.icon }}</span>
              <span>{{ cat.name }}</span>
              <span class="text-[10px] opacity-75">({{ getCategoryCount(cat.id) }})</span>
            </button>
          </div>

          <!-- Instant Keyword Search Input -->
          <div class="relative min-w-[240px] max-w-md">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="搜尋技術、客戶或專案 (如: RAG, Java, Splunk)..."
              class="w-full bg-slate-950/90 border border-slate-800 rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
            />
            <svg class="w-4 h-4 text-slate-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute right-2.5 top-2.5 text-slate-400 hover:text-white text-xs"
              title="清除搜尋"
            >
              ✕
            </button>
          </div>

        </div>

        <!-- Filter info bar -->
        <div class="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
          <div class="flex items-center gap-2">
            <span>正在顯示：<strong class="text-white">{{ displayedProjects.length }}</strong> / {{ totalCount }} 個專案</span>
            <span v-if="viewMode === 'featured'" class="text-blue-400 font-medium">（精選模式）</span>
            <span v-if="searchQuery" class="text-indigo-400">（關鍵字「{{ searchQuery }}」篩選）</span>
          </div>

          <button
            v-if="activeCategory !== 'all' || searchQuery || viewMode === 'featured'"
            @click="resetFilters"
            class="text-xs text-blue-400 hover:text-blue-300 underline"
          >
            重設篩選條件
          </button>
        </div>
      </div>

      <!-- No Results State -->
      <div v-if="displayedProjects.length === 0" class="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800/80">
        <div class="text-4xl mb-3">🔍</div>
        <h3 class="text-lg font-bold text-white mb-1">查無符合條件的專案</h3>
        <p class="text-xs text-slate-400 mb-4">請嘗試清除關鍵字或切換至「全部專案」分類</p>
        <button
          @click="resetFilters"
          class="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-500 transition"
        >
          查看全部專案
        </button>
      </div>

      <!-- Project Cards Grid (100% Unified Icon Design - No broken images) -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        <div
          v-for="project in displayedProjects"
          :key="project.id"
          @click="openModal(project)"
          class="bg-slate-900/80 hover:bg-slate-900 rounded-2xl border border-slate-800/90 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
        >
          <!-- Top glowing accent bar -->
          <div
            class="h-1 w-full bg-gradient-to-r"
            :class="getCategoryGradients(project.category)"
          ></div>

          <div class="p-6">
            <!-- Card Header: Category Icon + Period + Category Badge -->
            <div class="flex items-start justify-between gap-3 mb-4">
              <div class="flex items-center gap-3">
                <div
                  class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border shadow-inner transition group-hover:scale-105"
                  :class="getCategoryIconBoxStyle(project.category)"
                >
                  {{ getCategoryIcon(project.category) }}
                </div>
                <div>
                  <span class="text-[11px] font-semibold text-blue-400 block">
                    {{ project.categoryName }}
                  </span>
                  <span class="text-xs text-slate-400 font-medium">
                    {{ project.clientOrCompany }}
                  </span>
                </div>
              </div>

              <!-- Period Pill -->
              <span class="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-slate-950 text-slate-400 border border-slate-800 shrink-0">
                {{ project.period }}
              </span>
            </div>

            <!-- Title & Subtitle -->
            <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition mb-1 leading-snug">
              {{ project.title }}
            </h3>

            <p class="text-xs text-indigo-300/90 font-medium mb-3 line-clamp-1">
              {{ project.subtitle }}
            </p>

            <!-- Role or Customer focus -->
            <div class="text-[11px] text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-850 mb-3">
              <template v-if="props.isServicesMode">
                <span class="text-slate-500 font-semibold">服務對象：</span>{{ project.clientOrCompany }}
              </template>
              <template v-else>
                <span class="text-slate-500 font-semibold">擔任角色：</span>{{ project.role }}
              </template>
            </div>

            <!-- Summary / Challenge Description -->
            <p class="text-xs text-slate-300/90 line-clamp-3 leading-relaxed mb-4">
              {{ props.isServicesMode ? (project.challenge || project.summary) : project.summary }}
            </p>

            <!-- Highlights / Outcome List Preview -->
            <div class="space-y-1.5 mb-4">
              <template v-if="props.isServicesMode && project.outcome">
                <div class="flex items-start gap-1.5 text-xs text-emerald-400/90 bg-emerald-950/20 p-2 rounded-lg border border-emerald-900/30">
                  <span class="text-xs shrink-0">🏆</span>
                  <span class="line-clamp-2 leading-relaxed text-[11px]">{{ project.outcome }}</span>
                </div>
              </template>
              <template v-else>
                <ul class="space-y-1 text-xs text-slate-400">
                  <li v-for="(h, idx) in project.highlights.slice(0, 2)" :key="idx" class="flex items-start gap-1.5">
                    <span class="text-blue-400 text-xs shrink-0 mt-0.5">▪</span>
                    <span class="line-clamp-1 text-[11px] text-slate-300">{{ h }}</span>
                  </li>
                </ul>
              </template>
            </div>
          </div>

          <!-- Card Footer: Tech Stack & CTA -->
          <div class="px-6 pb-6 pt-0 mt-auto">
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span
                v-for="tech in project.techStack.slice(0, 4)"
                :key="tech"
                class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-slate-300 rounded border border-slate-800"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.techStack.length > 4"
                class="px-2 py-0.5 text-[10px] font-mono bg-slate-950/60 text-slate-500 rounded border border-slate-800/60"
              >
                +{{ project.techStack.length - 4 }}
              </span>
            </div>

            <div class="flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300 border-t border-slate-800/80 pt-3">
              <span>檢視架構詳情與成果</span>
              <span class="group-hover:translate-x-1 transition duration-200">→</span>
            </div>
          </div>

        </div>
      </div>

      <!-- Bottom Callout if currently in Featured Mode -->
      <div v-if="viewMode === 'featured' && displayedProjects.length > 0" class="text-center mt-12 pt-8 border-t border-slate-800/60">
        <p class="text-xs sm:text-sm text-slate-400 mb-4">
          目前顯示 8 個核心精選專案。想要瀏覽廣明光電與承暉資訊的全部 34 個專案細節？
        </p>
        <button
          @click="viewMode = 'all'"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 transition shadow-lg"
        >
          <span>展開完整專案庫 (全部 34 個專案)</span>
          <span>📁 ↓</span>
        </button>
      </div>

    </div>

    <!-- Project Detail Modal -->
    <ProjectModal
      :is-open="isModalOpen"
      :project="selectedProject"
      :is-services-mode="props.isServicesMode"
      @close="closeModal"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { portfolioData, type ProjectItem } from '~/data/portfolioData'
import ProjectModal from './ProjectModal.vue'

const props = defineProps({
  isServicesMode: {
    type: Boolean,
    default: false
  }
})

// View Mode: 'featured' (default) or 'all'
const viewMode = ref<'featured' | 'all'>('featured')
const activeCategory = ref('all')
const searchQuery = ref('')
const isModalOpen = ref(false)
const selectedProject = ref<ProjectItem | null>(null)

const categories = [
  { id: 'all', name: '全部專案', icon: '⚡' },
  { id: 'ai', name: '企業 AI 與 RAG', icon: '🧠' },
  { id: 'finance', name: '金融與電信 CTI', icon: '📞' },
  { id: 'enterprise', name: '製造與企業 MIS', icon: '🏛️' },
  { id: 'ops', name: '平台與維運', icon: '🚀' }
]

const allProjects = portfolioData.projects
const totalCount = allProjects.length
const featuredCount = allProjects.filter(p => p.featured).length

// Filtered and Searched Projects computed
const displayedProjects = computed(() => {
  return allProjects.filter(project => {
    // 1. Featured Filter (if in featured mode and user hasn't explicitly searched or chosen category)
    if (viewMode.value === 'featured' && !project.featured && !searchQuery.value && activeCategory.value === 'all') {
      return false
    }

    // 2. Category Filter
    if (activeCategory.value !== 'all' && project.category !== activeCategory.value) {
      return false
    }

    // 3. Search Query Filter
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase().trim()
      const inTitle = project.title.toLowerCase().includes(q)
      const inSubtitle = project.subtitle?.toLowerCase().includes(q) || false
      const inClient = project.clientOrCompany?.toLowerCase().includes(q) || false
      const inSummary = project.summary?.toLowerCase().includes(q) || false
      const inTech = project.techStack.some(t => t.toLowerCase().includes(q))
      return inTitle || inSubtitle || inClient || inSummary || inTech
    }

    return true
  })
})

const getCategoryCount = (catId: string) => {
  if (catId === 'all') return allProjects.length
  return allProjects.filter(p => p.category === catId).length
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'ai': return '🧠'
    case 'finance': return '📞'
    case 'enterprise': return '🏛️'
    case 'ops': return '🚀'
    default: return '⚡'
  }
}

const getCategoryGradients = (category: string) => {
  switch (category) {
    case 'ai': return 'from-cyan-500 via-blue-500 to-indigo-500'
    case 'finance': return 'from-indigo-500 via-purple-500 to-pink-500'
    case 'enterprise': return 'from-blue-500 via-cyan-500 to-emerald-500'
    case 'ops': return 'from-amber-500 via-orange-500 to-emerald-500'
    default: return 'from-blue-500 to-indigo-500'
  }
}

const getCategoryIconBoxStyle = (category: string) => {
  switch (category) {
    case 'ai': return 'bg-cyan-950/40 text-cyan-400 border-cyan-800/40'
    case 'finance': return 'bg-indigo-950/40 text-indigo-400 border-indigo-800/40'
    case 'enterprise': return 'bg-blue-950/40 text-blue-400 border-blue-800/40'
    case 'ops': return 'bg-emerald-950/40 text-emerald-400 border-emerald-800/40'
    default: return 'bg-slate-950/40 text-slate-300 border-slate-800'
  }
}

const resetFilters = () => {
  viewMode.value = 'all'
  activeCategory.value = 'all'
  searchQuery.value = ''
}

const openModal = (project: ProjectItem) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>
