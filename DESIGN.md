# MOODI Landing — Design System

## Color Tokens (`assets/css/main.css`)

### Neutrals
| Token | Value |
|---|---|
| `--white` | `#FFFFFF` |
| `--black` | `#000000` |
| `--grey-0` | `#EAEAEE` |
| `--grey-10` | `#DDDDE2` |
| `--grey-100` | `#D5D5DA` |
| `--grey-200` | `#B8B9C4` |
| `--grey` | `#9697A5` |
| `--grey-300` | `#7F808B` |
| `--grey-400` | `#646672` |
| `--grey-500` | `#4D4F58` |
| `--grey-600` | `#393A40` |
| `--grey-700` | `#1E1F24` — dark section bg |
| `--grey-800` | `#09090C` — deepest bg, body default |

### Purple (Brand)
| Token | Value | Usage |
|---|---|---|
| `--purple-10` | `#EFEDFF` | tinted section bg, tag bg |
| `--purple-100` | `#CEC6FF` | |
| `--purple-200` | `#9A8CF8` | text on dark, eyebrow on dark |
| `--purple-300` | `#735EED` | |
| `--purple` | `#5C43E8` | primary brand, CTA, eyebrow on light |
| `--purple-400` | `#572DEF` | btn hover |
| `--purple-500` | `#4D23E4` | hero CTA |
| `--purple-600` | `#411CC7` | |
| `--purple-700` | `#3819A9` | orb gradient |
| `--purple-800` | `#23106C` | |
| `--purple-900` | `#17094D` | |

---

## Typography

**Font:** `'Pretendard Variable'` (loaded via CDN)

```css
--font: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

### Scale
| Role | Size | Weight | Notes |
|---|---|---|---|
| Hero title | `clamp(40px, 6vw, 72px)` | 800 | `letter-spacing: -0.03em`, `line-height: 1.08` |
| Section title | `clamp(28px, 4.5vw, 48px)` | 700 | `letter-spacing: -0.02em`, `line-height: 1.15` |
| Section sub | `clamp(16px, 2vw, 18px)` | 400 | `line-height: 1.65`, color: `--grey-400` |
| Hero subtitle | `clamp(15px, 2vw, 18px)` | 400 | `line-height: 1.65` |
| Body | `16px` | 400 | `line-height: 1.5` |
| Eyebrow | `12px` | 700 | `letter-spacing: 0.12em`, uppercase |
| Button | `15px` | 600/700 | |
| Logo | `20px` | 800 | `letter-spacing: -0.03em` |

---

## Spacing & Layout

```css
--radius: 16px       /* card */
--radius-sm: 10px    /* button */
--radius-full: 100px /* pill/tag */
--max-w: 1160px      /* container max-width */
--section-py: 96px   /* section vertical padding (64px on mobile) */
```

**Container:** `max-width: var(--max-w)`, `padding: 0 24px` (mobile: `0 20px`)

---

## Section Variants

```html
<section class="section">           <!-- white bg -->
<section class="section section--dark">    <!-- grey-700 bg, white text -->
<section class="section section--deeper">  <!-- grey-800 bg, white text -->
<section class="section section--tinted">  <!-- purple-10 bg -->
<section class="section section--soft">   <!-- #F8F8FA bg -->
```

**Section anatomy:**
```html
<div class="section-head">          <!-- mb: 56px (40px mobile) -->
  <span class="section-eyebrow">…</span>   <!-- purple, uppercase, 12px -->
  <h2 class="section-title">…</h2>
  <p class="section-sub">…</p>
</div>
```

---

## Components

### Buttons
```html
<!-- Primary -->
<button class="btn btn-primary">…</button>
<!-- bg: --purple, hover: --purple-400 + translateY(-1px) + shadow -->

<!-- Outline (light bg) -->
<button class="btn btn-outline">…</button>
<!-- transparent, border: --grey-10, hover: border/text --purple -->

<!-- Outline (dark bg) -->
<button class="btn btn-outline-light">…</button>
<!-- transparent, border: rgba(255,255,255,0.25), hover: rgba(255,255,255,0.6) -->
```

Base: `padding: 14px 26px`, `border-radius: var(--radius-sm)`, `font-size: 15px`, `font-weight: 600`, `transition: all 0.2s ease`

### Tags / Badges
```html
<span class="tag">…</span>           <!-- purple-10 bg, purple text -->
<span class="tag tag--dark">…</span>  <!-- rgba purple bg, purple-200 text (on dark) -->
```
Base: `padding: 5px 12px`, `border-radius: var(--radius-full)`, `font-size: 12px`, `font-weight: 600`

### Cards
```html
<div class="card">…</div>           <!-- white bg, grey-0 border, radius 16px, p32 -->
<div class="card card--dark">…</div> <!-- rgba white bg, rgba white border (on dark sections) -->
```

---

## Dark Section Overrides

On `.section--dark` and `.section--deeper`:
- `.section-eyebrow` → `color: var(--purple-200)`
- `.section-sub` → `color: var(--grey-200)`
- Use `.tag--dark`, `.btn-outline-light`, `.card--dark`

---

## Glass / Frosted Patterns

Used in header and floating cards:
```css
background: rgba(9, 9, 12, 0.75);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border: 1px solid rgba(255,255,255,0.04);
```

Floating cards:
```css
background: rgba(20, 20, 28, 0.9);
backdrop-filter: blur(16px);
border: 1px solid rgba(255,255,255,0.1);
border-radius: 14px;
box-shadow: 0 8px 32px rgba(0,0,0,0.4);
```

---

## Decorative / Background Patterns

**Orbs** (radial gradient blobs, `filter: blur(80px)`, opacity 0.5):
- Primary: `radial-gradient(circle, #5C43E8 0%, transparent 70%)`
- Secondary: `radial-gradient(circle, #3819A9 0%, transparent 70%)`
- Accent: `radial-gradient(circle, #735EED 0%, transparent 70%)`, opacity 0.25

**Grid overlay:**
```css
background-image:
  linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
background-size: 48px 48px;
mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
```

**Float animation:**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}
```

---

## Responsive Breakpoints

| Breakpoint | Context |
|---|---|
| `max-width: 900px` | Hero: stack column, center-align |
| `max-width: 768px` | Mobile nav (hamburger), section-py 64px |
| `max-width: 480px` | Hero visual hidden, extra compact |

---

## Do / Don't

- **Do** use CSS custom properties — never hard-code color hex values that already exist as tokens
- **Do** use `clamp()` for fluid type sizing (follow existing scale)
- **Do** add section variant class when introducing new background colors
- **Don't** introduce new font weights outside 400/500/600/700/800
- **Don't** create new border-radius values — use `--radius`, `--radius-sm`, or `--radius-full`
- **Don't** add new breakpoints — use the three existing ones
