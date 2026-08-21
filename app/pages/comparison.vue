<template>
  <div class="pt-24 pb-16">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 bg-white dark:bg-sf-dark">
      <span class="font-mono text-xs text-sf-neon/50 tracking-widest uppercase">Keep WooCommerce. Lose the weight.</span>
      <h1 class="mt-4 text-4xl md:text-6xl font-mono font-bold text-zinc-900 dark:text-white">
        Feeling <span class="text-sf-neon">stuck</span> on WordPress?
      </h1>
      <p class="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
        Your shop has grown. Too many plugins. Too slow. Too fragile. But moving everything at once to a new system or paying for a full rebuild? That's expensive and risky.
      </p>
      <p class="mt-4 text-lg text-sf-neonAlt font-mono">
        Storefire is the bridge. Keep what you have. Make it faster. Cut the rope — when you're ready.
      </p>
    </section>

    <!-- The Problem -->
    <section class="max-w-5xl mx-auto px-4 mb-16 bg-gray-50 dark:bg-zinc-900">
      <div class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-8">
        <h3 class="font-mono text-lg font-semibold text-zinc-900 dark:text-white mb-6">Does this sound familiar?</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div v-for="pain in painPoints" :key="pain" class="flex items-start gap-3">
            <span class="text-red-400 mt-0.5">✗</span>
            <span class="text-sm text-gray-600 dark:text-gray-300">{{ pain }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- The Bridge — 3 Steps -->
    <section class="max-w-5xl mx-auto px-4 mb-16 bg-white dark:bg-sf-dark">
      <div class="text-center mb-12">
        <span class="font-mono text-xs text-sf-neon/50 tracking-widest uppercase">Your path forward</span>
        <h2 class="mt-4 text-3xl md:text-4xl font-mono font-bold text-zinc-900 dark:text-white">
          Three steps. <span class="text-sf-neon">No big rebuild.</span>
        </h2>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(step, i) in steps" :key="step.title" class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-6 sf-card-hover">
          <div class="w-12 h-12 rounded-full bg-sf-neon/10 flex items-center justify-center mb-4">
            <span class="font-mono text-lg font-bold text-sf-neon">{{ i + 1 }}</span>
          </div>
          <h3 class="font-mono text-lg font-semibold text-zinc-900 dark:text-white mb-2">{{ step.title }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{{ step.desc }}</p>
          <div class="font-mono text-xs text-sf-neon/70">{{ step.result }}</div>
        </div>
      </div>
    </section>

    <!-- Architecture Diagram -->
    <section class="max-w-5xl mx-auto px-4 mb-16 bg-gray-50 dark:bg-zinc-900">
      <div class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-8">
        <h3 class="font-mono text-lg font-semibold text-zinc-900 dark:text-white mb-6">How it works</h3>
        <div class="font-mono text-sm text-sf-neon/80 overflow-x-auto">
          <pre><code>  BEFORE (slow & tangled)              AFTER (fast & simple)

  ┌─────────────────────┐            ┌──────────────────────┐
  │  WordPress + Shop   │            │     Your Shopfront   │
  │  • lots of plugins  │            │  Fast. Clean. Yours. │
  │  • slow to load     │            └──────────┬───────────┘
  │  • hard to change   │                       │
  │  • easy to break    │            ┌──────────▼───────────┐
  └─────────────────────┘            │      Storefire       │
                                     │       Bridge         │
                                     └──────────┬───────────┘
                                                │
                                     ┌──────────▼───────────┐
                                     │   WooCommerce        │
                                     │  Keep your products, │
                                     │  orders & customers  │
                                     │  Nothing moves.      │
                                     └──────────────────────┘

                                            — OR when you want —

                                     ┌──────────────────────┐
                                     │        Odoo          │
                                     │ Stock, orders and    │
                                     │ accounting in one    │
                                     │ place. Same shopfront│
                                     └──────────────────────┘
         Shopfront  →  Bridge  →  WooCommerce / Odoo</code></pre>
        </div>
      </div>
    </section>

    <!-- What You Get vs What You Leave Behind -->
    <section class="max-w-5xl mx-auto px-4 mb-16 bg-white dark:bg-sf-dark">
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white dark:bg-sf-surface border border-sf-neon/20 rounded-xl p-6">
          <h3 class="font-mono text-lg font-semibold text-zinc-900 dark:text-white mb-4">What you get</h3>
          <div class="space-y-3">
            <div v-for="item in youGet" :key="item" class="flex items-start gap-3">
              <span class="text-sf-neon mt-0.5">✓</span>
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-sf-surface border border-red-500/20 rounded-xl p-6">
          <h3 class="font-mono text-lg font-semibold text-zinc-900 dark:text-white mb-4">What you leave behind</h3>
          <div class="space-y-3">
            <div v-for="item in youLeave" :key="item" class="flex items-start gap-3">
              <span class="text-red-400 mt-0.5">✗</span>
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison with alternatives -->
    <section class="max-w-5xl mx-auto px-4 mb-16 bg-gray-50 dark:bg-zinc-900">
      <div class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl overflow-hidden">
        <div class="p-6 border-b border-gray-200 dark:border-sf-border">
          <h3 class="font-mono text-lg font-semibold text-zinc-900 dark:text-white">Why not just...?</h3>
          <p class="font-mono text-xs text-gray-500 dark:text-zinc-400 mt-1">Common options — and why they cost you more</p>
        </div>
        <div class="divide-y divide-gray-200 dark:divide-sf-border">
          <div v-for="alt in alternatives" :key="alt.option" class="px-6 py-4 hover:bg-sf-card/50 transition-colors">
            <div class="flex items-center gap-3 mb-1">
              <span class="font-mono text-sm font-semibold text-zinc-900 dark:text-white">"{{ alt.option }}"</span>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ alt.why }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who This Is For -->
    <section class="max-w-5xl mx-auto px-4 mb-16 bg-white dark:bg-sf-dark">
      <h2 class="font-mono text-2xl font-bold text-zinc-900 dark:text-white mb-6">Who is this for?</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="who in targetAudience" :key="who.title" class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-lg p-4">
          <span class="text-sf-neon font-mono text-sm font-semibold">{{ who.title }}</span>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ who.desc }}</p>
        </div>
      </div>
    </section>

    <!-- The Adapter Advantage -->
    <section class="max-w-5xl mx-auto px-4 mb-16 bg-gray-50 dark:bg-zinc-900">
      <div class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-8">
        <h3 class="font-mono text-lg font-semibold text-zinc-900 dark:text-white mb-6">Switch anytime — one simple setting</h3>
        <p class="text-gray-500 dark:text-gray-400 mb-6">Your shopfront doesn't care what's running behind it. Change one setting to switch systems. No rebuild. No starting over. No downtime.</p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="text-center p-4 rounded-lg bg-sf-card border border-gray-200 dark:border-sf-border">
            <div class="font-mono text-sf-neon font-bold text-lg mb-1">WooCommerce</div>
            <div class="font-mono text-xs text-gray-500 dark:text-zinc-400">Keep your shop as it is</div>
            <div class="font-mono text-xs text-sf-neon mt-2">Stay where you are</div>
          </div>
          <div class="text-center p-4 rounded-lg bg-sf-card border border-gray-200 dark:border-sf-border">
            <div class="font-mono text-sf-neonAlt font-bold text-lg mb-1">Odoo</div>
            <div class="font-mono text-xs text-gray-500 dark:text-zinc-400">Stock, orders & accounting in one place</div>
            <div class="font-mono text-xs text-sf-neonAlt mt-2">Switch when ready</div>
          </div>
          <div class="text-center p-4 rounded-lg bg-sf-card border border-gray-200 dark:border-sf-border">
            <div class="font-mono text-gray-500 dark:text-zinc-400 font-bold text-lg mb-1">More coming</div>
            <div class="font-mono text-xs text-gray-500 dark:text-zinc-400">Shopify and others</div>
            <div class="font-mono text-xs text-gray-500 dark:text-zinc-400 mt-2">Same shopfront</div>
          </div>
        </div>
        <div class="mt-6 p-4 rounded-lg bg-sf-neon/5 border border-sf-neon/20">
          <p class="font-mono text-sm text-sf-neon">
            <span class="font-bold">The point:</span> You're not picking one system forever. You're picking which one runs <em>today</em>. Storefire lets you change your mind whenever you want.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="max-w-4xl mx-auto px-4 text-center bg-white dark:bg-sf-dark">
      <h2 class="text-3xl md:text-4xl font-mono font-bold text-zinc-900 dark:text-white mb-4">
        Ready to <span class="text-sf-neon">cut the rope</span>?
      </h2>
      <p class="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-8">
        Keep your products and customers. Get a faster shop. Stay free to switch later.
        No big rebuild. No risk. Just progress.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/#features"
          class="px-8 py-4 bg-sf-neon text-white font-mono font-bold rounded-lg hover:bg-sf-fire-400 transition-all text-lg"
        >
          See how it works →
        </NuxtLink>
        <NuxtLink
          to="mailto:hello@storefire.online"
          class="px-8 py-4 border border-sf-neonAlt/30 text-sf-neonAlt font-mono rounded-lg hover:bg-sf-neonAlt/10 transition-all text-lg"
        >
          Talk to us →
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Stuck on WordPress? Keep WooCommerce. Lose the Weight. | Storefire',
  ogTitle: 'Storefire — Keep Your Shop. Lose the Headaches.',
  description: 'Your WooCommerce shop is slow and messy with plugins. Storefire gives you a faster shopfront today using what you already have — and a simple switch to Odoo later if you want. No big rebuild.',
  ogDescription: 'Keep your products and orders. Get a faster shop. Stay free to switch later — no big rebuild, no lock-in.',
  ogImage: '/storefire_fav_logo.png',
})

