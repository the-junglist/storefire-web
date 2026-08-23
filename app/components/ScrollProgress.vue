<template>
  <!-- Scroll progress — thin ice line on top of the navbar -->
  <div
    class="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left bg-gradient-to-r from-sf-ice/80 via-sf-ice to-sf-neon transition-transform duration-100 ease-out"
    :style="{ transform: `scaleX(${progress})` }"
    aria-hidden="true"
  />
</template>

<script setup>
const progress = ref(0)

function onScroll() {
  const el = document.documentElement
  const max = el.scrollHeight - el.clientHeight
  progress.value = max > 0 ? Math.min(1, el.scrollTop / max) : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
