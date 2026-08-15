<template>
  <div class="min-h-screen bg-[#07090e] text-slate-200 antialiased selection:bg-blue-600 selection:text-white relative flex flex-col justify-between">
    
    <!-- Dynamic Responsive Navigation Bar with Mode Switcher -->
    <Navbar />

    <!-- Main Dynamic Route Content -->
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <FooterSection />

  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
</script>