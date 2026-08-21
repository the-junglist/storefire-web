<template>
  <div class="pt-24 pb-16 bg-white dark:bg-sf-dark">
    <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-sf-dark">
      <span class="font-mono text-xs text-sf-neon/50 tracking-widest uppercase">Contact</span>
      <h1 class="mt-4 text-4xl md:text-6xl font-mono font-bold text-zinc-900 dark:text-white">
        Get in <span class="text-sf-neon">Touch</span>
      </h1>
      <p class="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
        Have a shop on WooCommerce that feels too slow or too tangled? Want to see Storefire on your products? Let's talk.
      </p>

      <!-- Success message -->
      <div v-if="submitted" class="mt-12 bg-white dark:bg-sf-surface border border-sf-neon/30 rounded-xl p-8 text-center glow-border-fire">
        <div class="font-mono text-4xl mb-4">✓</div>
        <h2 class="font-mono text-2xl font-bold text-zinc-900 dark:text-white mb-2">Message Sent</h2>
        <p class="text-gray-500 dark:text-gray-400">We'll get back to you within 24 hours.</p>
        <button
          class="mt-6 px-6 py-3 border border-sf-neon/30 text-sf-neon font-mono rounded-lg hover:bg-sf-neon/10 transition-all"
          @click="submitted = false"
        >
          Send Another →
        </button>
      </div>

      <!-- Contact form -->
      <form v-else class="mt-12 space-y-6" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block font-mono text-sm text-sf-muted mb-2">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-lg px-4 py-3 font-mono text-zinc-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-sf-neon/50 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label for="email" class="block font-mono text-sm text-sf-muted mb-2">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-lg px-4 py-3 font-mono text-zinc-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-sf-neon/50 transition-colors"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div>
          <label for="business" class="block font-mono text-sm text-sf-muted mb-2">Business Type</label>
          <select
            id="business"
            v-model="form.business"
            class="w-full bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-lg px-4 py-3 font-mono text-zinc-900 dark:text-white focus:outline-none focus:border-sf-neon/50 transition-colors"
          >
            <option value="" class="bg-white dark:bg-sf-surface">Select what best describes you</option>
            <option value="woocommerce" class="bg-white dark:bg-sf-surface">I have a WooCommerce shop</option>
            <option value="odoo" class="bg-white dark:bg-sf-surface">I use Odoo / a stock & accounting system</option>
            <option value="shopify" class="bg-white dark:bg-sf-surface">I have a Shopify shop</option>
            <option value="agency" class="bg-white dark:bg-sf-surface">I'm an agency / developer</option>
            <option value="other" class="bg-white dark:bg-sf-surface">Something else</option>
          </select>
        </div>

        <div>
          <label for="message" class="block font-mono text-sm text-sf-muted mb-2">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
            class="w-full bg-white dark:bg-sf-surface border border-gray-200 dark:border-sf-border rounded-lg px-4 py-3 font-mono text-zinc-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-sf-neon/50 transition-colors resize-none"
            placeholder="Tell us a bit about your shop — what you sell, what's been tricky, and what you'd like to be easier..."
          />
        </div>

        <div>
          <button
            type="submit"
            :disabled="sending"
            class="w-full px-8 py-4 bg-sf-neon text-white font-mono font-bold rounded-lg hover:bg-sf-fire-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ sending ? 'Sending...' : 'Send Message →' }}
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Contact — Storefire | Let\'s talk about your shop',
  ogTitle: 'Contact Storefire',
  description: 'Have a shop on WooCommerce that feels too slow or too tangled? Want to see Storefire on your products? Let\'s talk — we\'d love to hear about your shop.',
  ogDescription: 'Contact Storefire — have a shop that feels too slow or tangled? Let\'s talk.',
  ogImage: '/storefire_fav_logo.png',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://storefire.online' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://storefire.online/contact' },
      ],
    }),
  }],
})

const form = reactive({
  name: '',
  email: '',
  business: '',
  message: '',
})

const sending = ref(false)
const submitted = ref(false)

async function handleSubmit() {
  sending.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  submitted.value = true
  sending.value = false
  form.name = ''
  form.email = ''
  form.business = ''
  form.message = ''
}
</script>