const painPoints = [
  'Too many plugins — each one needs updates and can break the others',
  'Your shop is slow — customers leave before it even loads',
  'Constant security updates for tools you barely use',
  'Stuck with a design you can\'t change without breaking everything',
  'You want better stock and accounting, but moving feels like a 6-month headache',
  'Paying monthly for extras like reviews and wishlists that should just be included',
  'What started simple now feels messy and held together with fixes',
  'Been quoted thousands for a rebuild that still locks you in',
]

const steps = [
  {
    title: 'Deploy — Go live fast',
    desc: 'We connect a fast, clean new shopfront to your existing shop. Same products, same orders, same customers. Nothing gets lost.',
    result: '→ Your shop loads instantly. Customers notice.',
  },
  {
    title: 'Consolidate — Clear the clutter',
    desc: 'Turn off the extra plugins. Reviews, search, blog and checkout are already built in. Fewer things to pay for, update or fix.',
    result: '→ Less to manage. Lower costs. Fewer headaches.',
  },
  {
    title: 'Evolve — Grow when ready',
    desc: 'Want a bigger system like Odoo later? Change one setting. Your shopfront stays the same. No rebuild needed.',
    result: '→ You decide when. You\'re never locked in.',
  },
]

const youGet = [
  'A lightning-fast shop that loads in under a second',
  'Keep all your products, orders and customers — nothing lost',
  'Built-in search, reviews, blog and contact forms',
  'Trolley and checkout that just work with what you have now',
  'Safer shop — blocks bad code and fake image links automatically',
  'Properly tested so updates don\'t break your shop',
  'Clear reports to spot problems quickly',
  'Ready for a bigger system like Odoo when you need it',
  'You own it — no monthly platform fees, no lock-in',
  'Live in minutes on fast, reliable hosting',
]

