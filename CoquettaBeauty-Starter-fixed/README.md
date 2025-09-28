# Coquetta Beauty — Headless-ready Next.js Starter

Follain-like structure with placeholder content so you can upload your own images and copy.

## Quick start

```bash
# install
npm install

# run dev
npm run dev
```

Open http://localhost:3000

## Pages

- `/` Home (hero, featured grid)
- `/shop` Product grid (placeholder data)
- `/product/[handle]` Product detail template
- `/collections` Curated groupings
- `/blog` Journal
- `/about` About page
- `/clean` Clean standard
- `/ingredients` Ingredient glossary
- `/contact` Contact form (wire later)

## Uploading images

Place files into `/public` and update the image paths in components/pages (search for `/p1.jpg`, `/hero-placeholder.jpg`).

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Import Project** → select repo → Deploy.
3. Add your domain (CoquettaBeauty.com) under **Settings → Domains** in Vercel and follow the DNS prompts for GoDaddy.

## Connect Shopify later

- Replace placeholder product data by fetching from Shopify Storefront API.
- Add `Add to Cart` → redirect to Shopify Checkout, or implement a cart that posts to Shopify Checkout API.
- Recommended: Keep claims cosmetic-safe (appearance, hydration, brightness).

## Optional CMS

Add Sanity/Contentful (for blog & glossary) and fetch in the pages. This structure is ready for it.

## Tech

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Accessible, responsive, SEO-friendly starter
- Design tokens in `/styles/globals.css`
