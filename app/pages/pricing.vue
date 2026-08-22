<template>
  <div class="pt-24 pb-16">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 bg-gray-50 dark:bg-zinc-900" aria-label="Pricing header">
      <span class="font-mono text-xs text-sf-neon/50 tracking-widest uppercase">Pricing</span>
      <h1 class="mt-4 text-4xl md:text-6xl font-mono font-bold text-zinc-900 dark:text-white">
        Run your shop<br /><span class="text-sf-neon">without monthly fees</span>
      </h1>
      <p class="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
        Storefire is free to use. No extra charges to unlock features. No monthly software bill.
        You only pay for hosting — where your shop lives online.
      </p>
    </section>

    <!-- Pricing Cards -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 bg-white dark:bg-sf-dark" aria-label="Pricing tiers">
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Self-Hosted -->
        <div class="bg-white dark:bg-sf-surface border border-sf-neon/30 rounded-xl p-8 glow-border-fire">
          <div class="font-mono text-xs text-sf-neon mb-4">RECOMMENDED</div>
          <h3 class="font-mono text-2xl font-bold text-zinc-900 dark:text-white mb-2">Self-Hosted</h3>
          <div class="font-mono text-4xl font-bold text-sf-neon mb-6">£0<span class="text-lg text-gray-500 dark:text-zinc-400">/mo</span></div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> You get all the code — fully yours
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> Works with WooCommerce and Odoo
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> Easily switch your shop backend
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> Tested for quality and speed
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> Security checks built in
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> Ready in English and Thai
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> Every feature included — nothing held back
            </li>
          </ul>
          <NuxtLink to="/contact" class="block text-center px-6 py-3 border border-sf-neon/30 text-sf-neon font-mono rounded-lg hover:bg-sf-neon/10 transition-all">
            Contact Us →
          </NuxtLink>
        </div>

        <!-- Cloud (Managed) -->
        <div class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-8 sf-card-hover">
          <div class="font-mono text-xs text-gray-500 dark:text-zinc-400 mb-4">MANAGED</div>
          <h3 class="font-mono text-2xl font-bold text-zinc-900 dark:text-white mb-2">Managed</h3>
          <div class="font-mono text-4xl font-bold text-zinc-900 dark:text-white mb-6">Small share<span class="block text-sm font-normal text-gray-500 dark:text-zinc-400 mt-1">of each sale — agreed up front</span></div>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
            We host it. No monthly fee. We take a small, agreed share only when you make a sale. No sale, no fee. If you don't sell, you don't pay. We succeed when you do.
          </p>
          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> Everything in Self-Hosted
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> We host on Cloudflare for you
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> Automatic updates
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> SSL included
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> Priority support
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> No monthly fee — pay only when you sell
            </li>
          </ul>
          <NuxtLink to="/contact" class="block text-center px-6 py-3 border border-sf-neon/30 text-sf-neon font-mono rounded-lg hover:bg-sf-neon/10 transition-all">
            Talk to us about it →
          </NuxtLink>
        </div>

        <!-- Agency / White-Label -->
        <div class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-8 sf-card-hover">
          <div class="font-mono text-xs text-gray-500 dark:text-zinc-400 mb-4">AGENCY</div>
          <h3 class="font-mono text-2xl font-bold text-zinc-900 dark:text-white mb-2">White-Label</h3>
          <div class="font-mono text-4xl font-bold text-zinc-900 dark:text-white mb-6">Custom<span class="text-lg text-gray-500 dark:text-zinc-400"></span></div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> Everything in Self-Hosted
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> We build custom connections for your needs
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> Run many shops from one setup
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> Your branding, your clients
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sf-neon mt-0.5">✓</span> Dedicated help and support agreement
            </li>
          </ul>
          <NuxtLink to="/contact" class="block text-center px-6 py-3 border border-gray-200 dark:border-sf-border text-gray-500 dark:text-zinc-400 font-mono rounded-lg hover:border-sf-neon/30 hover:text-sf-neon transition-all">
            Contact Us →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Cost Comparison -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 bg-gray-50 dark:bg-zinc-900" aria-label="Cost comparison">
      <div class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-8">
        <h3 class="font-mono text-xl font-semibold text-zinc-900 dark:text-white mb-6">What you pay over 3 years</h3>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="w-32 font-mono text-sm text-gray-500 dark:text-zinc-400">Big SaaS platform</div>
            <div class="flex-1 h-8 bg-sf-card rounded-full overflow-hidden">
              <div class="h-full bg-red-500/80 rounded-full flex items-center px-4" style="width: 85%">
                <span class="font-mono text-xs text-white">£2,000+/mo</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-32 font-mono text-sm text-gray-500 dark:text-zinc-400">Agency custom build</div>
            <div class="flex-1 h-8 bg-sf-card rounded-full overflow-hidden">
              <div class="h-full bg-yellow-500/80 rounded-full flex items-center px-4" style="width: 60%">
                <span class="font-mono text-xs text-white">£30-50k one-off</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-32 font-mono text-sm text-gray-500 dark:text-zinc-400">Storefire</div>
            <div class="flex-1 h-8 bg-sf-card rounded-full overflow-hidden">
              <div class="h-full bg-sf-neon/80 rounded-full flex items-center px-4" style="width: 15%">
                <span class="font-mono text-xs text-white">£0 software</span>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-4 text-xs text-gray-500 dark:text-zinc-400 font-mono">
          * You still pay for hosting and your domain if you run it yourself. The Storefire software itself is always free.
        </p>
      </div>
    </section>

    <!-- No Feature Gates -->
    <section class="max-w-4xl mx-auto px-4 text-center mb-20 bg-white dark:bg-sf-dark" aria-label="No feature gates">
      <h2 class="text-3xl font-mono font-bold text-zinc-900 dark:text-white mb-6">
        Everything included.<br /><span class="text-sf-neon">From day one.</span>
      </h2>
      <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
        Other platforms charge more to unlock features. With Storefire, you get everything from the start — your shop, security, and testing all included. No extra fees, no surprises.
      </p>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Pricing — Storefire | Free Shop Software',
  ogTitle: 'Pricing — Storefire',
  description: 'Storefire is free shop software. Host it yourself for free, or let us host it for you — no monthly fee, just a small share of each sale, agreed up front. You only pay when you sell.',
  ogDescription: 'Free shop software — host yourself for free, or let us host it and pay only when you sell.',
  ogImage: '/storefire_og.png',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://storefire.online' },
        { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://storefire.online/pricing' },
      ],
    }),
  }],
})
</script>
