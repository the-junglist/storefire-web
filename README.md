# STOREFIRE — Public Marketing Site

> Headless e-commerce, built different.

The public-facing marketing site for **STOREFIRE** — the headless e-commerce platform with switchable **WooCommerce** and **Odoo** backends on a **Nuxt 4** frontend, deployed to **Cloudflare Pages**.

This repo is the marketing front door at **https://storefire.online**. It promotes the platform and links visitors through to the live app demo.

Storefire's unique angle: a **commerce-agnostic adapter** that lets you switch between WooCommerce, Odoo, and future backends (Shopify, BigCommerce, Magento, Shopware) with a single environment variable. No rewrite. No downtime.

---

## Pages

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/pages/index.vue` | Hero + features + architecture + commerce backends + FAQ + CTA |
| `/comparison` | `app/pages/comparison.vue` | The migration bridge — WordPress pain points, 3-step path, adapter advantage |
| `/about` | `app/pages/about.vue` | Origin story, tech stack, stats, open source CTA |
| `/contact` | `app/pages/contact.vue` | Contact form (name, email, business type, message) |
| `/pricing` | `app/pages/pricing.vue` | 3 pricing tiers, cost comparison, no feature gates |

---

## Competitive Landscape

No single competitor does what Storefire does. The market breaks into:

- **Frameworks**: WooNuxt (WC only), Shopinvader (Odoo only), NuxtCommerce (WC only)
- **Agencies**: WebDesk, AddWeb, Axis, Hornet — selling dev services, not reusable platforms
- **Commerce engines**: Shopify, BigCommerce, Magento, Shopware — backends waiting for frontends

**Storefire's position**: Commerce-agnostic adapter + operational tooling (E2E, load tests, security, caching). Not backend-specific. Not agency services. A repeatable deployment system.

See `/comparison` for the full migration bridge narrative.

---

## Quick Start (Local)

```bash
npm ci
npm run dev
# → http://localhost:3000
```

## Production Build

```bash
npm run build
# output in dist/  (Nitro preset: cloudflare-pages)
```

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Nuxt 4 (Vue 3), TypeScript strict |
| Styling | Tailwind CSS 3 via `@nuxtjs/tailwindcss` |
| Fonts | `@nuxtjs/google-fonts` — JetBrains Mono + Inter |
| Icons / Images | `@nuxt/icon`, `@nuxt/image` |
| SEO | `@nuxtjs/sitemap` |
| Deploy | Cloudflare Pages (`nitro.preset = cloudflare-pages`) |

Theme: dark, terminal-inspired, fire/cyan accent (`sf-neon`, `sf-neonAlt`) — matching the Storefire brand and logo assets in `/public`.

---

## Project Structure

```
app/
  pages/            # index, comparison, about, contact, pricing
  components/       # NavBar (dropdown), FooterSection, DotGrid
  layouts/          # default layout (NavBar + slot + Footer)
  assets/css/       # Tailwind + theme tokens (main.css)
public/             # logos, favicons (storefire_logo_1.png, storefire_fav_logo.png)
nuxt.config.ts      # meta, fonts, modules, cloudflare-pages preset
tailwind.config.js  # sf.* color tokens (fire + cyan), animations, mono font
```

---

## Brand Positioning

Storefire is **the bridge** from WordPress/WooCommerce to headless commerce. Not a migration — an evolution.

1. **Deploy Storefire** → connect to existing WooCommerce → instant speed boost
2. **Consolidate** → replace plugin bloat with built-in features → fewer dependencies
3. **Evolve** → flip one env var to Odoo (or Shopify, BigCommerce) when ready

Key message: *You're not choosing between WooCommerce and Odoo forever. You're choosing which one runs today.*

---

## Deployment

**Cloudflare Pages** — auto-deploy on push to `main`.

- Build command: `npm run build`
- Output directory: `dist`
- Production domain: `https://storefire.online`

The **app demo** (separate build from `the-junglist/storefire`) deploys to `https://demo.storefire.online`.