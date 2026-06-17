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
        { hid: 'description', name: 'description', content: 'MOODI finds hidden Korean cafes, streets, and spots that match your aesthetic — no keywords needed. Upload 1–5 mood photos and get an AI-generated Seoul travel route in under 60 seconds.' },
        { name: 'keywords', content: 'Korea travel app, Seoul travel guide, aesthetic travel Korea, hidden spots Seoul, AI travel planner Korea, mood travel app, Korean cafe aesthetic, film cafe Seoul, vintage spots Korea, Seongsu travel, Hongdae spots, Seoul itinerary, Korean travel route, aesthetic spots Seoul, hidden gems Korea, travel app for foreigners, Seoul aesthetic spots, Korea travel 2026, best cafes Seoul, Korean travel planning app' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'MOODI' },
        { hid: 'og:title', property: 'og:title', content: 'MOODI — Discover Korea by Your Aesthetic' },
        { hid: 'og:description', property: 'og:description', content: 'Upload 1–5 mood photos. MOODI\'s AI finds hidden Korean spots that match your vibe and builds your travel route in under 60 seconds.' },
        { property: 'og:url', content: 'https://moodi.kr' },
        { property: 'og:image', content: 'https://moodi.kr/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'MOODI — AI-powered mood-based Korea travel app' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'zh_CN' },
        { property: 'og:locale:alternate', content: 'ja_JP' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@moodi_app' },
        { name: 'twitter:title', content: 'MOODI — Discover Korea by Your Aesthetic' },
        { name: 'twitter:description', content: 'Upload mood photos → AI finds hidden Korean spots → get your travel route in 60 seconds.' },
        { name: 'twitter:image', content: 'https://moodi.kr/og-image.png' },

        // Naver Search Advisor (웹마스터 도구)
        { name: 'naver-site-verification', content: NAVER_VERIFY },
      ],
      link: [
        { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css',
        },
        { rel: 'canonical', href: 'https://moodi.kr' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      // Google Analytics 4 — gtag.js
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MobileApplication',
            name: 'MOODI',
            url: 'https://moodi.kr',
            description: 'AI-powered mood-based travel app that finds hidden Korean spots matching your aesthetic. Upload mood photos and get a personalized travel route in under 60 seconds.',
            applicationCategory: 'TravelApplication',
            operatingSystem: 'iOS, Android',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', ratingCount: '1' },
            author: { '@type': 'Organization', name: 'MOODI', url: 'https://moodi.kr' },
            keywords: 'Korea travel, Seoul spots, aesthetic travel, AI travel planner, mood travel',
            inLanguage: ['en', 'zh', 'ja'],
          }),
        },
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
