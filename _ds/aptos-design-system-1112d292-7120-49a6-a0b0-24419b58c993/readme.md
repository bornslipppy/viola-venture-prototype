# Viola Ventures Design System

The design system for **Viola Ventures** — a tech-focused VC that partners with industry-defining founders from their spark moment, at early and defining stages, and helps accelerate velocity at critical inflection points, amplifying momentum as their companies build.

This project is the design system itself: link `styles.css` for tokens + fonts, and consume the React components from the compiled bundle (`window.AptosDesignSystem_1112d2`).

> Note on the namespace: the compiled bundle exposes components on `window.AptosDesignSystem_1112d2` — a stable internal identifier, not a public brand name. All consumer-facing naming is **Viola Ventures**.

---

## BRAND ESSENCE
Viola Ventures partners with industry-defining founders from their spark moment, at early and defining stages, and accelerates velocity at critical inflection points — amplifying momentum as their companies build.

### The core message
- **Who** — We partner with founders, first-time or repeat, building what doesn't fully exist (yet): visionaries creating new categories or reshaping existing ones, tackling real problems in complex markets that matter.
- **How** — We offer hands-on commitment, a day-in, day-out partnership geared toward separating the signal from the noise, staying focused on what matters most, and leveraging deep experience and insight on the path to scaling.
- **When** — We enter after the first spark, where tangible potential has emerged but before the signal is clear and the path is obvious. And when swift, decisive motion needs to happen.

### The 3Cs
- **Clarity** — Before scaling, we pressure-test product-market fit, sharpen ICP definition, and tighten GTM motion so the founding team knows exactly what to do next. Direct access to Fortune 500 CxOs and iconic industry leaders who challenge assumptions, a value proposition that holds up under scrutiny, the right first hires, and the operational foundation to scale without breaking.
  *How it sounds: grounded, incisive, current; straightforward without being simple, smart without being abstract.*
- **Customers** — We put founders in front of real buyers quickly, starting with design partners who shape the product, then first paying customers, a repeatable sales motion, and partnerships that turn traction into momentum.
  *How it sounds: specific, practical, solution-oriented; positive without being pie-in-the-sky, active without being rash.*
- **Capital** — Funding is just one piece of the capital puzzle. We help assemble the early syndicate, advisers, and development talent, and position founders to leverage momentum for the right investor-fits in later rounds.
  *How it sounds: forward-thinking, strategic, pragmatic.*

---

## CONTENT FUNDAMENTALS
How Viola Ventures writes.

### Voice
Viola's **voice** is the brand's consistent, coherent personality — the DNA that doesn't change. Viola's **tone** is the expression of that voice in different contexts; it adapts to the audience and the moment.

Viola's voice is:
- **Founder-first** — speaks to builders and creators and understands how they think; reduces noise, articulates scenarios, and makes the next step not just clear, but obvious.
- **Momentum-oriented** — focuses on early moves, traction, velocity, and inflection points: what matters at the pivot-points.
- **Specific** — emphasizes the operating system, mindset, and methodology.
- **Direct but approachable** — engaging, crisp, and low on fluff; the voice of a true friend, not a vendor.
- **Credible but not legacy-soaked** — acknowledges experience but connects it to practical considerations and real outcomes, never "since 19xx" storytelling.

### Tone by audience
- **Founders** — direct, energetic, clear. Second person ("you") and partnership language ("we"). Concrete outcomes, minimal adjectives; respectful urgency rather than pressure.
- **Co-investors and ecosystem peers** — more measured and precise. Emphasize judgment, access, conviction, and fit. Avoid hype, superlatives, "we're the best."
- **Future founders** — inviting, explanatory; promising but not vaguely aspirational. Slightly more context; more about demonstrating process and setting expectations.

### What we say
Words and phrases that fit:
- Spark moment; early moves; pivotal inflections
- Momentum; velocity; focused priorities
- Make it count; in step; conviction-led
- Sharpen clarity; open doors; the right next capital
- Real customers, real buyers (traction); design partners
- GTM; ICP; PMF

Lines that fit:
- "Early moves matter. Make them count."
- "Meet the right customers early."
- "In step at the moments that change your trajectory."
- "Because timing matters."
- "Less noise, more signal."

### Headline patterns
- Early moves matter
- Make the next move count
- With you at the inflection points
- From spark to velocity
- Solving the world's big issues

### Signature copy
- *Nothing creates signal faster than the right customers.*
- *Know the buyers, bottlenecks, and what it takes to win.*
- *In it. Together.*

### Writing style — filters for outward-facing content
- Speak to founders, partners, and cohorts — not to ourselves.
- Name methods and mechanisms, in a human, low-friction way.
- Be crisp, active, specific; opt for verbs over adjectives.
- Avoid clichés, hype, superlatives.
- Focus on partnering, collaboration, and support — more than "help" / assistance.
- Rewrite if the content ever sounds like just any VC.
- **No emoji.**

---