const youLeave = [
  'Juggling plugins that clash after every update',
  'Slow loading that loses sales',
  'Being stuck with a design you can\'t change',
  'Paying extra every month for basics that should be included',
  'Constant security fixes for plugins you barely use',
  'A confusing admin area your team dreads',
  'Hearing "you can\'t do that" from your shop system',
  'Expensive rebuild quotes that still leave you trapped',
]

const alternatives = [
  {
    option: 'Just pay an agency to rebuild it',
    why: 'They\'ll charge you thousands for a custom site, and you\'ll still be tied to their code. If they disappear, you\'re stuck again. Storefire gives you the same speed boost with a setup you own and can run yourself.',
  },
  {
    option: 'Move everything to Odoo at once',
    why: 'That means moving your whole business — stock, orders, invoicing, accounting — all in one go. It\'s a 6 to 12 month project. Storefire lets you start with just the shopfront and move the rest later, when you\'re ready.',
  },
  {
    option: 'Switch to Shopify',
    why: 'You\'d pay high monthly fees and a cut of every sale, plus you\'d have to rebuild your whole shop from scratch. Storefire keeps what you have and only costs you simple hosting.',
  },
  {
    option: 'Just try to speed up WordPress',
    why: 'You can add caching, but you\'re still stuck with WordPress underneath — the same plugins, the same limits, the same slow base. Storefire replaces the slow front part. That\'s where the speed comes from.',
  },
  {
    option: 'Wait for the perfect time',
    why: 'Your competitors are getting faster every month. Storefire lets you ship a better shop today and keep improving over time. Waiting just costs you more sales.',
  },
]

const targetAudience = [
  { title: 'Shops with lots of products that feel slow and messy', desc: 'You\'ve outgrown the plugin juggle. Too many moving parts, too slow, too easy to break.' },
  { title: 'Agencies looking after shops for clients', desc: 'Give your clients a faster shop without a full rebuild. Offer Storefire as your faster option.' },
  { title: 'Shops thinking about Odoo one day', desc: 'Start with a faster shopfront now. Move the behind-the-scenes system later — not all at once.' },
  { title: 'Shop owners tired of paying for extras', desc: 'Reviews, wishlists, email and more as separate monthly bills? Storefire has most of this built in.' },
  { title: 'Anyone who wants a faster shop that sells more', desc: 'A shop that loads instantly keeps customers around. Your old setup on shared hosting can\'t keep up.' },
  { title: 'Owners who want to own their shop, not rent it', desc: 'No platform fees. No lock-in. Your shop, your data, your choice where it lives.' },
]
</script>
