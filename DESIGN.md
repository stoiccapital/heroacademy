---
name: hero-academy-design
description: Design system for Hero Academy LPs and future surfaces — a dark, warrior/dojo aesthetic with serif display type, ember accent, kanji glyphs, and a four-pillar rhythm. Use for any Hero Academy marketing surface, pillar page, parent-facing material, or recruiting page.
---

# Hero Academy Design

A design language for a modern dojo. Dark, honorable, intentional. Reads like a letter, not like a landing page.

## What "Hero Academy–style" actually means

1. **Dark, warm, almost candle-lit.** The background is near-black but never cold. Every glow is amber, never blue.
2. **Serif does the heavy lifting.** Cormorant Garamond (display) carries headlines, long-form prose, and the letter voice. Sans is support, not the star.
3. **Kanji as iconography, not decoration.** One glyph per pillar, used sparingly. Never emoji. Never stock icons.
4. **Four is the rhythm.** Four pillars, four roles, four stats. If a section grows past four items, split it or cut.
5. **Honor the voice.** Copy is first-person, direct, written like a letter from Khoa — not corporate marketing. Design must give that voice room.
6. **Calm over hype.** No countdown timers, no "limited spots", no neon gradients. The academy is a long-horizon institution, not a cohort launch.

## Color tokens

```
/* Ink — the dark foundation */
--ink:          #0a0a0a   /* page bg */
--ink-surface:  #111111   /* subtle elevation (section bands) */
--ink-raised:   #171717   /* cards, pills */
--ink-border:   #262626   /* hairlines */
--ink-muted:    #737373   /* captions, meta */
--ink-soft:     #a3a3a3   /* secondary body */
--ink-text:     #e5e5e5   /* body */
--ink-bright:   #fafafa   /* headlines */

/* Ember — the single accent (candle, forge, dojo lantern) */
--ember:        #d97706   /* primary accent, buttons */
--ember-bright: #f59e0b   /* hover / emphasis */
--ember-soft:   #fcd34d   /* rare highlights */
--ember-dark:   #92400e   /* deep edges, borders at low opacity */
```

**Rule of one accent.** Ember is the only accent color. No blues, no greens, no second brand color. Scarcity is what gives it weight.

**Opacity, not hue, for depth.** Ember-at-opacity (`ember/5`, `ember/40`, `ember/60`) replaces secondary colors. A `border-ember/40` card feels different from a `border-ember/60` button without introducing a new token.

## Typography

Three faces, strict roles.

```
--font-display:  Cormorant Garamond   /* headlines, letter prose, pillar names, italic emphasis */
--font-sans:     Inter                 /* UI, body copy, nav, buttons */
--font-mono:     JetBrains Mono        /* all numbers, labels, metadata, kanji captions */
```

- **Display serif** carries emotional weight — hero headlines, pillar names, Khoa's letter. Use italic for emphasis inside display text (`<span class="italic text-ember">`), never bold.
- **Sans** is the workhorse for buttons, nav, descriptive paragraphs, role cards. Keep weight ≤ 500 — the dark background does the "weight" for you.
- **Mono** is required for every number (per the house rule: European format, right-aligned in tables), plus pillar indices (`01`, `02`), uppercase tracked labels, and timestamps.

### Scale

| Role            | Size            | Face     | Weight |
|-----------------|-----------------|----------|-------:|
| Hero display    | `text-7xl`–`8xl`| Display  |    400 |
| Section heading | `text-4xl`–`5xl`| Display  |    400 |
| Pillar name     | `text-3xl`      | Display  |    400 |
| Lead paragraph  | `text-lg`–`xl`  | Display  |    400 |
| Body            | `text-base`–`lg`| Sans     |    400 |
| Eyebrow label   | `text-xs`       | Sans     |    500 |
| Numeric         | `text-xl`–`2xl` | Mono     |    400 |

Eyebrow labels are always `uppercase tracking-widest-plus text-ember/90`, preceded by an 8px ember rule.

## Iconography — kanji system

One kanji per pillar. All in Cormorant Garamond at display size, inside a rounded-square tile with ember border and faint ember wash.

| Pillar  | Kanji | Reading   | Meaning                     |
|---------|:-----:|-----------|-----------------------------|
| Mind    |   智   | *chi*     | wisdom                      |
| Body    |   力   | *chikara* | strength                    |
| Spirit  |   義   | *gi*      | righteousness               |
| Ikigai  |   生   | *sei*     | life / purpose              |
| Brand   |   勇   | *yuu*     | courage (nav + footer mark) |

Tile pattern: `h-14 w-14 rounded-xl border border-ember/50 bg-ember/5 grid place-items-center font-display text-3xl text-ember`.

Never use these glyphs decoratively (e.g. as background watermarks). One per element, aligned with its meaning. Never substitute emoji, lucide icons, or SVG glyphs — the kanji ARE the icon system.

## Section rhythm

Every section follows the same armature:

```
<section id="…" class="relative py-24 md:py-32 border-t border-ink-border">
  <div class="mx-auto max-w-5xl px-6">
    <EyebrowLabel />       {/* ember rule + uppercase label */}
    <h2 class="mt-6 font-display text-4xl md:text-5xl text-ink-bright">…</h2>
    <p  class="mt-5 text-ink-soft text-lg max-w-2xl">…</p>
    <div class="mt-16">   {/* the actual section payload */} </div>
  </div>
</section>
```

