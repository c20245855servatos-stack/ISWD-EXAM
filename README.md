# KWKC Hardware

**Live site:** https://c20245855servatos-stack.github.io/ISWD-EXAM/

## About

KWKC Hardware is a single-page site for a fictional neighborhood hardware store 
tools, supplies, and free repair advice. 

The visual direction is **glassmorphism**: frosted translucent surfaces floating
over soft color gradients, so the page feels airy and modern while staying fast
and readable.

## Design System

### Palette (60-30-10)

| Role | Share | Color | Used for |
|---|---|---|---|
| Dominant (light) | 60% | `#f8f5f0` warm off-white | Page background, ambient glow |
| Dominant (dark)  | 60% | `#16181d` charcoal | Dark-mode page background |
| Secondary | 30% | `#3d4451` slate steel | Body text, borders, secondary gradient blob |
| Accent | 10% | `#ea6a1f` safety orange | CTA buttons, links, highlights, progress bar, ambient glow |

All three colors are defined once as `@theme` tokens in `index.html` and reused
across navigation, hero, cards, form fields, footer, progress bar, and the
ambient gradient blobs behind the glass panels.

### Visual style

**Style chosen:** **Glassmorphism**

**Why I chose it:** It gives KWKC a modern, trustworthy feel — the frosted cards
let product photos and ambient color bleed through, so the store feels approachable
rather than industrial. The style is applied consistently via four reusable
component classes (`.glass-card`, `.glass-panel`, `.field`, `.btn-primary`) that
all use translucent backgrounds plus `backdrop-blur`.

### Contrast check

- **Light mode:** body text `#3d4451` on `#f8f5f0` → **8.0 : 1** ✅
- **Dark mode:** body text `#f8f5f0` on `#16181d` → **14.1 : 1** ✅
- **Accent button label:** `#f8f5f0` on `#ea6a1f` → **4.7 : 1** ✅

Glass surfaces sit on top of the dominant background, so the measured ratios
hold even when the transparent cards reveal the ambient gradient beneath them.

Tool used: WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)

## Scroll effects

Every effect below uses **`scrub: true`** with **`ease: "none"`** — motion is
tied exactly to scroll position, not time.

| Effect | Trigger | Behavior |
|---|---|---|
| **Hero headline** | hero top → bottom | Drifts up `-20%` |
| **Hero paragraph** | hero top → bottom | Drifts up `-30%` |
| **Hero CTA row** | hero top → bottom | Drifts up `-25%` and scales `1 → 1.02` |
| **Hero image** | hero top → bottom | Drifts up `-22%` and scales `1 → 1.06` |
| **Section headings** | heading enters viewport | Slide up `40 → 0`, fade `0.4 → 1` |
| **Services cards** | each card enters | Scale `0.9 → 1`, fade `0.2 → 1`, lift `40 → 0` |
| **Featured cards** | each card enters | Rotate `±3° → 0`, fade `0.2 → 1`, lift `50 → 0` |
| **Contact panel** | panel enters | Scale `0.92 → 1`, fade `0.2 → 1` |
| **Ambient blobs** | full page | Drift `yPercent` in alternating directions |
| **Progress bar** | full page | Grows `scaleX 0 → 1` |
| **Footer** | footer enters | Fade `0.2 → 1`, lift `30 → 0` |

All effects are wrapped in `gsap.matchMedia()`. Under **`prefers-reduced-motion: reduce`**
the page is fully visible and usable — no motion, no hidden elements.

## Features

- [x] Mobile-first responsive layout (phone, tablet, desktop tested)
- [x] Dark mode toggle with inline SVG sun/moon icons (persisted with `localStorage`)
- [x] Glassmorphism styling — frosted cards, translucent header, blurred form fields
- [x] Ambient gradient blobs behind glass surfaces for depth
- [x] Page-load intro animation (GSAP timeline, ~2.4s, with stagger + overlap)
- [x] Replay intro button (`timeline.restart()`)
- [x] Layered hero parallax (headline, paragraph, CTA, image — all different speeds)
- [x] Scrubbed card reveals (scale for services, rotate for featured)
- [x] Scrubbed section headings, contact panel, and footer
- [x] Scroll progress bar
- [x] Reduced-motion support via `gsap.matchMedia()`

## File structure

| File | Description |
| :--- | :--- |
| `index.html` | The main HTML structure. Contains the Tailwind CSS setup, custom design tokens, glassmorphism component classes, and all page content. |
| `script.js` | All JavaScript logic. Handles the dark mode toggle, GSAP page-load intro, and all scrubbed ScrollTrigger animations. |
| `README.md` | Project documentation (this file). |

## Built With

- HTML5
- Tailwind CSS v4 (browser CDN)
- JavaScript
- GSAP 3.13 + ScrollTrigger 3.13

No other libraries or frameworks are used.
