<template>
  <nav aria-label="Main navigation" class="fixed top-0 left-0 right-0 z-50 bg-zinc-950 backdrop-blur-xl border-b border-zinc-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group" aria-label="Storefire home">
          <img src="/storefire_fav_logo.png" alt="Storefire" class="h-9 w-auto md:hidden" />
          <img src="/storefire_logo_1.png" alt="" class="h-10 w-auto hidden md:block" />
        </NuxtLink>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            class="px-3 py-2 text-sm text-gray-300 hover:text-sf-neon transition-colors font-mono"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

<!-- CTA & Theme toggle -->
        <div class="hidden md:flex items-center gap-3">
          <NuxtLink
            to="https://shop.storefire.online"
            class="px-4 py-2 text-sm font-mono bg-sf-neon text-white rounded-lg hover:bg-sf-fire-400 transition-all font-semibold"
          >
            See StoreFire
          </NuxtLink>
          <button
            @click="toggleTheme"
            class="md:flex items-center px-3 py-1 text-sm text-gray-300 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            <svg v-if="isDark" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" stroke-width="2" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </button>
        </div>

        <!-- Mobile menu button -->
        <button @click="mobileOpen = !mobileOpen" class="md:hidden text-gray-300 hover:text-sf-neon" :aria-expanded="mobileOpen" aria-label="Toggle navigation menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileOpen" class="md:hidden pb-4 border-t border-zinc-700 bg-zinc-950 mt-2 pt-4">
        <NuxtLink
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          class="block px-3 py-2 text-sm text-gray-300 hover:text-sf-neon font-mono mb-2"
          @click="mobileOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
        <div class="mt-4 px-3 flex">
          <NuxtLink
            to="https://shop.storefire.online"
            class="flex-1 text-center px-4 py-2 text-sm font-mono bg-sf-neon text-white rounded-lg font-semibold"
            @click="mobileOpen = false"
          >
            See StoreFire
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>

  <!-- Back to top button - bottom right -->
  <button
    @click="scrollToTop"
    class="fixed bottom-4 right-4 px-3 py-2 text-sm text-gray-300 rounded-full bg-zinc-800 hover:bg-sf-fire-400 transition-colors z-50"
    aria-label="Back to top"
  >
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>

<script setup>
const mobileOpen = ref(false)
const isDark = ref(false)

const navItems = [
  { label: 'How it works', to: '/#how' },
  { label: 'For developers', to: '/#developers' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/contact' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>
