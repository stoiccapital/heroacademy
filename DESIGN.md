---
name: linear-style-lp
description: Linear.app-inspired multi-page marketing LP structure — dark-first design, precise typography, generous whitespace, product-shot rhythm, subtle motion. Use when building a B2B SaaS LP that should feel calm, high-signal, and expensive.
---

# Linear-Style Landing Page

Design system for LPs that borrow Linear.app's calm, high-signal aesthetic without copying it.

## What "Linear-style" actually means

1. **Dark-first**, with a bright monochromatic accent. Not "dark mode option" — dark IS the design.
2. **Type does the heavy lifting.** No decoration substitutes for a strong typographic hierarchy.
3. **Product screenshots ARE the marketing.** Show the real UI, not stock illustrations of "people collaborating".
4. **Motion is subtle and functional.** Fade-in on scroll is fine. Parallax spinners are not.
5. **Every section has one job.** No mixed messaging inside a section.

## Color tokens (starting palette)

```
--bg-0: #08090a         /* page bg */
--bg-1: #101113         /* card bg */
--bg-2: #1a1c1f         /* elevated */
--border: #232529
--text-hi: #f7f8f8      /* headings */
--text-mid: #b4b8bf     /* body */
--text-lo: #7d8189      /* meta */
--accent: #7170ff       /* Linear-ish indigo — pick one and commit */
--accent-glow: rgba(113, 112, 255, 0.15)
```

Light theme is optional; if you ship it, keep the same relationships (hi/mid/lo, one accent).

## Typography

- **Sans:** Inter (or system-ui as fallback). Weights 400 / 500 / 600 / 700 only.
- **Mono:** JetBrains Mono. **All numbers, prices, code, and metrics render in mono** (matches Anh's global rule).
- **H1:** 56–72 px, weight 600, tracking -0.02em, line-height 1.05.
- **H2:** 36–44 px, weight 600, tracking -0.015em.
- **Body:** 16–17 px, weight 400, line-height 1.6.
- **Eyebrow (section label):** 12 px, uppercase, weight 500, tracking 0.08em, text-lo color.

## Layout rules

- **Max content width:** 1200 px. Hero headline goes narrower, ~880 px.
- **Section vertical rhythm:** 96–128 px top/bottom padding on desktop, 64 px on mobile.
- **Grid:** 12-col, 24 px gutters. Feature cards typically 2×2 or 1×3.
- **Left-align public copy.** Never text-center hero, offers, FAQ, or CTA (Anh's LP-left-align rule). Centering is reserved for utility copy (footer legal, one-line ctas).

## Section rhythm (Linear-like page cadence)

```
1. Nav (sticky, translucent bg)
2. Hero — H1 + subhead + dual CTA + product-shot below the fold-line
3. Trusted-by row (logos, monochrome, low contrast)
4. Big feature #1 — split layout (copy left, mock UI right)
5. Big feature #2 — split layout (mock UI left, copy right) — alternate sides
6. Three-up feature grid — supporting features
7. Metrics/social-proof band — 3–4 stat cards, big mono numbers
8. Testimonial (one, with real face/logo)
9. FAQ — accordion, 6–10 items
10. Final CTA band — big, one message, dual CTA
11. Footer — thin, dense, legal + sitemap
```

Not every page needs all 11. Home does. Product page can skip 2, 3, 7. Pricing swaps 4–6 for the price grid.

## Product-shot rhythm

- **Every big feature block has a mock UI.** Not a screenshot from Figma export — build the mock in inline HTML/CSS/SVG so it's crisp at any zoom (see `mock-ui-inline` skill).
- Mocks sit inside a **"window"**: rounded card, 1px border, faint inner shadow, three small dots top-left (optional).
- Mocks bleed slightly out of the container on desktop (mask on the outer edge with a gradient fade) to suggest "there's more".

## Motion

- Fade-in + 8px translateY on scroll intersection. 400–600 ms, ease-out.
- Nav bg opacity + blur increases on scroll (0 → 80%).
- Hover states: 120 ms transitions, subtle brightness lift on cards.
- **No** hero video loops, no cursor followers, no scroll-jacking, no parallax.

## Navigation

- Left: wordmark.
- Center: 3–5 nav items (Produkt, Preise, Kunden, Blog).
- Right: secondary CTA (Anmelden or Anrufen) + primary CTA button.
- Mobile: hamburger → full-screen overlay, not a dropdown.

## Component primitives to build once

- `Button` — primary / secondary / ghost, sizes sm/md/lg.
- `Card` — the "window" wrapper for mocks and feature blocks.
- `Eyebrow` — uppercase small caps for section labels.
- `Stat` — big mono number + label underneath.
- `FAQItem` — accordion row, chevron animates.
- `NavBar`, `Footer` — shared shell.

## Common mistakes

- Gradients everywhere. Linear uses accent-glow *once* in the hero, not on every card.
- Too many accent colors. Pick ONE and use it.
- Icons for everything. Linear uses few icons; when they do, they're monoline, 1.5px stroke, currentColor.
- Emoji as icons. Never.
- Border-radius chaos. Pick 8 / 12 / 16 and stick to them.
