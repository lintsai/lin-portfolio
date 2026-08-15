// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-TW',
        class: 'scroll-smooth'
      },
      title: 'Lin Tsai (蔡弘霖) | 軟體專案主管 · 解決方案架構師 · 企業 AI 應用顧問',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Lin Tsai (蔡弘霖) 個人官方網站。具備 10 年軟體架構底蘊與 5 年技術主管經驗 (管理 9-12 人)。專注於企業私有化 AI / RAG 落地、金融級 CTI 客服中台、高併發微服務架構與 DevOps/AIOps 自動化。提供全職領導職缺應徵與專案技術顧問/接案服務。'
        },
        { name: 'theme-color', content: '#0B0F19' },
        { property: 'og:title', content: 'Lin Tsai (蔡弘霖) | 軟體專案主管 · 解決方案架構師 · 企業 AI 顧問' },
        { property: 'og:description', content: '10 年後端與系統架構 × 5 年技術團隊管理 × 企業 AI / RAG / AIOps 落地實務' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        }
      ]
    }
  }
})