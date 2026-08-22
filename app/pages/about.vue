<template>
  <div class="pt-24 pb-16 bg-white dark:bg-sf-dark">
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <span class="font-mono text-xs text-sf-neon/50 tracking-widest uppercase">About</span>
      <h1 class="mt-4 text-4xl md:text-6xl font-mono font-bold text-zinc-900 dark:text-white">
        Built from <span class="text-sf-neon">real shops</span>, not a lab<span class="text-sf-neonAlt">.</span>
      </h1>

      <div class="mt-12 grid md:grid-cols-2 gap-12">
        <div>
          <h2 class="font-mono text-2xl font-semibold text-zinc-900 dark:text-white mb-4">The Story</h2>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            Storefire wasn't dreamed up in a lab — it came from running real shops. Four live stores — Moo Chuu,
            Tropical Taste, KillerFrogs, Abode — all hit the same wall: WordPress and WooCommerce are great for
            getting started, but they get slow and tangled as you grow.
          </p>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            Too many add-ons. Pages that take too long to load. Too tied in. And when you need a system that
            handles stock, till and accounting properly, moving everything over feels like a six-month headache.
          </p>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed">
            So we built Storefire. It works with the WooCommerce shop you have today, and when you're ready
            for something bigger, it can switch over smoothly — with just one setting. No big rebuild. No
            starting from scratch. Just a natural next step.
          </p>
        </div>

        <div>
          <h2 class="font-mono text-2xl font-semibold text-zinc-900 dark:text-white mb-4">The Stack</h2>
          <div class="space-y-4">
            <div v-for="tech in stack" :key="tech.name" class="flex items-center gap-4">
              <div class="w-10 h-10 bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-lg flex items-center justify-center text-sf-neon">
                <Icon :name="tech.icon" :size="20" />
              </div>
              <div>
                <div class="font-mono text-sm text-zinc-900 dark:text-white">{{ tech.name }}</div>
                <div class="text-xs text-gray-500 dark:text-zinc-400">{{ tech.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16">
        <h2 class="font-mono text-2xl font-semibold text-zinc-900 dark:text-white mb-6">By the Numbers</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="stat in stats" :key="stat.label" class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-6 text-center">
            <div class="font-mono text-3xl font-bold text-sf-neon">{{ stat.value }}</div>
            <div class="font-mono text-xs text-gray-500 dark:text-zinc-400 mt-2">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <h2 class="font-mono text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Open Source</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-6 max-w-xl mx-auto">
          Storefire is open source — free to use, copy and change as you need. No lock-in, no monthly fees. It's yours to keep and make your own.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-block px-8 py-4 border border-sf-neon/30 text-sf-neon font-mono rounded-lg hover:bg-sf-neon/10 transition-all text-lg"
        >
          Contact Us →
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'About — Storefire | Built from real shops, not a lab',
  ogTitle: 'About — Storefire',
  description: 'Storefire came from running four real shops that hit the same limits with WordPress. A fast, open-source shopfront that works with your WooCommerce store today and can grow with you tomorrow.',
  ogDescription: 'About Storefire — built from real shops, open source and ready to grow with you.',
  ogImage: '/storefire_og.png',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Storefire — Built from real shops, not a lab',
      url: 'https://storefire.online/about',
      mainEntity: {
        '@type': 'Organization',
        name: 'Storefire',
        foundingDate: '2024',
      },
    }),
  }],
})

const stack = [
  { icon: 'mdi:language-javascript', name: 'Fast shopfront', desc: 'Quick to load and smooth to shop on any device' },
  { icon: 'mdi:cart', name: 'Your shop, connected', desc: 'Works with the WooCommerce shop you already have' },
  { icon: 'mdi:server', name: 'Ready to grow', desc: 'Move to a full stock and accounting system when you are ready' },
  { icon: 'mdi:swap-horizontal', name: 'Switch made simple', desc: 'Change your shop system with just one setting' },
  { icon: 'mdi:database', name: 'Cart that works', desc: 'Your basket stays with you, no surprises at checkout' },
  { icon: 'mdi:cloud', name: 'Quick hosting', desc: 'Fast, reliable hosting that keeps your shop online' },
  { icon: 'mdi:shield-lock', name: 'Safe by default', desc: 'Built with security in mind from the start' },
  { icon: 'mdi:test-tube', name: 'Tested thoroughly', desc: 'Checked end-to-end so things just work' },
]

const stats = [
  { value: '2', label: 'Shop systems' },
  { value: '4', label: 'Real shops' },
  { value: '7', label: 'Test suites' },
  { value: '1', label: 'Setting to switch' },
]
</script>
