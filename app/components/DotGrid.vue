<template>
  <div
    ref="container"
    class="absolute inset-0 pointer-events-none overflow-hidden"
    style="z-index: 0"
  >
    <!-- Dot grid — orange fire -->
    <div
      class="absolute inset-0 transition-opacity duration-300"
      :style="{
        backgroundImage: 'radial-gradient(circle, rgba(249, 115, 22, 0.12) 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }"
    />
    <!-- Sparse ice dots — cool accent between the fire grid -->
    <div
      class="absolute inset-0 transition-opacity duration-300"
      :style="{
        backgroundImage: 'radial-gradient(circle, rgba(34, 211, 238, 0.35) 1.5px, transparent 1.5px)',
        backgroundSize: '96px 96px',
        backgroundPosition: '40px 24px',
      }"
    />
    <!-- Cursor glow — fire -->
    <div
      class="absolute transition-opacity duration-500"
      :style="{
        width: '400px',
        height: '400px',
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(249, 115, 22, 0.05) 40%, transparent 70%)',
        opacity: visible ? 1 : 0,
        filter: 'blur(1px)',
      }"
    />
  </div>
</template>

<script setup>
const container = ref(null)
const x = ref(0)
const y = ref(0)
const visible = ref(false)

let raf = null
let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0

function animate() {
  currentX += (targetX - currentX) * 0.08
  currentY += (targetY - currentY) * 0.08
  x.value = Math.round(currentX)
  y.value = Math.round(currentY)
  raf = requestAnimationFrame(animate)
}

function onMouseMove(e) {
  if (!container.value) return
  const rect = container.value.getBoundingClientRect()
  targetX = e.clientX - rect.left
  targetY = e.clientY - rect.top
  visible.value = true
}

function onMouseLeave() {
  visible.value = false
}

onMounted(() => {
  raf = requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (raf) cancelAnimationFrame(raf)
})

defineExpose({ onMouseMove, onMouseLeave, container })
</script>
