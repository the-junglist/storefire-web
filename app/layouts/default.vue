<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-1" aria-label="Main content">
      <slot />
    </main>
    <FooterSection />
  </div>
</template>
