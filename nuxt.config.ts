// GA4 Measurement ID와 네이버 서치콘솔 인증코드는 실제 값으로 교체하세요
const GA4_ID = 'G-RR0SEH8Y4H'
const NAVER_VERIFY = 'd185428d0d31a53f65addf55967d329e61c8b966'

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/i18n'],

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'zh', language: 'zh-CN', name: '中文' },
      { code: 'ja', language: 'ja-JP', name: '日本語' },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'moodi_locale',
      alwaysRedirect: false,
      fallbackLocale: 'en',
    },
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'MOODI — Travel Korea by Your Mood',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#09090C' },

        // Primary SEO
        { hid: 'description', name: 'description', content: 'Discover hidden Korean spots that match your aesthetic. Upload your mood photos and let MOODI\'s AI find the perfect spots and plan your route.' },
        { name: 'keywords', content: 'Korea travel, mood travel, aesthetic travel, Korean spots, AI travel planner, Seoul travel, Korea tourism' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'MOODI' },
        { hid: 'og:title', property: 'og:title', content: 'MOODI — Travel Korea by Your Mood' },
        { hid: 'og:description', property: 'og:description', content: 'Discover Korean spots that match your aesthetic. Upload mood photos, get AI-matched spots and routes.' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'zh_CN' },
        { property: 'og:locale:alternate', content: 'ja_JP' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'MOODI — Travel Korea by Your Mood' },
        { name: 'twitter:description', content: 'Discover Korean spots that match your aesthetic.' },
        { name: 'twitter:image', content: '/og-image.png' },

        // Naver Search Advisor (웹마스터 도구)
        { name: 'naver-site-verification', content: NAVER_VERIFY },
      ],
      link: [
        { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css',
        },
        { rel: 'canonical', href: 'https://moodi.app' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      // Google Analytics 4 — gtag.js
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`,
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}', { page_path: window.location.pathname });
          `,
          type: 'text/javascript',
        },
      ],
    },
  },
})
