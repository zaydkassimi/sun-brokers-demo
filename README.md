# Sun Brokers — Concept Site

Presentation-ready concept for a Casablanca real-estate agency. Built with Next.js 16 (App Router),
TypeScript, Tailwind CSS v4, Framer Motion, and `next/image`.

> **Demonstration project.** Contact details, social links, and statistics are placeholders. The
> contact form has no backend: nothing is transmitted, stored, or emailed. Every testimonial is
> labelled as demo content.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # eslint
npx tsc --noEmit
```

## Routes

| Route             | Rendering | Notes                                                    |
| ----------------- | --------- | -------------------------------------------------------- |
| `/`               | Static    | Full one-page site: hero, search, services, neighbourhoods |
| `/biens`          | Dynamic   | Full 12-property catalogue, filters read from query string |
| `/icon.svg`       | Static    | Favicon                                                    |
| `/opengraph-image`| Static    | Generated 1200×630 social preview                          |

## Before you go live

Three files carry everything you need to customise:

1. **`src/config/site.ts`** — agency name, tagline, address, phone, email, WhatsApp, social
   links. Empty contact fields are hidden automatically; the floating contact button falls back to
   the `#contact` section with a "Démo" badge. The `url` field is a placeholder.
2. **`src/data/`** — `properties.ts` (12 listings), `neighborhoods.ts`, `testimonials.ts`,
   `instagram.ts`. Replace the Unsplash imagery with real photography; see
   `public/images/README.md` for the naming and size conventions.
3. **`src/app/opengraph-image.tsx`** — regenerate the social card once the real brand palette is
   confirmed.

## Design system

Tokens live in `src/app/globals.css` under `@theme`:

| Token          | Value     | Use                          |
| -------------- | --------- | ---------------------------- |
| `paper`        | `#f7f5f0` | Page background (ivory)      |
| `ink`          | `#1c1b19` | Text, dark sections          |
| `sand`         | `#e5ded0` | Image placeholders           |
| `gold`         | `#b08d57` | Accents, CTAs                |
| `display`      | `#f1ede4` | Text on dark backgrounds     |

Typography pairs **Cormorant Garamond** (editorial headings) with **Inter** (UI and body), both
self-hosted through `next/font`. Corners are square (`rounded-sharp`), motion respects
`prefers-reduced-motion`, and focus rings are visible on every interactive element.

## Filtering

`/biens` accepts `?quartier=`, `?type=`, and `?transaction=`. Filters are parsed server-side in
`src/app/biens/page.tsx`, shared with the home page through
`PropertySearchProvider`, and deep-linkable — `/biens#property-slug` scrolls to and highlights a
listing.

## Project structure

```
src/
├── app/            routes, metadata, icons
├── components/
│   ├── layout/     Navbar, Footer
│   ├── sections/   home page sections
│   ├── ui/         PropertyCard, Reveal, ActionLink, BrandIcons…
│   └── providers/  shared search state
├── config/         site configuration
├── data/           mock content
├── lib/            filter parsing, scroll helpers
└── types/          shared TypeScript types

public/images/       27 local placeholder photos
```

## Accessibility

Skip link, semantic landmarks, native radio/select controls, labelled fields with
`aria-invalid` error messaging, `aria-live` result counts, a fullscreen mobile dialog with focus
management and Escape-to-close, 44 px minimum touch targets, and reduced-motion fallbacks.
