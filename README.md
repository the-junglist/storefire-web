# STOREFIRE — Marketing Site

> Keep your WooCommerce shop. Lose the weight.

Marketing site for **STOREFIRE** — a lighter storefront that sits in front of an existing WooCommerce shop. WooCommerce keeps running products, orders, customers and payments; StoreFire serves the storefront customers browse.

Live at **https://storefire.online** · Demo store at **https://shop.storefire.online** · Source: https://github.com/the-junglist/storefire

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Hero, problem, how it works, benefits, under the bonnet, FAQ, CTA |
| `/comparison` | StoreFire vs staying on a heavy WooCommerce theme stack |
| `/about` | What Storefire is and why it exists |
| `/pricing` | Self-hosted (£0) vs managed (performance share per sale) |
| `/contact` | Contact — opens the visitor's email app pre-filled |

## Agent / AEO

- `robots.txt` — explicitly welcomes AI answer-engine crawlers
- `llms.txt` + `llms-full.txt` — machine-readable product catalogue
- Structured data: SoftwareApplication, Organization, FAQPage JSON-LD
- Sitemap: `https://storefire.online/sitemap.xml`

## Quick Start

```bash
npm ci
npm run dev    # http://localhost:3000

npm run build  # → dist/ (Nitro preset: cloudflare-pages)
```

## Stack

| Layer | Tech |
|-------|------|
| Framework | Nuxt 4 (Vue 3), TypeScript strict |
| Styling | Tailwind CSS 3 via `@nuxtjs/tailwindcss` |
| Fonts | JetBrains Mono + Inter (`@nuxtjs/google-fonts`) |
| Icons | `@nuxt/icon` |
| SEO | `@nuxtjs/sitemap`, JSON-LD |
| Analytics | GA4 (`G-F627LE1HLQ`) |
| Deploy | Cloudflare Pages |

Theme: dark industrial, fire accents (`sf-neon` orange, `sf-neonAlt` red), mono typography.

## Deployment

Cloudflare Pages project **storefire-web** — deploy with:

```bash
npm run build && npx wrangler pages deploy dist --project-name=storefire-web --branch=main
```

Production domain: `https://storefire.online` (+ `www`). The demo store lives in the separate `storefire` Pages project at `shop.storefire.online`.
