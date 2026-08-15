<template>
  <footer class="bg-[#05070a] border-t border-slate-800/80 py-12 text-slate-400">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        
        <!-- Left: Logo & Tagline -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <div class="flex items-center gap-2">
            <span class="text-base font-bold text-white tracking-tight">Lin Tsai (蔡弘霖)</span>
            <span class="text-xs text-slate-500 font-mono">| Portfolio</span>
          </div>
          <p class="text-xs text-slate-500 mt-1 max-w-md">
            軟體專案主管 · 解決方案架構師 · 企業 AI 應用顧問
          </p>
        </div>

        <!-- Middle: Quick Navigation -->
        <div class="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-400">
          <a href="#about" class="hover:text-blue-400 transition">關於我</a>
          <a href="#services" class="hover:text-blue-400 transition">接案顧問</a>
          <a href="#projects" class="hover:text-blue-400 transition">專案實績</a>
          <a href="#experience" class="hover:text-blue-400 transition">職涯歷程</a>
          <a href="#skills" class="hover:text-blue-400 transition">專業技能</a>
          <a href="#contact" class="hover:text-blue-400 transition">聯絡諮詢</a>
        </div>

        <!-- Right: Copyright & Back to Top -->
        <div class="flex items-center gap-4 text-xs text-slate-500">
          <span>© {{ new Date().getFullYear() }} Lin Tsai. All rights reserved.</span>
          <a
            href="#about"
            class="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
            title="回到頂部"
          >
            ↑
          </a>
        </div>

      </div>
    </div>
  </footer>
</template>
