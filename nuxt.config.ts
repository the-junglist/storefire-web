export default defineNuxtConfig({
  compatibilityDate: '2025-02-21',

  future: {
    compatibilityVersion: 4
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Storefire — Keep Your WooCommerce Shop. Lose the Weight.',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Your products, orders and WooCommerce setup can stay where they are. StoreFire gives customers a lighter storefront to shop through.' },
        { property: 'og:site_name', content: 'Storefire' },
        { name: 'theme-color', content: '#000000' },
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-F627LE1HLQ', async: true },
        {
          innerHTML: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-F627LE1HLQ');",
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/storefire_fav_logo.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
      duration: 150
    },
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    strict: true,
    shim: false,
  },

  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'JetBrains Mono': [400, 500, 600, 700],
        'Inter': [400, 500, 600, 700],
      },
      display: 'swap',
      preload: true,
    }],
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://storefire.online',
    name: 'Storefire',
  },

  sitemap: {
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1 },
      { loc: '/about', changefreq: 'monthly', priority: 0.7 },
      { loc: '/pricing', changefreq: 'monthly', priority: 0.8 },
      { loc: '/comparison', changefreq: 'monthly', priority: 0.7 },
      { loc: '/contact', changefreq: 'yearly', priority: 0.5 },
    ],
  },

  nitro: {
    preset: 'cloudflare-pages',
  },

  components: {
    dirs: [{ path: '~/components', pathPrefix: false }]
  },

  imports: {
    autoImport: true,
  },
})
