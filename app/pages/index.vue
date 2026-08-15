<template>
  <div>
    <!-- Profile & Executive Hero Section -->
    <HeroSection />

    <!-- 30-Second Overview: 3 Core Expertise Pillars -->
    <ThreePillarsSection />

    <!-- Projects Portfolio Section (Grouping, Featured & Explorer) -->
    <ProjectsSection />

    <!-- Career Timeline & Leadership Section -->
    <ExperienceSection />

    <!-- Technical Skills Matrix -->
    <SkillsSection />

    <!-- Education & Certifications -->
    <EducationSection />

    <!-- Career Cooperation / Inquiry Contact Form -->
    <ContactCareer />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import ThreePillarsSection from '~/components/ThreePillarsSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import ExperienceSection from '~/components/ExperienceSection.vue'
import SkillsSection from '~/components/SkillsSection.vue'
import EducationSection from '~/components/EducationSection.vue'
import ContactCareer from '~/components/ContactCareer.vue'

useHead({
  title: 'Lin Tsai (蔡弘霖) | 軟體專案主管 · 解決方案架構師 · 企業 AI 應用專家',
  meta: [
    {
      name: 'description',
      content: '蔡弘霖 Lin Tsai 個人官方品牌網站。具備 10 年軟體架構底蘊與 5 年技術主管管理經驗（帶領 9~12 人敏捷團隊）。專注於企業私有化 AI / RAG 落地、金融級 CTI 客服中台、高併發微服務架構與系統整合。'
    },
    { property: 'og:title', content: 'Lin Tsai (蔡弘霖) | 軟體專案主管 · 解決方案架構師' },
    {
      property: 'og:description',
      content: '10 年後端架構 × 5 年技術主管管理 (9-12人) × 企業私有化 AI / RAG 落地實務。'
    },
    { property: 'og:url', content: 'https://lin-portfolio-seven.vercel.app/' },
    { property: 'og:image', content: 'https://lin-portfolio-seven.vercel.app/og-image.png' },
    { name: 'twitter:title', content: 'Lin Tsai (蔡弘霖) | 軟體專案主管 · 解決方案架構師' },
    {
      name: 'twitter:description',
      content: '10 年後端架構 × 5 年技術主管管理 (9-12人) × 企業私有化 AI / RAG 落地實務。'
    },
    { name: 'twitter:image', content: 'https://lin-portfolio-seven.vercel.app/og-image.png' }
  ]
})
</script>
