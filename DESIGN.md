# DESIGN.md — Sen's Homestay Website DNA

The single source of truth for how the site looks and behaves. Every new page must follow this.
Theme name: **Light Highland** (airy warm-cream with earth accents). Register: **brand** (marketing/landing).

> Quick rule: copy the `:root` token block + the base + nav + footer below into any new page, then build
> with the documented components. Never reintroduce the old green/orange theme or Playfair/DM Sans/Cormorant fonts.

---

## 1. Brand & Voice

- **Personality:** trustworthy, warm, real. The voice of a local highland host, not a hotel chain.
- **Emotional goal:** arriving at a friend's home in the mountains — safe, looked-after, quietly excited for the road.
- **Honesty is the feature:** real prices, real trade-offs, real photos. Never over-promise.
- **One host, one thread:** every path leads to a WhatsApp message to Sen. No multi-step booking funnels.
- **Mobile is the real product:** visitors are on a phone, often on patchy data. (See [PRODUCT.md](PRODUCT.md).)

**Anti-references (never look like these):** Booking.com/Agoda generic OTA UI · glossy 5-star resort sites ·
"AI landing page" defaults (cream-default bg + tiny uppercase eyebrows on every section + paper-grain noise +
reflex fonts) · cold minimalism.

---

## 2. Color Tokens (OKLCH-equivalent hex, light theme)

Paste this `:root` verbatim into every new page. Legacy aliases are included so older markup keeps resolving.

```css
:root {
  /* core surfaces */
  --paper:       #FBF7EF;   /* body — warm off-white, very light */
  --paper-2:     #F3EBDA;   /* subtle alt-section tint */
  --surface:     #FFFFFF;   /* card */
  /* text */
  --ink:         #2A2118;   /* primary text — 14.8:1 on paper */
  --ink-soft:    #6B5D4C;   /* muted body — 5.96:1 on paper */
  /* terracotta (primary accent / CTA) */
  --terra:       #B65A36;   /* decorative / on-image */
  --terra-deep:  #9A4A2E;   /* TEXT + CTA (AA on light) */
  --terra-soft:  #C97048;   /* hover lighter */
  /* forest (secondary accent + dark anchor sections) */
  --forest:      #3C5A40;
  --forest-deep: #2C4530;
  /* misc */
  --amber:       #C8841F;   /* stars / small marks only */
  --on-dark:     #F6EFE2;   /* text on forest/photo surfaces */
  --on-dark-soft:#D8CDB8;
  --line:        rgba(42,33,24,0.10);
  --line-strong: rgba(42,33,24,0.18);

  --r-sm: 10px; --r: 16px; --r-pill: 999px;
  --shadow:    0 4px 14px rgba(42,33,24,0.07), 0 14px 34px rgba(42,33,24,0.09);
  --shadow-lg: 0 8px 22px rgba(42,33,24,0.10), 0 26px 54px rgba(42,33,24,0.14);
  --ease: cubic-bezier(0.16, 1, 0.3, 1);   /* ease-out-expo — natural deceleration */
  --z-base: 1; --z-raised: 10; --z-sticky: 100; --z-float: 200; --z-nav: 300; --z-overlay: 400;
  --maxw: 1140px;

  /* legacy aliases (keep older pages resolving — do NOT use in new code) */
  --green-dark:var(--forest); --green-mid:var(--terra-soft); --green-light:var(--paper-2);
  --orange:var(--terra-deep); --orange-dark:var(--terra); --cream:var(--paper);
  --brown:var(--ink); --white:#FFFFFF; --text:var(--ink); --text-muted:var(--ink-soft);
  --radius:16px;
  --gd:var(--forest); --gm:var(--terra-soft); --gl:var(--paper-2); --or:var(--terra-deep);
  --cr:var(--paper); --tx:var(--ink); --tm:var(--ink-soft); --sh:var(--shadow); --r:16px;
}
```

### Color roles (when to use what)
| Role | Token | Notes |
|---|---|---|
| Page background | `--paper` | the dominant light surface |
| Alt section tint | `--paper-2` | gentle warm break between white sections |
| Dark "anchor" section | `--forest` (deep `--forest-deep`) | trust bar, highlight, contact, footer; text goes light |
| Card | `--surface` (white) + 1px `--line` | never a heavy border + big shadow together |
| Primary text | `--ink` | body, headings |
| Muted text | `--ink-soft` | secondary copy, captions |
| Primary CTA / accent | `--terra-deep` | buttons, prices, active states, links |
| On-image accent / hover | `--terra` / `--terra-soft` | |
| Secondary accent | `--forest` | quiet labels, dark CTAs |
| Stars / tiny marks only | `--amber` | NOT body text on light (fails contrast) |

