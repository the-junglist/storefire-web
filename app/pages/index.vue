<template>
  <div>
    <!-- HERO -->
    <section
      class="relative flex items-center justify-center overflow-hidden pt-24 pb-16 md:min-h-screen md:pt-16 md:pb-0 bg-zinc-800 dark:bg-black"
      aria-label="Hero"
      @mousemove="heroDotGrid?.onMouseMove"
      @mouseleave="heroDotGrid?.onMouseLeave"
    >
      <DotGrid ref="heroDotGrid" />

      <!-- Gradient orbs — fire accents -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-sf-neon/5 rounded-full blur-[120px]" />
      <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sf-neonAlt/5 rounded-full blur-[100px]" />

      <div class="relative z-10 text-center max-w-5xl mx-auto px-4">
        <!-- Eyebrow -->
        <p class="font-mono text-lg md:text-2xl tracking-[0.35em] mb-8" aria-label="Storefire">
          <span class="text-white">STORE</span><span class="text-sf-neon">FIRE</span>
        </p>

        <h1 class="text-3xl md:text-6xl font-mono font-bold leading-tight">
          <span class="text-white">Keep your WooCommerce shop.</span><br />
          <span class="text-sf-neonAlt md:text-7xl">Lose the weight.</span>
        </h1>

        <p class="mt-6 md:mt-8 text-base md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Your products, orders and WooCommerce setup can stay where they are.
          StoreFire gives customers a lighter storefront to shop through.
        </p>

        <!-- CTAs -->
        <div class="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <NuxtLink
            to="https://shop.storefire.online"
            class="px-8 py-4 bg-sf-neon text-white font-mono font-bold rounded-lg hover:bg-sf-fire-400 transition-all text-lg"
          >
            See StoreFire in action
          </NuxtLink>
          <NuxtLink
            to="/#how"
            class="px-8 py-4 border border-white/30 text-white font-mono rounded-lg hover:bg-white/10 transition-all text-lg"
          >
            How it works
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- PROBLEM -->
    <section class="py-12 md:py-24 bg-white dark:bg-sf-dark relative" id="problem" aria-labelledby="problem-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-16">
          <h2 id="problem-heading" class="text-2xl md:text-5xl font-mono font-bold text-zinc-900 dark:text-white leading-tight">
            Your shop isn't broken.<br />
            <span class="text-sf-neonAlt">It's just carrying too much baggage.</span>
          </h2>
          <p class="mt-4 md:mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Over time, WooCommerce stores collect themes, plugins, page builders, scripts, styles and other stuff.
            It all ends up travelling to the customer's browser.
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <img src="/storefire_info_graphic_1.png" alt="A store weighed down by themes, plugins and page builders — Storefire cuts it loose" class="w-full h-auto rounded-xl" />
        </div>
      </div>
    </section>

    <!-- SIMPLE EXPLANATION -->
    <section class="py-12 md:py-24 bg-gray-50 dark:bg-zinc-900 relative" id="how" aria-labelledby="how-heading">
      <div class="absolute top-0 right-0 w-96 h-96 bg-sf-neon/5 rounded-full blur-[120px]" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-8 md:mb-16">
          <h2 id="how-heading" class="text-2xl md:text-5xl font-mono font-bold text-zinc-900 dark:text-white leading-tight">
            WooCommerce stays.<br />
            <span class="text-sf-neon">The heavy lifting moves.</span>
          </h2>
          <p class="mt-4 md:mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            StoreFire doesn't replace your WooCommerce shop.
            WooCommerce keeps handling the shop. StoreFire handles the storefront your customers actually see.
          </p>
        </div>

        <!-- Flow: Woo → StoreFire → Customer -->
        <div class="max-w-md mx-auto flex flex-col items-center">
          <div class="w-full bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-6 text-center font-mono">
            <div class="text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400">Your WooCommerce shop</div>
            <p class="mt-2 text-sm md:text-base text-zinc-900 dark:text-white">Products · Orders · Customers · Payments · Inventory</p>
          </div>

          <div class="w-0.5 h-8 bg-gradient-to-b from-sf-neon to-sf-neonAlt my-1" aria-hidden="true" />

          <div class="w-full bg-white dark:bg-sf-surface border border-sf-neon/50 rounded-xl p-6 text-center font-mono shadow-[0_0_24px_rgba(249,115,22,0.15)]">
            <div class="text-lg md:text-xl font-bold tracking-widest"><span class="text-zinc-900 dark:text-white">STORE</span><span class="text-sf-neon">FIRE</span></div>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Fast storefront</p>
          </div>

          <div class="w-0.5 h-8 bg-gradient-to-b from-sf-neonAlt to-transparent my-1" aria-hidden="true" />

          <div class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-full px-8 py-3 font-mono text-sm text-zinc-900 dark:text-white">
            Customer
          </div>
        </div>
      </div>
    </section>

    <!-- THREE BENEFITS -->
    <section class="py-12 md:py-24 bg-white dark:bg-sf-dark relative" aria-labelledby="benefits-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="benefit in benefits" :key="benefit.title" class="sf-card-hover group">
            <div class="mb-4"><Icon :name="benefit.icon" :size="32" class="text-sf-neon" /></div>
            <h3 class="font-mono text-lg font-bold text-zinc-900 dark:text-white">{{ benefit.title }}</h3>
            <p class="mt-3 text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">{{ benefit.copy }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- NO REBUILD -->
    <section class="py-12 md:py-24 bg-gray-50 dark:bg-zinc-900 relative" id="no-rebuild" aria-labelledby="no-rebuild-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-16">
          <h2 id="no-rebuild-heading" class="text-2xl md:text-5xl font-mono font-bold text-zinc-900 dark:text-white leading-tight">
            You don't need to<br /><span class="text-sf-neonAlt">rebuild your shop.</span>
          </h2>
          <p class="mt-4 md:mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            If WooCommerce already does the job, why replace it?
            StoreFire is about separating the storefront from the baggage — not starting your business again from scratch.
          </p>
        </div>

        <!-- Comparison -->
        <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <!-- Old -->
          <div class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-6 text-center">
            <div class="font-mono text-xs tracking-widest uppercase text-gray-400 mb-4">Old</div>
            <div class="flex flex-col items-center gap-1.5">
              <template v-for="(item, i) in oldStack" :key="item">
                <div class="w-full max-w-[220px] px-3 py-1.5 border border-gray-200 dark:border-sf-border rounded font-mono text-xs text-gray-500 dark:text-gray-400">{{ item }}</div>
                <span v-if="i < oldStack.length - 1" class="font-mono text-xs text-gray-400" aria-hidden="true">+</span>
              </template>
              <Icon name="mdi:chevron-double-down" :size="20" class="text-gray-400 mt-1" aria-hidden="true" />
              <div class="px-6 py-1.5 border border-gray-300 dark:border-zinc-600 rounded-full font-mono text-xs text-gray-500 dark:text-gray-400">Customer</div>
            </div>
          </div>

          <!-- StoreFire -->
          <div class="bg-white dark:bg-sf-surface border border-sf-neon/40 rounded-xl p-6 text-center sf-card-hover">
            <div class="font-mono text-xs tracking-widest uppercase text-sf-neon mb-4">StoreFire</div>
            <div class="flex flex-col items-center gap-1.5 justify-center h-[calc(100%-1.5rem)]">
              <div class="w-full max-w-[220px] px-3 py-1.5 border border-gray-200 dark:border-sf-border rounded font-mono text-xs text-gray-700 dark:text-gray-300">WooCommerce</div>
              <Icon name="mdi:chevron-double-down" :size="20" class="text-sf-neon" aria-hidden="true" />
              <div class="w-full max-w-[220px] px-3 py-1.5 border border-sf-neon/60 rounded font-mono text-xs font-bold text-sf-neon">StoreFire</div>
              <Icon name="mdi:chevron-double-down" :size="20" class="text-sf-neon" aria-hidden="true" />
              <div class="px-6 py-1.5 border border-gray-300 dark:border-zinc-600 rounded-full font-mono text-xs text-gray-500 dark:text-gray-400">Customer</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- UNDER THE BONNET -->
    <section class="py-12 md:py-24 bg-white dark:bg-sf-dark relative" id="developers" aria-labelledby="bonnet-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-16">
          <span class="font-mono text-xs text-sf-neon/50 tracking-widest uppercase">For developers</span>
          <h2 id="bonnet-heading" class="mt-4 text-2xl md:text-5xl font-mono font-bold text-zinc-900 dark:text-white">
            Under the <span class="text-sf-neon">bonnet</span>
          </h2>
          <p class="mt-4 md:mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            StoreFire uses WooCommerce for the commerce side and a separate frontend for the customer-facing side.
            Products, prices, carts and orders still connect to the WooCommerce system. The storefront doesn't have to be WordPress rendering every part of the shopping experience.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono">
            <div v-for="part in bonnetStack" :key="part.label" class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-lg p-4">
              <div class="text-xs tracking-widest uppercase text-sf-neon">{{ part.label }}</div>
              <div class="mt-2 text-sm text-zinc-900 dark:text-white">{{ part.value }}</div>
            </div>
          </div>
          <p class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            Open source — everything above is checkable in the repo.
            <a href="https://github.com/the-junglist/storefire" class="text-sf-neon hover:underline font-mono">github.com/the-junglist/storefire</a>
          </p>
        </div>
      </div>
    </section>

    <!-- WHAT CHANGES — INFOGRAPHIC -->
    <section class="bg-white dark:bg-sf-dark pb-12 md:pb-24" aria-labelledby="changes-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="changes-heading" class="text-center text-2xl md:text-4xl font-mono font-bold text-zinc-900 dark:text-white mb-8 md:mb-12">
          What <span class="text-sf-neonAlt">changes?</span>
        </h2>
        <img src="/storefire_info_graphic_2.png" alt="Storefire infographic — what changes when the storefront is separated from WooCommerce" class="w-full h-auto rounded-xl" />
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-12 md:py-24 bg-gray-50 dark:bg-zinc-900 relative" id="faq" aria-labelledby="faq-heading">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-16">
          <span class="font-mono text-xs text-sf-neon/50 tracking-widest uppercase">FAQ</span>
          <h2 id="faq-heading" class="mt-4 text-3xl md:text-4xl font-mono font-bold text-zinc-900 dark:text-white">
            Short <span class="text-sf-neonAlt">answers</span>
          </h2>
        </div>

        <div class="space-y-4">
          <details
            v-for="(faq, i) in faqs"
            :key="i"
            class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl overflow-hidden group"
          >
            <summary class="px-6 py-5 cursor-pointer font-mono text-zinc-900 dark:text-white hover:text-sf-neon transition-colors flex items-center justify-between list-none">
              <span>{{ faq.q }}</span>
              <Icon name="mdi:chevron-right" :size="16" class="transform group-open:rotate-90 transition-transform" />
            </summary>
            <div class="px-6 pb-5 text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-sf-border pt-4">
              {{ faq.a }}
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="py-12 md:py-24 bg-white dark:bg-sf-dark relative" aria-labelledby="cta-heading">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 id="cta-heading" class="text-2xl md:text-5xl font-mono font-bold text-zinc-900 dark:text-white">
          Keep your shop.<br /><span class="text-sf-neonAlt">Lose the weight.</span>
        </h2>
        <p class="mt-4 md:mt-6 text-gray-500 dark:text-gray-400 text-base md:text-lg">
          See what StoreFire can do for your WooCommerce storefront.
        </p>
        <div class="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <NuxtLink
            to="https://shop.storefire.online"
            class="px-8 py-4 bg-sf-neon text-white font-mono font-bold rounded-lg hover:bg-sf-fire-400 transition-all text-lg"
          >
            See StoreFire in action
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="px-8 py-4 border border-sf-neonAlt/30 text-sf-neonAlt font-mono rounded-lg hover:bg-sf-neonAlt/10 transition-all text-lg"
          >
            Talk to us
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const heroDotGrid = ref(null)

const benefits = [
  {
    icon: 'mdi:luggage',
    title: 'Less baggage',
    copy: 'Keep the WooCommerce backend without making the browser carry the whole thing.',
  },
  {
    icon: 'mdi:speedometer',
    title: 'Faster storefront',
    copy: 'Give customers a cleaner frontend with less unnecessary work happening in their browser.',
  },
  {
    icon: 'mdi:database',
    title: 'Keep what you\'ve built',
    copy: 'Your products, orders and WooCommerce setup don\'t need to be thrown away just because the storefront needs improving.',
  },
]

const oldStack = ['WooCommerce', 'Theme', 'Plugins', 'Page builder', 'Scripts', 'Everything else']

const bonnetStack = [
  { label: 'Frontend', value: 'Nuxt 4 + Vue 3' },
  { label: 'Commerce', value: 'WooCommerce REST API' },
  { label: 'Cart & checkout', value: 'CoCart — session-based, no login needed' },
  { label: 'Caching', value: 'Nitro cache — Cloudflare KV in production' },
  { label: 'Images', value: 'Nuxt Image — avif/webp, responsive' },
  { label: 'Hosting', value: 'Cloudflare Pages' },
]

const faqs = [
  {
    q: 'What is StoreFire?',
    a: 'A lighter storefront that sits in front of your existing WooCommerce shop. Customers get a faster site to browse; WooCommerce keeps running the shop behind it.',
  },
  {
    q: 'Does StoreFire replace WooCommerce?',
    a: 'No. WooCommerce keeps handling products, orders, customers and payments. Only the part shoppers see changes.',
  },
  {
    q: 'Do I need to rebuild my shop?',
    a: 'No. Your WooCommerce setup stays exactly as it is. StoreFire connects to it — you don\'t start from scratch.',
  },
  {
    q: 'What happens to my products and orders?',
    a: 'Nothing. They stay in WooCommerce, right where they are.',
  },
  {
    q: 'Is StoreFire for developers?',
    a: 'You can run it yourself if you\'re comfortable deploying a web app — it\'s open source. Or talk to us about running it for you.',
  },
  {
    q: 'Can I use it with my existing WooCommerce store?',
    a: 'Yes — that\'s what it\'s built for. If your shop runs WooCommerce today, StoreFire can front it.',
  },
]

useHead({
  title: 'Storefire — Keep Your WooCommerce Shop. Lose the Weight.',
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Storefire',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Storefire gives a WooCommerce shop a lighter, faster storefront without throwing away the WooCommerce shop behind it.',
        url: 'https://storefire.online',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'GBP',
        },
        featureList: [
          'Lighter storefront in front of an existing WooCommerce shop',
          'WooCommerce keeps products, orders, customers and payments',
          'Session-based cart via CoCart',
          'Nitro caching with Cloudflare KV in production',
          'Responsive images served as avif/webp',
          'Runs on Cloudflare Pages',
          'Open source',
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Storefire',
        url: 'https://storefire.online',
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      }),
    },
  ],
})

useSeoMeta({
  title: 'Storefire — Keep Your WooCommerce Shop. Lose the Weight.',
  ogTitle: 'Storefire — Keep Your WooCommerce Shop. Lose the Weight.',
  description: 'Your products, orders and WooCommerce setup can stay where they are. StoreFire gives customers a lighter storefront to shop through.',
  ogDescription: 'Keep your WooCommerce shop. Lose the weight.',
  ogImage: '/storefire_fav_logo.png',
  twitterCard: 'summary_large_image',
})
</script>
