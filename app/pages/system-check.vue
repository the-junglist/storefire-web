<template>
  <div class="pt-24 pb-16 bg-zinc-950 min-h-screen">
    <!-- Header -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
      <span class="font-mono text-xs text-sf-ice/60 tracking-widest uppercase">System Check</span>
      <h1 class="mt-4 text-4xl md:text-6xl font-mono font-bold text-white">
        STORE<span class="text-sf-neon">FIRE</span> Systems
      </h1>
      <p class="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
        Pre-flight checklist. Scroll down and watch every module come online.
      </p>
    </section>

    <!-- Master Power -->
    <section class="max-w-4xl mx-auto px-4 mb-12">
      <div class="bg-sf-surface border border-sf-neon/30 rounded-xl p-8 text-center glow-border-fire">
        <div class="font-mono text-xs text-sf-muted mb-4 tracking-widest">MASTER POWER</div>
        <div class="font-mono text-6xl font-bold text-sf-neon glow-fire">{{ overallPercent }}%</div>
        <div class="font-mono text-sm text-sf-muted mt-2">{{ litCount }}/{{ totalSwitches }} systems online</div>
        <div class="w-full h-3 bg-sf-card rounded-full overflow-hidden mt-6">
          <div
            class="h-full bg-gradient-to-r from-sf-ice to-sf-neon rounded-full transition-all duration-1000"
            :style="{ width: overallPercent + '%' }"
          />
        </div>
      </div>
    </section>

    <!-- Cockpit Panels -->
    <ClientOnly>
    <div class="max-w-5xl mx-auto px-4 space-y-4">
      <div
        v-for="(panel, pi) in panels"
        :key="panel.name"
        class="bg-sf-surface border rounded-xl overflow-hidden transition-all duration-500"
        :class="panelLit[pi] ? 'border-sf-neon/40' : 'border-sf-border'"
        :data-panel="pi"
      >
        <!-- Panel Header -->
        <div
          class="flex items-center justify-between px-6 py-4 cursor-pointer select-none"
          @click="togglePanel(pi)"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-3 h-3 rounded-full transition-all duration-500"
              :class="panelLit[pi] ? 'bg-sf-neon shadow-[0_0_8px_rgba(249,115,22,0.6)]' : 'bg-sf-card'"
            />
            <h3 class="font-mono text-lg font-semibold" :class="panelLit[pi] ? 'text-white' : 'text-gray-500'">
              {{ panel.name }}
            </h3>
          </div>
          <div class="flex items-center gap-4">
            <span class="font-mono text-sm" :class="panelLit[pi] ? 'text-sf-neon' : 'text-sf-muted'">
              {{ panel.percent }}%
            </span>
            <Icon
              name="mdi:chevron-down"
              :size="20"
              class="transition-transform duration-300"
              :class="openPanels[pi] ? 'rotate-180' : ''"
            />
          </div>
        </div>

        <!-- Switches -->
        <div v-if="openPanels[pi]" class="px-6 pb-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div
              v-for="(sw, si) in panel.switches"
              :key="sw.label"
              class="flex items-center gap-3 bg-sf-card/50 rounded-lg px-4 py-3 transition-all duration-500"
              :class="switchState[pi][si] ? 'border border-sf-neon/20' : 'border border-transparent'"
            >
              <!-- Toggle switch -->
              <div
                class="relative w-10 h-5 rounded-full transition-all duration-700 cursor-pointer flex-shrink-0"
                :class="switchState[pi][si] ? 'bg-sf-neon/30' : 'bg-sf-border'"
                @click="flipSwitch(pi, si)"
              >
                <div
                  class="absolute top-0.5 w-4 h-4 rounded-full transition-all duration-700"
                  :class="switchState[pi][si] ? 'left-5 bg-sf-neon shadow-[0_0_6px_rgba(249,115,22,0.5)]' : 'left-0.5 bg-gray-600'"
                />
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-mono text-sm" :class="switchState[pi][si] ? 'text-white' : 'text-gray-500'">
                  {{ sw.label }}
                </div>
                <div v-if="sw.note" class="font-mono text-xs text-sf-muted mt-0.5">{{ sw.note }}</div>
              </div>
              <Icon
                v-if="switchState[pi][si]"
                name="mdi:check"
                :size="14"
                class="text-sf-neon flex-shrink-0"
              />
            </div>
          </div>
          <div v-if="panel.estimate" class="mt-4 font-mono text-xs text-sf-muted">
            {{ panel.estimate }}
          </div>
        </div>
      </div>
    </div>
    </ClientOnly>

    <!-- CTA -->
    <section class="max-w-4xl mx-auto px-4 mt-16 text-center">
      <div class="bg-sf-surface border border-sf-neon/30 rounded-xl p-8 glow-border-fire">
        <h2 class="font-mono text-2xl font-bold text-white mb-4">All Systems Go</h2>
        <p class="text-gray-400 mb-6">
          Open source. WooCommerce stays in place. See it running on the live demo shop.
        </p>
        <a
          href="https://shop.storefire.online"
          target="_blank"
          rel="noopener"
          class="inline-block px-8 py-4 bg-sf-neon text-sf-black font-mono font-bold rounded-lg hover:bg-sf-neonAlt hover:text-white transition-all"
        >
          Launch the Demo →
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'System Check — StoreFire Feature Verification',
  ogTitle: 'System Check — StoreFire',
  description: 'Pre-flight checklist for StoreFire. Every module verified — storefront, cart, checkout, caching and deploy pipeline all online.',
  ogDescription: 'StoreFire systems check — all modules verified and online.',
  ogImage: 'https://storefire.online/storefire_og.png',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://storefire.online' },
        { '@type': 'ListItem', position: 2, name: 'System Check', item: 'https://storefire.online/system-check' },
      ],
    }),
  }],
})