## IMAGERY
Viola Ventures imagery focuses **exclusively on authentic photography** of its leadership team, founders, partners, advisers, and portfolio community. Real people are at the center of the brand, reflecting the relationships, expertise, and human connections that drive successful ventures.

- Avoid stock photography, overly staged scenes, and generic technology imagery wherever possible.
- The visual style should feel **professional, approachable, and genuine**.
- Placeholder photography ships in `assets/images/`; replace with real portraits and community moments in production.

---

## VISUAL FOUNDATIONS
- **Palette:** warm, not neutral-grey. "Paper" whites (`#F9F9F0` white, `#EFECCA` cream) and warm near-blacks (`#0F0E0B` black → `#3D3B34` ash). Three constant accents: **mint `#D5FAD3`**, **blue `#BADBEE`**, **lime `#C7FF3D`**. Accents are used as large calm background fields (the mint hero) or small tags — never as loud buttons. Tokens ship as `surface-100…400` / `inverted-100…400` tiers that flip between light & dark themes. **Light is the default theme.**
- **Type:** A single variable serif — **Season Serif** — does almost all the work: a high-contrast face used large for editorial headlines and, in the same family, at 13–16px for running body/UI copy (both `--font-serif` and `--font-sans` point to it; weight range ~300–550, tracking −0.02em). **Akkurat Mono** carries eyebrows, buttons, nav, stats captions and code. Big serif ⟷ small mono is the core contrast.
- **Spacing:** **5px base unit** — spacing tokens are multiples of 5. Page gutter is `6.25vw`. Generous vertical rhythm (100px section padding).
- **Backgrounds:** flat colour fields — mint hero, sand/tan statement panel, black cards and footer. No gradients.
- **Corners:** panels & cards are **square** (radius 0); interactive controls are **full pills**; inputs use a small 4px radius.
- **Borders:** hairline `1px` borders at ~15% opacity carry most of the structure — the system prefers borders over shadows. Shadows appear only on floating popovers/menus.
- **Motion:** snappy and linear-ish (`0.15s` default, `cubic-bezier(.4,0,.2,1)`); a slower `cubic-bezier(.76,0,.24,1)` for text-reveal and marquee. No bounce. Signature interaction: a **left-to-right "sweep" fill** on buttons and circular icon buttons.
- **Hover / press:** links fade to ~70% opacity; filled controls run the sweep and invert their text colour; the round arrow buttons fill and flip the glyph to the surface colour.
- **Layout:** floating pill nav fixed near the top-centre; wide max container with the 6.25vw gutter; section headers use a headline + right-aligned eyebrow over a hairline rule.

## ICONOGRAPHY
- **System:** Google **Material Symbols** (rounded, `currentColor`, 24×24 line glyphs), shipped as an SVG sprite (`assets/icons/sprite.svg`) and embedded in the `Icon` component so the set travels with the bundle.
- **Usage:** icons are small and functional — arrows dominate. The circular arrow button is the brand's signature affordance. Utility glyphs: `search`, `menu`, `close`, `check`, `add-2`, `download`, `copy`, plus `light-mode`/`dark-mode` for the theme toggle.
- **Social marks:** brand glyphs (X, LinkedIn, etc.) used in the footer.
- **No emoji, no unicode dingbats.**
- **Wordmark:** "Viola Ventures" set in Season Serif with a small spark dot, rendered via the `Wordmark` component (`currentColor`, so it inverts on dark surfaces).

---

## Index / Manifest
Root files:
- `styles.css` — import manifest (link this). Pulls in everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `assets/` — `fonts/`, `icons/sprite.svg`, `images/` (placeholder photography).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — reusable primitives (below).
- `ui_kits/website/` — interactive homepage recreation.
- `SKILL.md` — Agent-Skills entry point.

### Components
Grouped under `components/`, consumed via `window.AptosDesignSystem_1112d2`:
- **foundations/** — `Icon`, `Wordmark`
- **backgrounds/** — `Pattern` (striped-inversion arc / diamond / lens background motif; plain-CSS API in `patterns/aptos-patterns.css`)
- **actions/** — `Button`, `IconButton`
- **content/** — `Card`, `Tag`, `StatBlock`, `CodeBlock`
- **navigation/** — `NavBar`, `Footer`
- **forms/** — `TextField`, `SegmentedControl`, `ThemeToggle`
- **feedback/** — `Accordion`, `Marquee`

### UI kits
- **website/** — Viola Ventures homepage (`index.html` + `sections.jsx`).

## Fonts
- **Season Serif** and **Akkurat Mono** are the brand fonts (trial builds), self-hosted in `assets/fonts/`. Season Serif is the single text face — it drives **both** display headlines and body/UI copy (`--font-serif` and `--font-sans` both point to it); there is **no** separate UI grotesque.
- The provided Season Serif trial is a set of static weights (300–700).
- **Season Mix** trial weights are present in `assets/fonts/` but are **not** referenced in the token wiring.
