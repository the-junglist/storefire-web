<template>
  <div>
    <!-- HERO -->
    <section
      class="relative flex items-center justify-center overflow-hidden pt-20 pb-10 md:min-h-screen md:pt-16 md:pb-0 bg-zinc-800 dark:bg-black"
      aria-label="Hero"
      @mousemove="heroDotGrid?.onMouseMove"
      @mouseleave="heroDotGrid?.onMouseLeave"
    >
      <DotGrid ref="heroDotGrid" />

      <!-- Gradient orbs — fire + cyan -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-sf-neon/5 rounded-full blur-[120px]" />
      <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sf-neonAlt/5 rounded-full blur-[100px]" />

      <div class="relative z-10 text-center max-w-5xl mx-auto px-4">
        <!-- Eyebrow -->
        <div class="inline-flex items-center gap-2 bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-full px-4 py-2 mb-8">
          <span class="w-2 h-2 rounded-full bg-sf-neon animate-pulse" />
          <span class="font-mono text-xs text-gray-700 dark:text-zinc-300">Your shop. Just faster.</span>
        </div>

        <!-- Logo -->
        <img src="/storefire_logo_1.png" alt="Storefire" class="mx-auto max-w-[300px] md:max-w-[500px] w-full h-auto" />
        <h1 class="mt-4 md:mt-6 text-2xl md:text-5xl font-mono font-bold text-white leading-tight">
          Keep your <span class="text-sf-neon">WooCommerce</span> shop.<br />
          <span class="text-sf-neonAlt">Lose the weight.</span>
        </h1>
        <p class="mt-4 md:mt-6 text-base md:text-xl text-zinc-200 max-w-3xl mx-auto leading-relaxed">
          A fast new shopfront for your existing store. Same products, same orders — just quicker,
          cleaner, and ready for whatever comes next.
        </p>

        <!-- CTAs -->
        <div class="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <NuxtLink
            to="https://storefire.online"
            class="px-8 py-4 bg-sf-neon text-white font-mono font-bold rounded-lg hover:bg-sf-fire-400 transition-all text-lg"
          >
            See a Live Store →
          </NuxtLink>
          <NuxtLink
            to="/#features"
            class="px-8 py-4 border border-white/30 text-white font-mono rounded-lg hover:bg-white/10 transition-all text-lg"
          >
            How It Works
          </NuxtLink>
        </div>

        <!-- FLOW: Your path forward -->
        <div class="mt-12 md:mt-20 max-w-4xl mx-auto">
          <div class="relative">
            <!-- Vertical connector line -->
            <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sf-neon/30 via-sf-neonAlt/30 to-transparent -translate-x-1/2 hidden md:block" />

            <!-- Start node -->
            <div class="relative z-10 flex flex-col items-center">
              <div class="inline-flex items-center gap-2 bg-white/95 dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-full px-5 py-3 mb-4">
                <Icon name="mdi:store" :size="20" class="text-sf-neon" />
                <span class="font-mono text-sm text-zinc-900 dark:text-white font-medium">Your WooCommerce shop today</span>
              </div>

              <!-- Down arrow -->
              <div class="w-1 h-6 bg-gradient-to-b from-sf-neon to-sf-neonAlt rounded-full mb-4 hidden md:block" />
              <div class="w-6 h-6 bg-gradient-to-b from-sf-neon to-sf-neonAlt rounded-full flex items-center justify-center mx-auto mb-4 md:hidden">
                <Icon name="mdi:chevron-down" :size="16" class="text-white" />
              </div>

              <!-- Two paths -->
              <div class="w-full md:w-1/2 mx-auto md:mx-0 md:absolute md:top-20 md:left-0 md:-translate-y-1/2 lg:top-24">
                <div class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-5 md:p-6 text-left relative group hover:border-sf-neon/50 transition-colors">
                  <!-- Left connector -->
                  <div class="hidden md:block absolute -right-3 top-1/2 w-3 h-0.5 bg-sf-neon/30 group-hover:bg-sf-neon/50 transition-colors" />
                  <div class="md:hidden absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-3 bg-sf-neon/30 mb-2" />

                  <div class="flex items-start gap-3">
                    <div class="w-10 h-10 bg-sf-neon/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sf-neon/20 transition-colors">
                      <Icon name="mdi:check-circle" :size="24" class="text-sf-neon" />
                    </div>
                    <div>
                      <h4 class="font-mono text-lg font-bold text-zinc-900 dark:text-white">Stay on WooCommerce</h4>
                      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Keep your products, orders & checkout — just faster</p>
                    </div>
                  </div>
                  <ul class="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li class="flex items-center gap-2"><Icon name="mdi:check" :size="14" class="text-sf-neon" /> Same database, same admin</li>
                    <li class="flex items-center gap-2"><Icon name="mdi:check" :size="14" class="text-sf-neon" /> Cart & checkout unchanged</li>
                    <li class="flex items-center gap-2"><Icon name="mdi:check" :size="14" class="text-sf-neon" /> Zero migration, instant speed</li>
                  </ul>
                  <div class="mt-4 pt-3 border-t border-gray-200 dark:border-sf-border flex items-center gap-2 text-xs font-mono text-sf-neon">
                    <Icon name="mdi:arrow-right" :size="12" /> NUXT_PUBLIC_COMMERCE_BACKEND=woo
                  </div>
                </div>
              </div>

              <div class="w-full md:w-1/2 mx-auto md:mx-0 md:absolute md:top-20 md:right-0 md:-translate-y-1/2 lg:top-24">
                <div class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-5 md:p-6 text-left relative group hover:border-sf-neonAlt/50 transition-colors">
                  <!-- Right connector -->
                  <div class="hidden md:block absolute -left-3 top-1/2 w-3 h-0.5 bg-sf-neonAlt/30 group-hover:bg-sf-neonAlt/50 transition-colors" />
                  <div class="md:hidden absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-3 bg-sf-neonAlt/30 mb-2" />

                  <div class="flex items-start gap-3">
                    <div class="w-10 h-10 bg-sf-neonAlt/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sf-neonAlt/20 transition-colors">
                      <Icon name="mdi:arrow-up-bold-box" :size="24" class="text-sf-neonAlt" />
                    </div>
                    <div>
                      <h4 class="font-mono text-lg font-bold text-zinc-900 dark:text-white">Grow into Odoo</h4>
                      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Add stock, till, accounting when you're ready</p>
                    </div>
                  </div>
                  <ul class="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li class="flex items-center gap-2"><Icon name="mdi:check" :size="14" class="text-sf-neonAlt" /> Full ERP: inventory, POS, invoicing</li>
                    <li class="flex items-center gap-2"><Icon name="mdi:check" :size="14" class="text-sf-neonAlt" /> Same shopfront, zero redesign</li>
                    <li class="flex items-center gap-2"><Icon name="mdi:check" :size="14" class="text-sf-neonAlt" /> One setting to switch</li>
                  </ul>
                  <div class="mt-4 pt-3 border-t border-gray-200 dark:border-sf-border flex items-center gap-2 text-xs font-mono text-sf-neonAlt">
                    <Icon name="mdi:arrow-right" :size="12" /> NUXT_PUBLIC_COMMERCE_BACKEND=odoo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- At-a-glance -->
        <div class="mt-12 md:mt-40 max-w-2xl mx-auto text-left">
          <div class="bg-white/95 dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-lg p-6 font-mono text-sm">
            <div class="text-gray-500 dark:text-zinc-400 mb-2">$ storefire — what's inside</div>
            <div class="space-y-1">
              <div><span class="text-sf-neon">✓</span> <span class="text-sf-neon/70">Fast shopfront</span> <span class="text-gray-500 dark:text-zinc-400">— loads in under a second</span></div>
              <div><span class="text-sf-neon">✓</span> <span class="text-sf-neon/70">Your WooCommerce</span> <span class="text-gray-500 dark:text-zinc-400">— same products, same database</span></div>
              <div><span class="text-sf-neonAlt">✓</span> <span class="text-sf-neonAlt/70">Ready for Odoo</span> <span class="text-gray-500 dark:text-zinc-400">— switch when you want, not before</span></div>
              <div><span class="text-sf-neon">✓</span> <span class="text-sf-neon/70">Cart &amp; checkout</span> <span class="text-gray-500 dark:text-zinc-400">— works with your current payments</span></div>
              <div><span class="text-sf-neonAlt">✓</span> <span class="text-sf-neonAlt/70">Search, blog &amp; more</span> <span class="text-gray-500 dark:text-zinc-400">— built in, no extra plugins</span></div>
              <div><span class="text-sf-neon">✓</span> <span class="text-sf-neon/70">Images &amp; caching</span> <span class="text-gray-500 dark:text-zinc-400">— quick on every page</span></div>
              <div class="pt-2 text-gray-500 dark:text-zinc-400 border-t border-gray-200 dark:border-sf-border mt-2">Your shop, just without the drag.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT IS STOREFIRE -->
    <section class="py-12 md:py-24 bg-white dark:bg-sf-dark relative" id="about" aria-labelledby="what-is-sf">
      <div class="sf-section-divider mb-12 md:mb-24 hidden md:block" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-16">
          <span class="font-mono text-xs text-sf-neon/50 tracking-widest uppercase">What is Storefire</span>
          <h2 id="what-is-sf" class="mt-4 text-2xl md:text-5xl font-mono font-bold text-zinc-900 dark:text-white">
            Your shop, without the<br /><span class="text-sf-neon">baggage</span>
          </h2>
          <p class="mt-4 md:mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            You have a WooCommerce shop that works — but it's getting slow, tangled, and expensive to run.
            Storefire gives you a clean, fast new shopfront that uses your existing shop behind the scenes.
            Same products. Same orders. Just quicker, and ready for whatever comes next.
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <img src="/storefire_info_graphic_1.png" alt="Storefire cuts the rope — keep WooCommerce, lose the weight" class="w-full h-auto rounded-xl" />
        </div>
      </div>
    </section>

    <!-- YOUR SHOP, YOUR CHOICE (bridge story) -->
    <section class="py-12 md:py-24 bg-gray-50 dark:bg-zinc-900 relative" id="commerce" aria-labelledby="commerce-heading">
      <div class="absolute top-0 right-0 w-96 h-96 bg-sf-neon/5 rounded-full blur-[120px]" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div class="inline-flex items-center gap-2 bg-sf-neon/10 border border-sf-neon/20 rounded-full px-4 py-2 mb-4 md:mb-6">
              <Icon name="mdi:swap-horizontal" :size="16" />
              <span class="font-mono text-xs text-sf-neon">YOUR SHOP, YOUR CHOICE</span>
            </div>
            <h2 id="commerce-heading" class="text-3xl md:text-4xl font-mono font-bold text-zinc-900 dark:text-white leading-tight">
              Stay on WooCommerce<br /><span class="text-sf-neonAlt">or grow into Odoo.</span>
            </h2>
            <p class="mt-4 md:mt-6 text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              Your shopfront doesn't care which system is behind it. Change one setting and it talks to
              WooCommerce or Odoo — same pages, same checkout, no rebuild.
            </p>
            <div class="mt-6 md:mt-8 space-y-3">
              <div class="flex items-start gap-3">
                <Icon name="mdi:check" :size="16" />
                <span class="text-gray-700 dark:text-gray-300">WooCommerce: your existing products, cart and checkout — just faster</span>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="mdi:check" :size="16" />
                <span class="text-gray-700 dark:text-gray-300">Odoo: full stock control, till and accounting when you're ready</span>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="mdi:check" :size="16" />
                <span class="text-gray-700 dark:text-gray-300">No redesign needed — your shopfront stays the same either way</span>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="mdi:check" :size="16" />
                <span class="text-gray-700 dark:text-gray-300">Future-proof: new backends (like Shopify) can be added the same way</span>
              </div>
            </div>
            <div class="mt-6 md:mt-8">
              <NuxtLink
                to="https://storefire.online"
                class="px-6 py-3 bg-sf-neon text-white font-mono font-bold rounded-lg hover:bg-sf-fire-400 transition-all inline-block"
              >
                See It In Action →
              </NuxtLink>
            </div>
          </div>

          <!-- At-a-glance: switching -->
          <div class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-6 font-mono text-sm">
            <div class="text-sf-muted mb-4">$ storefire — switch when you're ready</div>
            <div class="space-y-2">
              <div><span class="text-sf-neon">01</span> <span class="text-sf-muted">// today — your WooCommerce</span></div>
              <div><span class="text-sf-neon">02</span> <span class="text-sf-neon/80">shop connects to WooCommerce</span></div>
              <div><span class="text-sf-neon">03</span> <span class="text-sf-muted">// tomorrow — when you want Odoo</span></div>
              <div><span class="text-sf-neon">04</span> <span class="text-sf-neon/80">change one setting → now talks to Odoo</span></div>
              <div class="pt-3 border-t border-gray-200 dark:border-sf-border mt-3"><span class="text-sf-muted">$ storefire — what happens</span></div>
              <div><span class="text-sf-neon">✓</span> <span class="text-sf-neon/70">Products &amp; categories</span> <span class="text-sf-muted">— same pages</span></div>
              <div><span class="text-sf-neonAlt">✓</span> <span class="text-sf-neonAlt/70">Cart &amp; checkout</span> <span class="text-sf-muted">— same flow</span></div>
              <div><span class="text-sf-neon">✓</span> <span class="text-sf-neon/70">No redesign</span> <span class="text-sf-muted">— no downtime</span></div>
              <div><span class="text-sf-neonAlt">✓</span> <span class="text-sf-neonAlt/70">Your team</span> <span class="text-sf-muted">— nothing to relearn</span></div>
              <div class="pt-2 text-sf-muted border-t border-gray-200 dark:border-sf-border mt-2">Switch when the time is right — not before.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT YOU GET -->
    <section class="py-12 md:py-24 bg-white dark:bg-sf-dark relative" id="features" aria-labelledby="features-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-16">
          <span class="font-mono text-xs text-sf-neon/50 tracking-widest uppercase">What you get</span>
          <h2 id="features-heading" class="mt-4 text-2xl md:text-5xl font-mono font-bold text-zinc-900 dark:text-white">
            A shop that feels<br /><span class="text-sf-neonAlt">light again</span>
          </h2>
          <p class="mt-4 md:mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Fast pages, working checkout, and the boring-but-important stuff — all included.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="feat in detailedFeatures"
            :key="feat.title"
            class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-6 sf-card-hover group"
          >
            <div class="text-3xl mb-4 text-sf-neonAlt"><Icon :name="feat.icon" :size="32" /></div>
            <h3 class="font-mono text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-sf-neonAlt transition-colors">{{ feat.title }}</h3>
            <p class="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="py-12 md:py-24 bg-gray-50 dark:bg-zinc-900 relative" aria-labelledby="how-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-16">
          <span class="font-mono text-xs text-sf-neon/50 tracking-widest uppercase">How it works</span>
          <h2 id="how-heading" class="mt-4 text-2xl md:text-5xl font-mono font-bold text-zinc-900 dark:text-white">
            From connection to<br /><span class="text-sf-neon">first sale</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(step, i) in steps" :key="step.title" class="bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-xl p-6 sf-card-hover text-center">
            <div class="w-12 h-12 rounded-full bg-sf-neon/10 flex items-center justify-center mb-4 mx-auto">
              <span class="font-mono text-lg font-bold text-sf-neon">{{ i + 1 }}</span>
            </div>
            <h3 class="font-mono text-lg font-semibold text-zinc-900 dark:text-white mb-2">{{ step.title }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-12 md:py-24 bg-white dark:bg-sf-dark relative" id="faq" aria-labelledby="faq-heading">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-16">
          <span class="font-mono text-xs text-sf-neon/50 tracking-widest uppercase">FAQ</span>
          <h2 id="faq-heading" class="mt-4 text-3xl md:text-4xl font-mono font-bold text-zinc-900 dark:text-white">
            Frequently asked <span class="text-sf-neonAlt">questions</span>
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

    <!-- INFOGRAPHIC -->
    <section class="bg-white dark:bg-sf-dark">
      <img src="/storefire_info_graphic_2.png" alt="Storefire — cut the rope, unlock speed, grow your business" class="w-full h-auto" />
    </section>

    <!-- CTA -->
    <section class="py-12 md:py-24 bg-gray-50 dark:bg-zinc-900 relative" aria-labelledby="cta-heading">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 id="cta-heading" class="text-2xl md:text-5xl font-mono font-bold text-zinc-900 dark:text-white">
          Keep your shop.<br /><span class="text-sf-neon">Lose the weight.</span>
        </h2>
        <p class="mt-4 md:mt-6 text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Same products. A faster site. Freedom to grow — on WooCommerce today, Odoo when you need it.
          No subscription, no lock-in. Your shop, your data.
        </p>
        <div class="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <NuxtLink
            to="https://storefire.online"
            class="px-8 py-4 bg-sf-neon text-white font-mono font-bold rounded-lg hover:bg-sf-fire-400 transition-all text-lg"
          >
            See a Live Store →
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="px-8 py-4 border border-sf-neonAlt/30 text-sf-neonAlt font-mono rounded-lg hover:bg-sf-neonAlt/10 transition-all text-lg"
          >
            Talk to Us →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const heroDotGrid = ref(null)

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
        description: 'A fast new shopfront for your existing WooCommerce shop. Same products, same orders — just quicker, cleaner, and ready for whatever comes next.',
        url: 'https://storefire.online',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'GBP',
        },
        featureList: [
          'Fast shopfront for existing WooCommerce stores',
          'Works with WooCommerce or Odoo — one setting to switch',
          'Cart and checkout that work with your current setup',
          'Hosted on Cloudflare for quick, reliable performance',
          'Open source — your shop, your data, no lock-in',
          'Search, blog and more built in',
          'Two languages built in (English + Thai)',
          'Secure and tested before every update',
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
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Storefire, in plain terms?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A fast new shopfront for your existing WooCommerce shop. Same products, same orders — just a quicker, cleaner site that is ready for whatever comes next.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I have to move to Odoo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Stay on WooCommerce as long as you want. Odoo is there for when you need stock, till and accounting — you switch when the time is right, not before.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does it go live?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Push your changes and it deploys automatically. No manual uploads or server to manage.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Storefire free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The software is open source and free to run yourself. If you want us to host it, there is no monthly fee — we take a small, agreed share only when you make a sale.',
            },
          },
        ],
      }),
    },
  ],
})