- **One `border-t border-ink-border` between every section.** This hairline is the structural rhythm — do not replace with a card, gradient, or wave.
- **`max-w-5xl` for prose, `max-w-6xl` for grids.** Narrower than typical SaaS LPs. The academy voice is personal; the page should feel like a letter, not a dashboard.
- **Alternating surfaces.** Base `bg-ink`; alternate sections use `bg-ink-surface/40` for subtle banding. No full-contrast panels.

## Motion

- Fade-in on scroll (opacity + 8–12 px translate) is permitted and encouraged on hero, pillar grid, and join cards.
- **No** parallax, no auto-playing video, no marquee tickers, no mouse-follow glow.
- Hover: color shift from `ink-text` → `ember`, or border `ink-border` → `ember/60`. No scale, no shadow pop.
- Button hover: `bg-ember` → `bg-ember-bright`. That is the full interaction vocabulary.

## Texture — the two allowed effects

Only two visual effects are permitted on top of the flat palette. Everything else is pure color.

1. **Grain.** A fractal-noise SVG at `opacity 0.04`, `mix-blend-mode: overlay`, applied via the `.grain` class on hero and join sections only. Gives the page a candlelit, printed-letter feel.
2. **Radial ember glow.** A single `radial-gradient` from the ember hue at low alpha (`rgba(217, 119, 6, 0.14)`), used behind the hero headline and the join CTA. Max two per page.

No noise overlays on cards. No gradients inside pillar tiles. No glass or blur except on the fixed nav.

## Component patterns

### Eyebrow label

```tsx
<div className="flex items-center gap-3 text-xs uppercase tracking-widest-plus text-ember/90">
  <span className="h-px w-8 bg-ember/60" />
  <span>The four pillars</span>
</div>
```

Appears above every section heading. Short — three words max.

### Pillar card

```tsx
<article className="bg-ink p-10 flex flex-col gap-6 hover:bg-ink-raised transition">
  <div className="flex items-center gap-4">
    <KanjiTile glyph="智" />
    <div>
      <div className="font-mono text-xs text-ink-muted">01</div>
      <h3 className="font-display text-3xl text-ink-bright">Mind</h3>
    </div>
  </div>
  <p className="font-display text-xl text-ember italic">{tagline}</p>
  <p className="text-ink-soft">{body}</p>
  <ul className="mt-auto pt-4 flex flex-wrap gap-2 border-t border-ink-border">
    {disciplines.map(d => <Chip key={d}>{d}</Chip>)}
  </ul>
</article>
```

Four pillar cards live in a `grid-cols-1 md:grid-cols-2 gap-px bg-ink-border` so the gutters read as hairlines, not padding.

### Chip (discipline tag)

```tsx
<li className="text-xs font-mono text-ink-text px-3 py-1 rounded-full border border-ink-border bg-ink-raised/60">
  {label}
</li>
```

Mono-cased, border-only, no fill. Used for disciplines, metadata, locations.

### Primary CTA

```tsx
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ember text-ink font-medium hover:bg-ember-bright transition">
  Build it with us <span aria-hidden>→</span>
</a>
```

Always paired with a secondary ghost button (`border border-ink-border text-ink-text hover:border-ember/60 hover:text-ember`). Never stack three CTAs — this is a letter, not a pricing page.

### Numeric stat

```tsx
<div className="border-l border-ink-border pl-4">
  <div className="font-mono text-2xl text-ember">4</div>
  <div className="mt-1 text-ink-muted">pillars</div>
</div>
```

Left hairline, mono number in ember, muted label below. Group in rows of four.

## Voice & copy rules

Design cannot save bad copy — these rules protect both.

- **First person, singular.** It is Khoa writing. "I am moving to Saigon." Not "we are launching."
- **Address the reader as Brother or Sister** in the vision/letter sections. Elsewhere use direct "you."
- **European numeric format** per the house rule: `8 children`, `1 city`, `16 000 hours`. Never `8children` or `16,000`.
- **No marketing adjectives.** No "world-class," "cutting-edge," "revolutionary." If the thing is strong, name what it is, not how it feels.
- **Short italic emphasis** inside display headlines, color `ember`. One italic clause per headline max.
- **Four is sacred.** Four pillars, four roles, four stats. Don't pad to five "for completeness."

## Imagery

- No stock photos. Ever.
- No children's faces. The academy is being formed; photos of imagined students would be dishonest.
- Portrait of Khoa, when added, should be duotone ink + ember, not full color. Treat like a woodcut.
- Until a real portrait exists, use the kanji 勇 (courage) inside the portrait tile as a placeholder.

## Accessibility

- `::selection` is ember on ink — verified AA contrast.
- All ember-on-ink text uses `ember` (`#d97706`) at 100 % opacity, which passes AA at `text-base` and above. For `text-xs` labels, use `ember/90` on `ink` only — not on `ink-raised`.
- Hairlines (`border-ink-border`) are decorative, not informational; never rely on them to separate interactive controls.
- Focus state: `focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink` on all interactive elements.

## What this design is NOT

- Not Linear.app indigo-on-black SaaS. The accent is warm, the type is serif, the voice is personal.
- Not a cohort launch page. No "spots left," no "join 2 847 others."
- Not a dojo pastiche. No bamboo textures, no rising-sun flags, no katana silhouettes. The kanji are earned; everything else would be costume.
- Not a parenting blog. No soft pastels, no "nurturing" photography. This is a warrior academy.
- Not a church. Spiritual vocabulary ("righteousness," "honor") lives in the Spirit pillar; the rest of the page is secular and operational.