### Contrast rules (WCAG AA, non-negotiable)
- Body text ≥ 4.5:1; large/bold text ≥ 3:1. (`--ink` 14.8:1, `--ink-soft` 5.96:1, `--terra-deep` 5.79:1 on paper.)
- **Never gray text on a colored background.** Use a shade of that color or `--on-dark`.
- **Never `--amber` as text on light** (only 2.9:1). Amber is for star glyphs and small decorative marks.
- Text over a photo: use the scrim recipe (§7) + white text + `text-shadow`/`-webkit-text-stroke`. Never dark text on a photo.

---

## 3. Typography

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
body { font-family: 'Hanken Grotesk', system-ui, sans-serif; line-height: 1.6; }
h1,h2,h3,h4 { font-family: 'Bricolage Grotesque', 'Hanken Grotesk', sans-serif;
              font-weight: 700; letter-spacing: -0.02em; text-wrap: balance; }
p { text-wrap: pretty; }
```

- **Display / headings:** Bricolage Grotesque (characterful grotesque). Weights 500–800.
- **Body / UI:** Hanken Grotesk (clean humanist sans). Weights 400–700.
- Headline letter-spacing floor **≥ -0.04em** (we use -0.02 to -0.03em). Never tighter.
- Hero `h1` scale: `clamp(2.9rem, 8vw, 5.6rem)`. Section `h2` (`.lead h2`): `clamp(2.1rem, 4.4vw, 3.2rem)`.
- Italic via `<em>` inside a heading = accent in `--terra-deep` (on light) or `#F2C28E` (on dark/photo).
- Body ≥ 16px on mobile. Cap measure at 60–75ch (`max-width: 60ch` on long paragraphs).
- **Banned fonts (reflex/AI tells):** Playfair Display, Cormorant, DM Sans, Inter, Fraunces, Lora, Space Grotesk.

---

## 4. Base + Nav + Footer (copy into every page)

### Base
```css
*,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
html { scroll-behavior:smooth; -webkit-text-size-adjust:100%; }
body { background:var(--paper); color:var(--ink); overflow-x:hidden; -webkit-font-smoothing:antialiased; }
a,button,.btn,.link-btn,.pill { touch-action:manipulation; -webkit-tap-highlight-color:rgba(182,90,54,0.18); }
img { display:block; width:100%; object-fit:cover; }
a { text-decoration:none; color:inherit; }
a:focus-visible, button:focus-visible { outline:3px solid var(--forest); outline-offset:3px; border-radius:6px; }
```

### Nav (fixed, 72px, light, leaf logo, SVG WhatsApp)
- Height **72px**, `padding: 0 34px`, bg `rgba(251,247,239,0.9)` + `backdrop-filter:blur(14px)`, 1px `--line` border.
- `nav.scrolled` adds a soft shadow (toggle the class at `scrollY > 24`).
- Logo: terracotta **leaf SVG** + "Sen's Homestay" in Bricolage 800. CTA: terracotta pill with WhatsApp SVG (no emoji).
- **Mobile menu (≤900px):** drops as a **`--terra-deep` panel with WHITE links** + `rgba(255,255,255,0.16)` dividers.
  This overrides any scrolled-state dark color — links must stay white on the terracotta panel.

