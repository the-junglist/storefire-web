<template>
  <footer class="border-t border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-sf-dark" aria-label="Site footer">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="md:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-2">
            <img src="/storefire_logo_1.png" alt="Storefire" class="h-10 w-auto" />
          </NuxtLink>
          <p class="mt-4 text-sm text-gray-500 font-mono">Keep your shop. Lose the weight.</p>
          <p class="mt-3 text-sm text-gray-500 leading-relaxed">
            A fast new shopfront for your existing WooCommerce store.
            Free to run yourself. No monthly fees. Your shop, your data.
          </p>
        </div>

        <!-- Platform -->
        <div>
          <h4 class="font-mono text-sm text-sf-neon mb-4">Platform</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/#features" class="text-sm text-gray-500 hover:text-sf-neon transition-colors">Features</NuxtLink></li>
            <li><NuxtLink to="/#commerce" class="text-sm text-gray-500 hover:text-sf-neon transition-colors">Your shop, your choice</NuxtLink></li>
            <li><NuxtLink to="/#commerce" class="text-sm text-gray-500 hover:text-sf-neon transition-colors">Commerce Backends</NuxtLink></li>
            <li><NuxtLink to="/comparison" class="text-sm text-gray-500 hover:text-sf-neon transition-colors">Comparison</NuxtLink></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="font-mono text-sm text-sf-neon mb-4">Resources</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/pricing" class="text-sm text-gray-500 hover:text-sf-neon transition-colors">Pricing</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-sm text-gray-500 hover:text-sf-neon transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-sm text-gray-500 hover:text-sf-neon transition-colors">Contact</NuxtLink></li>
            <li><a href="https://storefire.online" class="text-sm text-gray-500 hover:text-sf-neon transition-colors">Live Store</a></li>
          </ul>
        </div>

        <!-- Tech -->
        <div>
          <h4 class="font-mono text-sm text-sf-neon mb-4">Tech Stack</h4>
          <ul class="space-y-2">
            <li><span class="text-sm text-gray-500">Nuxt 4 + Vue 3</span></li>
            <li><span class="text-sm text-gray-500">Tailwind CSS</span></li>
            <li><span class="text-sm text-gray-500">Cloudflare Pages</span></li>
            <li><span class="text-sm text-gray-500">WooCommerce / Odoo</span></li>
            <li><span class="text-sm text-gray-500">Playwright + k6</span></li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-700 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-gray-400 font-mono">
          {{ new Date().getFullYear() }} Storefire. Your shop, without the baggage.
        </p>
        <p class="text-xs text-gray-400 font-mono">
          <span class="text-sf-neon/40">$</span> Same products. A faster site. Your choice what comes next.
        </p>
      </div>
    </div>
  </footer>
</template>