const panels = [
  {
    name: 'STOREFRONT CORE',
    percent: 100,
    estimate: null,
    switches: [
      { label: 'Nuxt 4 + Vue 3', note: 'Server-rendered storefront' },
      { label: 'SSR Product Pages', note: 'Full HTML on first byte' },
      { label: 'Route Caching', note: 'Nitro route rules' },
      { label: 'Dark Industrial Theme', note: 'Matches your brand' },
      { label: 'Mobile-first Layout', note: 'Designed for thumbs' },
    ],
  },
  {
    name: 'WOOCOMMERCE LINK',
    percent: 100,
    estimate: null,
    switches: [
      { label: 'WooCommerce REST API', note: 'Products, stock, orders' },
      { label: 'CoCart Sessions', note: 'Server-side cart state' },
      { label: 'Category Browsing', note: 'SSR category pages' },
      { label: 'Product Search', note: 'Full catalogue search' },
      { label: 'Product Badges', note: 'Sale, new, featured' },
    ],
  },
  {
    name: 'CART + CHECKOUT',
    percent: 100,
    estimate: null,
    switches: [
      { label: 'Cart Management', note: 'Add, remove, modify' },
      { label: 'Checkout Flow', note: 'Address → payment → done' },
      { label: 'Order Confirmation', note: 'Handled by WooCommerce' },
      { label: 'Payment Methods', note: 'Your existing providers' },
    ],
  },
  {
    name: 'EDGE + CACHE',
    percent: 100,
    estimate: null,
    switches: [
      { label: 'Cloudflare Pages', note: 'Global edge deployment' },
      { label: 'KV Cache Layer', note: 'Nitro cache storage' },
      { label: 'Stale-while-revalidate', note: 'Instant page loads' },
      { label: 'Image Optimisation', note: 'AVIF / WebP delivery' },
    ],
  },
  {
    name: 'STORE OWNER TOOLS',
    percent: 100,
    estimate: null,
    switches: [
      { label: 'My Account Area', note: 'Orders, addresses, profile' },
      { label: 'Customer Auth', note: 'Login + register flows' },
      { label: 'Cookie Consent', note: 'GDPR-ready banner' },
      { label: 'Blog + Pages', note: 'Content from WordPress' },
    ],
  },
  {
    name: 'COMING SOON',
    percent: 0,
    estimate: 'In development — roadmap items',
    switches: [
      { label: 'Wishlist', note: 'Save for later' },
      { label: 'Product Reviews UI', note: 'Rich review display' },
      { label: 'Multi-language', note: 'i18n foundations exist' },
      { label: 'Product Configurators', note: 'Custom product flows' },
    ],
  },
]

const openPanels = ref(panels.map(() => true))
const panelLit = ref(panels.map(() => false))
const switchState = ref(panels.map(p => p.switches.map(() => false)))

const litCount = computed(() => {
  let count = 0
  for (const panel of switchState.value) {
    if (panel) {
      for (const s of panel) {
        if (s) count++
      }
    }
  }
  return count
})

const totalSwitches = computed(() => panels.reduce((sum, p) => sum + p.switches.length, 0))

const overallPercent = computed(() => {
  return Math.round((litCount.value / totalSwitches.value) * 100)
})

function togglePanel(pi) {
  openPanels.value = openPanels.value.map((v, i) => i === pi ? !v : v)
}

function flipSwitch(pi, si) {
  const newState = switchState.value.map(panel => [...panel])
  newState[pi][si] = !newState[pi][si]
  switchState.value = newState
  panelLit.value = panelLit.value.map((v, i) => i === pi ? newState[pi].some(s => s) : v)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const pi = parseInt(entry.target.dataset.panel)
          if (!isNaN(pi)) {
            panels[pi].switches.forEach((_, i) => {
              setTimeout(() => {
                const newState = switchState.value.map(panel => [...panel])
                newState[pi][i] = true
                switchState.value = newState
                panelLit.value = panelLit.value.map((v, j) => j === pi ? true : v)
              }, i * 150)
            })
          }
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )

  nextTick(() => {
    document.querySelectorAll('[data-panel]').forEach(el => observer.observe(el))
  })
})
</script>