```css
/* desktop */
nav { position:fixed; inset:0 0 auto 0; z-index:var(--z-nav); display:flex; align-items:center;
      justify-content:space-between; height:72px; padding:0 max(34px,env(safe-area-inset-left));
      background:rgba(251,247,239,0.9); backdrop-filter:blur(14px); border-bottom:1px solid var(--line);
      transition:box-shadow 0.4s var(--ease); }
nav.scrolled { box-shadow:0 6px 22px rgba(42,33,24,0.10); }
.nav-logo { font-family:'Bricolage Grotesque',sans-serif; font-size:1.34rem; font-weight:800;
            letter-spacing:-0.02em; color:var(--ink); display:flex; align-items:center; gap:9px; }
.nav-logo .leaf { width:25px; height:25px; color:var(--terra-deep); stroke:currentColor; fill:none; stroke-width:1.7; }
.nav-links { display:flex; gap:26px; align-items:center; }
.nav-links a { font-size:0.92rem; font-weight:600; color:var(--ink-soft); transition:color 0.2s; }
.nav-links a:hover, .nav-links a.active { color:var(--terra-deep); }
.nav-cta { display:inline-flex; align-items:center; gap:7px; background:var(--terra-deep); color:#fff!important;
           padding:10px 20px; border-radius:var(--r-pill); font-weight:700; font-size:0.86rem;
           transition:background 0.2s,transform 0.2s; }
.nav-cta:hover { background:var(--terra); transform:translateY(-2px); }
.nav-cta svg { width:15px; height:15px; fill:currentColor; }
.nav-hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; padding:8px; }
.nav-hamburger span { width:24px; height:2px; background:var(--ink); border-radius:2px; }

/* mobile (≤900px) */
@media (max-width:900px) {
  nav { padding:0 20px; }
  .nav-links { display:none; flex-direction:column; align-items:stretch; position:absolute; top:100%;
    left:0; right:0; background:var(--terra-deep);
    padding:14px 18px calc(14px + env(safe-area-inset-bottom)); gap:2px; box-shadow:var(--shadow); }
  .nav-links.open { display:flex; }
  .nav-links a:not(.nav-cta), nav.scrolled .nav-links a:not(.nav-cta) {
    font-size:1rem; padding:15px 10px; color:#fff; opacity:1; border-bottom:1px solid rgba(255,255,255,0.16); }
  .nav-links a:not(.nav-cta):last-of-type { border-bottom:none; }
  .nav-links .nav-cta { justify-content:center; margin-top:12px; padding:14px 20px; font-size:0.95rem; }
  .nav-hamburger { display:flex; }
}
```

Nav links (keep this order site-wide): **Rooms · Motorbike · Tours · Food · Services · Plan Trip · Bus Tickets**,
then the WhatsApp CTA. Mark the current page's link with `class="active"`.

### Footer
```css
footer { background:var(--forest-deep); color:var(--on-dark-soft); text-align:center;
         padding:34px 24px; font-size:0.84rem; }
footer .star { color:#E8B987; } footer a { color:#E8B987; }
```

### Leaf logo SVG + WhatsApp SVG (reuse these exact icons)
```html
<!-- leaf -->
<svg class="leaf" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 20s-7-3-7-9a4 4 0 017-2.6A4 4 0 0118 11c0 6-7 9-7 9z"/><path d="M11 11v9" stroke-width="1.5"/></svg>
<!-- whatsapp (use the full glyph path from any existing page; fill:currentColor) -->
```

---

## 5. Buttons & Links

```css
.btn { display:inline-flex; align-items:center; justify-content:center; gap:9px; padding:15px 28px;
       border-radius:var(--r-pill); font-family:'Hanken Grotesk',sans-serif; font-weight:700;
       font-size:0.98rem; cursor:pointer; border:none; letter-spacing:0.01em;
       transition:transform 0.4s var(--ease), background 0.25s var(--ease), color 0.25s; }
.btn .icon { width:18px; height:18px; }
.btn-amber { background:var(--terra-deep); color:#fff; }              /* PRIMARY cta (terracotta) */
.btn-amber:hover { background:var(--terra); transform:translateY(-3px); }
.btn-cream { background:var(--forest); color:#fff; }                  /* secondary (forest) */
.btn-line  { background:transparent; box-shadow:inset 0 0 0 1.5px var(--line-strong); color:var(--ink); }
.btn-line:hover { box-shadow:inset 0 0 0 1.5px var(--terra-deep); color:var(--terra-deep); transform:translateY(-3px); }
.btn-wa { background:#1FAE54; color:#fff; }                           /* WhatsApp green */
.link-btn { display:inline-flex; align-items:center; gap:7px; border-radius:var(--r-pill); font-weight:700;
            transition:transform 0.4s var(--ease), gap 0.25s var(--ease); }
.link-btn:hover { transform:translateY(-2px); gap:11px; }            /* arrow nudges out on hover */
```
- **One primary CTA per screen** (terracotta `.btn-amber`); secondary actions use `.btn-line` or `.btn-cream`.
- All real CTAs are WhatsApp deep-links: `https://wa.me/84822946888?text=...`.
- Mobile: primary CTAs go full-width, `min-height: 44–50px`.

