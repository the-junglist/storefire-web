<template>
  <footer class="border-t border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-sf-dark" aria-label="Site footer">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Brand -->
        <div class="md:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-2">
            <img src="/storefire_logo_1.png" alt="Storefire" class="h-10 w-auto" />
          </NuxtLink>
          <p class="mt-4 text-sm text-gray-500 font-mono">Keep your shop. Lose the weight.</p>
        </div>

        <!-- Product -->
        <div>
          <h4 class="font-mono text-sm text-sf-neon mb-4">Product</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/#how" class="text-sm text-gray-500 hover:text-sf-ice transition-colors">How it works</NuxtLink></li>
            <li><NuxtLink to="/#developers" class="text-sm text-gray-500 hover:text-sf-ice transition-colors">For developers</NuxtLink></li>
            <li><NuxtLink to="/#faq" class="text-sm text-gray-500 hover:text-sf-ice transition-colors">FAQ</NuxtLink></li>
            <li><NuxtLink to="/system-check" class="text-sm text-gray-500 hover:text-sf-ice transition-colors">System check</NuxtLink></li>
          </ul>
        </div>

        <!-- Project -->
        <div>
          <h4 class="font-mono text-sm text-sf-neon mb-4">Project</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/contact" class="text-sm text-gray-500 hover:text-sf-ice transition-colors">Contact</NuxtLink></li>
            <li><a href="https://github.com/the-junglist/storefire#readme" class="text-sm text-gray-500 hover:text-sf-ice transition-colors">Documentation</a></li>
            <li><a href="https://github.com/the-junglist/storefire" class="text-sm text-gray-500 hover:text-sf-ice transition-colors">GitHub</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-700 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-gray-400 font-mono">
          {{ new Date().getFullYear() }} Storefire
        </p>
        <p class="text-xs text-gray-400 font-mono">
          Open source — <a href="https://github.com/the-junglist/storefire" class="hover:text-sf-ice transition-colors">the-junglist/storefire</a>
        </p>
      </div>
    </div>
  </footer>
</template>