useSeoMeta({
  title: 'Storefire — Keep Your WooCommerce Shop. Lose the Weight.',
  ogTitle: 'Storefire — Keep Your WooCommerce Shop. Lose the Weight.',
  description: 'A fast new shopfront for your existing WooCommerce shop. Same products, same orders — just quicker, cleaner, and ready for whatever comes next.',
  ogDescription: 'Keep your WooCommerce shop. Lose the weight. A fast new shopfront — your products, your orders, no rebuild.',
  ogImage: '/storefire_fav_logo.png',
  twitterCard: 'summary_large_image',
})

const detailedFeatures = [
  {
    icon: 'mdi:file-tree',
    title: 'Built to last',
    desc: 'Clean, modern code with file-based routing and auto-imports. Easy for any developer to pick up and extend.',
  },
  {
    icon: 'mdi:cart',
    title: 'Cart that remembers',
    desc: 'Customers can add items, leave, and come back — their cart is still there. Works smoothly with your existing checkout.',
  },
  {
    icon: 'mdi:credit-card',
    title: 'Checkout that converts',
    desc: 'A short, clear checkout form with real shipping costs shown up front. No surprises before paying.',
  },
  {
    icon: 'mdi:server',
    title: 'Speed that scales',
    desc: 'Pages are cached at the edge so repeat visits are instant. No extra setup needed.',
  },
  {
    icon: 'mdi:palette',
    title: 'Your brand, your look',
    desc: 'Colours, fonts and layout are easy to change. Make it look like your shop — not a template.',
  },
  {
    icon: 'mdi:test-tube',
    title: 'Tested before you ship',
    desc: 'Automated checks run on every change — products, cart, checkout and more — so fewer surprises go live.',
  },
]

