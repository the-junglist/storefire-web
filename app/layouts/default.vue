<template>
  <div class="min-h-screen flex flex-col">
    <ScrollProgress />
    <NavBar />
    <main class="flex-1" aria-label="Main content">
      <slot />
    </main>
    <FooterSection />
  </div>
</template>
