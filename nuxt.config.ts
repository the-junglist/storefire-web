export default defineNuxtConfig({
  compatibilityDate: '2025-02-21',

  future: {
    compatibilityVersion: 4
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Storefire — Headless E-Commerce Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Production-quality Nuxt 4 headless e-commerce template. WooCommerce + Odoo backends. Cloudflare Pages deploy.' },
        { name: 'theme-color', content: '#000000' },
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
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

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