const steps = [
  {
    title: 'Connect',
    desc: 'Link Storefire to your existing shop. Same products, same orders — just a new, fast shopfront.',
  },
  {
    title: 'Make it yours',
    desc: 'Add your logo, colours and pages. No need to touch the back end — just make the shopfront yours.',
  },
  {
    title: 'Go live',
    desc: 'Push to deploy. Your new shopfront goes live automatically — quick to launch, easy to update.',
  },
  {
    title: 'Grow',
    desc: 'Customers browse, add to cart and pay. When you need more — like Odoo — switch when you\'re ready.',
  },
]

const faqs = [
  {
    q: 'What is Storefire, in plain terms?',
    a: 'A fast new shopfront for your existing WooCommerce shop. Same products, same orders — just a quicker, cleaner site. When you need more (like Odoo for stock and accounting), you can switch without rebuilding.',
  },
  {
    q: 'Do I have to move to Odoo?',
    a: 'No. Stay on WooCommerce as long as you want. Odoo is there for when you need a full system for stock, till and accounting — you switch when the time is right, not before.',
  },
  {
    q: 'How does it go live?',
    a: 'Push your changes and it deploys automatically on Cloudflare. No manual uploads, no server to manage. Updates are the same: change, push, live.',
  },
  {
    q: 'Is Storefire free?',
    a: 'The software is open source and free to run yourself. If you want us to host it, there is no monthly fee — instead we take a small, agreed share only when you make a sale. No sale, no fee.',
  },
  {
    q: 'What about payments and delivery?',
    a: 'Your current payment setup keeps working. WooCommerce orders go through your existing checkout; Odoo orders use its sales system. Delivery costs are shown before paying — flat rate for Odoo or your WooCommerce rates.',
  },
  {
    q: 'What happens to my product photos?',
    a: 'They stay where they are. Storefire serves them quickly and makes them look right on every screen — phone, tablet and desktop.',
  },
  {
    q: 'Is it tested?',
    a: 'Yes. Every change is checked automatically — products, cart, checkout, search and more. We also test how the shop behaves under load so you know it holds up.',
  },
  {
    q: 'Can I use my own products?',
    a: 'Yes — your shop, your products. They come from your WooCommerce or Odoo. For testing, we include sample products so you can see it working straight away.',
  },
]
</script>