---

## 6. Core Components

**Pill / chip**
```css
.pill { display:inline-flex; align-items:center; gap:6px; background:rgba(182,90,54,0.10);
        color:var(--terra-deep); font-size:0.78rem; font-weight:600; padding:7px 13px; border-radius:var(--r-pill); }
.pill .icon { width:14px; height:14px; color:var(--terra-deep); }
```

**Section shell + lead (no eyebrow scaffolding)**
```css
.section-pad { padding:96px 0; }            /* 64px on mobile */
.bg-terra { background:var(--paper); }       /* main light surface */
.bg-deep  { background:var(--paper-2); }     /* subtle warm tint */
.bg-char  { background:var(--forest); }      /* dark anchor; headings -> #fff, body -> var(--on-dark) */
.lead { max-width:680px; margin-bottom:52px; }       /* .lead.center to center it */
.lead h2 { font-size:clamp(2.1rem,4.4vw,3.2rem); margin-bottom:14px; }
.lead p  { color:var(--ink-soft); font-size:1.05rem; max-width:60ch; }
```
> Section heads = **one bold lead line + a supporting sentence**. Do NOT put a tiny uppercase tracked
> "eyebrow" above every section (that's the AI tell). One named kicker as a deliberate system is fine.

**Card patterns** (pick by content, don't default to one):
1. **Photo-led card** (`.svc-card` style) — image fills top with a chip floating on it, content below on white.
   Image uses `aspect-ratio: 4/3`. Best for galleries of rooms/services.
2. **Compact horizontal card** — small image left (`flex: 0 0 132px`), text right, description clamped to 2 lines
   (`-webkit-line-clamp:2`). Use to **reduce scroll** when listing several services; full detail lives on its own page.
3. **Feature banner** (`.feature-link`) — full-bleed photo + scrim + overlaid text + CTA pill. Use the strong scrim (§7).

- Card radius tops out at **16px** (`--r`). Pills/buttons are full-pill. Never 24/28/32px+ on a card.
- **Never** pair a 1px border with a ≥16px-blur shadow as decoration. Pick one.
- Nested cards (card inside card) are always wrong.

---

## 7. Imagery & Text-over-photo

- This is an **image-led brand** — ship real photos. A solid color block where a hero photo belongs is a bug.
- Room/place photos are warm & earthy (terracotta walls, wood, woven textiles); the light cream page frames them so
  they pop. Prefer **light backgrounds behind warm photos** (don't drench dark over a warm photo — it muddies).
- Alt text is voice: "Coastal fettuccine, hand-cut, served on the terrace" beats "pasta dish".

**Hero / feature scrim recipe** (legible white text on a bright photo without dimming the whole image):
```css
/* darken mainly behind the text (left), let the rest show; fade only the last ~16% into paper */
.hero-bg::after { background:
  linear-gradient(180deg, rgba(24,20,14,0.40) 0%, rgba(24,20,14,0) 50%, rgba(24,20,14,0.34) 100%),
  linear-gradient(90deg,  rgba(24,20,14,0.50) 0%, rgba(24,20,14,0.12) 50%, transparent 100%); }
.hero-bg::before { /* thin bottom band that melts into the page */
  content:''; position:absolute; left:0; right:0; bottom:0; height:16%;
  background:linear-gradient(180deg, rgba(251,247,239,0) 0%, rgba(251,247,239,0.65) 62%, var(--paper) 100%); }
```
**Hero/over-photo text** is always white with stroke + shadow (gives contrast without dimming the photo):
```css
#hero h1 { color:#fff; paint-order:stroke fill; -webkit-text-stroke:1.4px rgba(16,12,6,0.55);
           text-shadow:0 1px 2px rgba(16,12,6,0.6), 0 2px 8px rgba(16,12,6,0.55), 0 6px 28px rgba(16,12,6,0.45); }
#hero h1 .accent { color:#F2C28E; -webkit-text-stroke-color:rgba(60,30,10,0.55); }
```
On-image badges = **dark solid** (`rgba(20,15,10,0.72)` + 1px white-ish border + blur), never near-transparent white.

---

## 8. Motion

```css
.reveal { opacity:0; transform:translateY(26px); transition:opacity 0.8s var(--ease), transform 0.8s var(--ease); }
.reveal.in { opacity:1; transform:translateY(0); }
@media (prefers-reduced-motion: reduce) {
  *,*::before,*::after { animation-duration:.001ms!important; transition-duration:.001ms!important; }
  .reveal { opacity:1!important; transform:none!important; }
}
```
- Easing: **ease-out-expo** `cubic-bezier(0.16,1,0.3,1)` everywhere. **No bounce, no elastic.**
- Micro-interactions 150–300ms; only animate `transform`/`opacity` (never width/height/padding/top/left).
- Reveal-on-scroll via IntersectionObserver, then `unobserve` (so it fires once, never blanks on headless/inactive tabs).
- `prefers-reduced-motion` is mandatory — every animation needs the instant/crossfade fallback above.

---

## 9. Layout & Responsive

- Container: `max-width: var(--maxw) /*1140px*/; margin:0 auto; padding:0 28px` (18–20px on mobile).
- Breakpoints: **960px** (tablet/nav collapse) and **600px** (phone tightening). Mobile-first.
- Responsive grids without breakpoints: `grid-template-columns: repeat(auto-fit, minmax(280px,1fr))`.
- Flexbox for 1D, Grid for 2D. Don't default to Grid where `flex-wrap` is simpler.
- Touch targets ≥ **44×44px** on mobile; ≥ 8px gap between tap targets.
- **No horizontal scroll, ever.** Watch inline `style="grid-template-columns:repeat(4,1fr)"` overrides — they beat
  media queries and cause overflow (this bit motorbike.html). Test the heading copy at every breakpoint for overflow.
- Respect safe areas: `env(safe-area-inset-*)` on the fixed nav, mobile menu, and floating WhatsApp button.
- `viewport-fit=cover` in the meta; use `100dvh` (not `100vh`) for full-height heroes.

---

## 10. Page scaffold (starting point for a NEW page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
  <title>[Page] · Sen's Homestay · Cao Bang</title>
  <meta name="description" content="..." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* 1. paste :root (§2)  2. base (§4)  3. nav (§4)  4. buttons (§5) + components you need */
  </style>
</head>
<body>
  <nav id="navbar"> …leaf logo + 7 links + WhatsApp CTA + hamburger… </nav>
  <!-- page hero: forest gradient OR photo-with-scrim (§7) -->
  <!-- sections: alternate .bg-terra / .bg-deep / .bg-char for rhythm; each with a .lead head -->
  <footer> © 2025 Sen's Homestay · Cao Bang, Vietnam · WhatsApp · Made with ★ in Cao Bang </footer>
  <a class="wa-float" …>floating WhatsApp</a>
  <script>
    /* nav scroll toggle, toggleNav(), IntersectionObserver reveal */
  </script>
</body>
</html>
```

---

## 11. Pre-ship checklist (run before shipping any page)

- [ ] `:root` tokens + Bricolage/Hanken fonts in place; **no** Playfair/DM Sans/Cormorant; **no** old green/orange hex.
- [ ] Nav matches §4 (leaf logo, SVG WhatsApp, 7 links in order, active link marked, mobile menu = terracotta+white).
- [ ] One primary terracotta CTA per screen; all CTAs are `wa.me/84822946888` deep-links.
- [ ] Body text ≥ 16px mobile, ≥ 4.5:1 contrast; no amber/gray text on light; no dark text over a photo.
- [ ] Photo text uses the scrim + white stroke/shadow recipe; on-image badges are dark-solid.
- [ ] No horizontal scroll at 375/393/768/1024px; touch targets ≥ 44px; safe-area insets respected.
- [ ] Section heads = bold lead + sentence (no repeated eyebrows); card radius ≤16px; no nested cards;
      no `border+big-shadow` decoration.
- [ ] Motion = ease-out-expo, transform/opacity only, IntersectionObserver+unobserve, reduced-motion fallback.
- [ ] Run the impeccable detector: `node .agents/skills/impeccable/scripts/detect.mjs <page>.html`
      (em-dash/bounce/dark-glow warnings are low-priority; fix structural ones).

---

*This DNA was extracted from the live `index.html` + the 7 synced pages (rooms, motorbike, tours, food, services,
itinerary, bus-ticket). When the design evolves, update this file first, then the pages.*
