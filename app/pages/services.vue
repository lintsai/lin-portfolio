<template>
  <div>
    <!-- Services Hero Section -->
    <HeroServices />

    <!-- 4 Core Packages & Delivery Process -->
    <div id="service-packages">
      <ServicesSection />
    </div>

    <!-- 3 High-Impact Consultative Architectural Case Studies -->
    <CaseStudiesSection />

    <!-- Project Inquiry Form -->
    <ContactServices />
  </div>
</template>

<script setup lang="ts">
import HeroServices from '~/components/HeroServices.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import CaseStudiesSection from '~/components/CaseStudiesSection.vue'
import ContactServices from '~/components/ContactServices.vue'

useHead({
  title: '私有化 AI 落地評估與高可用系統架構協作 | Lin Tsai (蔡弘霖)',
  meta: [
    {
      name: 'description',
      content: '提供企業私有化 AI 知識庫 (RAG) 導入評估、全渠道 CTI 客服通訊整合、微服務架構健檢與 GPU 算力維運等專案協作與技術諮詢服務。'
    }
  ]
})
</script>
