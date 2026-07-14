# Guesty Nebula Design System

**Nebula** is Guesty's frontend design system and component library — the shared platform that powers the Guesty property management web application and its micro-frontend ecosystem.

- **Storybook**: [livebook.guesty.com/nebula](https://livebook.guesty.com/nebula/)
- **GitHub**: [github.com/guestyorg/nebula](https://github.com/guestyorg/nebula) *(private)*
- **Source codebase**: `nebula-master 4/` (attached via File System Access API)
- **Package prefix**: `@guestyci/` (e.g. `@guestyci/arc`, `@guestyci/arc-shell`, `@guestyci/icons`)

---

## About Guesty

Guesty is a **property management platform** for short-term rental hosts and property managers. It unifies reservations, guest messaging, pricing, and operations across Airbnb, Booking.com, Vrbo, and dozens of other channels.

The Guesty web app consists of several main modules:
- **Inbox** — Unified guest messaging across all channels
- **Reservations** — Booking calendar, check-in/check-out management
- **Properties** — Listing management (descriptions, photos, pricing, amenities)
- **Owners** — Owner portal and financial reporting
- **Automations** — Triggered message and task automation
- **Reports** — Revenue, occupancy, and performance analytics
- **Marketplace** — Third-party integrations and plugins

---

## Monorepo Structure

The source monorepo uses **Nx** with **pnpm** workspaces. Key packages:

| Package | Description |
|---|---|
| `@guestyci/arc` | Core React component library (Button, Input, Badge, Card, etc.) |
| `@guestyci/arc-shell` | App shell components (LayoutShell, AppShell, panels) |
| `@guestyci/arc-styles` | Tailwind CSS preset + global CSS (tokens, reset) |
| `@guestyci/icons` | Icon library — wraps full Lucide icon set + custom SVGs |
| `@guestyci/louvre` | Image/asset management (uploader, gallery) |
| `@guestyci/arc-datatable` | Advanced data table component |
| `@guestyci/jarvis` | AI/automation utilities |
| `@guestyci/localize` | i18n (internationalization) utilities |

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Professional but warm** — Guesty speaks to property managers who are running real businesses. Copy is direct, confident, and task-oriented.
- **Action-first** — Labels prioritize verbs: "Add listing", "Send message", "View report". Not "Listing addition" or "Report viewing".
- **Second person (you/your)** — "Your reservations", "Your properties". Occasionally first-person for confirmation states ("Done!", "Saved").
- **Sentence case everywhere** — Navigation labels, buttons, headings, and field labels all use sentence case. "Add property" not "Add Property".
- **No emoji in UI** — Emoji are not used in product copy or navigation. The brand is professional SaaS, not consumer social.
- **Numbers over words** — "3 listings", not "three listings". Stats and counts always use numerals.
- **Abbreviated where space is tight** — "Res." for Reservation in cramped contexts; "Msg" for Message in badge counts.

### Example Copy Patterns
```
— Button labels:   "Save changes"  /  "Add listing"  /  "Assign cleaner"
— Empty states:    "No reservations yet."  /  "Connect a channel to get started."
— Confirm actions: "Are you sure you want to delete this listing? This can't be undone."
— Success toasts:  "Reservation saved."  /  "Message sent."
— Error messages:  "Something went wrong. Please try again."  /  "Required field."
```

---

## VISUAL FOUNDATIONS

### Colors
- **Primary teal** `hsl(171, 100%, 24%)` — #007A68. A deep, saturated teal-green. Used for the header background, primary buttons, active nav states, and focus rings. Distinctly Guesty.
- **Foreground** `hsl(215, 28%, 17%)` — #1F2937. A cool dark navy for all body text and headings.
- **Muted** `hsl(240, 5%, 96%)` — #F4F4F6. Off-white used for secondary button backgrounds, hover states, and subtle containers.
- **Border** `hsl(216, 12%, 92%)` — #E7EAED. Very light blue-gray for card borders, dividers, and input outlines.
- No gradients in the UI — all color is flat. No decorative blurs or glassmorphism.

### Status Colors
- **Destructive/Error** — Red `hsl(5, 82%, 47%)` on a pale red tint background
- **Success** — Green `hsl(143, 78%, 36%)` on a pale green tint background
- **Information** — Blue `hsl(226, 94%, 55%)` on a pale blue tint background
- **Warning** — Amber `hsl(32, 95%, 44%)` on a pale yellow tint background

### Typography
- **Figtree** (Google Fonts) — the sole sans-serif for all UI. Variable weight 300–900. Semibold (600) is the primary weight for labels, nav, and buttons. Regular (400) for body copy.
- **Noto Serif Georgian** — used sparingly for decorative display headings and marketing-style titles. Never in functional UI.
- No decorative type. No italic in UI. No custom lettering.
- Text scale: xs(12), sm(14), base(16), lg(18), xl(20), 2xl(24), 3xl(30).

### Spacing
- **4px base unit** — all spacing is a multiple of 4px. Tight density: 8px gaps between form elements. Standard density: 16px gaps between sections. Loose: 24–32px page margins.
- Form elements (inputs, buttons) default to **40px (h-10)** height. Small variant: 32px. Large: 44px.

### Backgrounds & Surfaces
- **White canvas** — the main content area is always white or #F4F4F6 (muted). No dark-mode tints in the default light theme.
- **Cards** — white background, 1px #E7EAED border, 8px radius, `shadow-sm` (1–2px drop shadow). Clean and minimal.
- No full-bleed images in functional product UI. No background textures or patterns.
- The header is the only full-bleed teal element.

### Borders & Radius
- Default radius: **8px** (lg) — used on cards, panels, buttons, inputs
- Small radius: **4px** (sm) — used on small chips, compact tags
- Badge/pill: **9999px** (full) — used on badge counts and status pills
- Border color: `--color-border` (`#E7EAED`) — consistently applied; no hairline tricks

### Shadows
- `shadow-sm` (0 1px 2px) — card surfaces, dropdown triggers
- `shadow-md` (0 4px 6px) — dropdown menus, popovers, tooltips
- `shadow-lg` (0 10px 15px) — modals, dialogs, drawers
- No inset shadows. No colored shadows.

### Icons
- **Lucide** icons throughout (`@guestyci/icons/system` re-exports the full Lucide library). Stroke weight: consistent 1.5px Lucide default. Size 16px for inline/button icons, 20px for nav icons.
- Custom legacy SVG icon set (`Btn*`, `Ico*`) used in older product areas. Being migrated to Lucide.
- Custom amenity SVGs (bed, bath, pool, bbq, etc.) for property listing details.

### Animations & Interactions
- **Subtle transitions** — `transition-colors` (100–150ms ease) on all interactive elements.
- **No bounces or springs** — transitions are linear or ease-in-out only. No playful physics.
- **Hover states**: background shifts to `--color-muted` (#F4F4F6) or primary lightens to 90% opacity.
- **Active/pressed**: color stays, no scale transforms.
- **Focus rings**: 2px ring in primary teal (`--color-ring`), offset 2px. Applied to all keyboard-navigable elements.
- **Disabled**: 50% opacity, `pointer-events: none`.
- No skeleton animations with shimmer in new components (use static `bg-muted` placeholders).
- Loading spinners use the Guesty Lottie loader (circular motion) or a simple CSS spinner.

### Layout
- **LayoutShell**: Full-viewport CSS grid — `banners / header / sidebar+app`. Header is sticky at top, 56px.
- **Sidebar**: 52px icon-only (collapsed) or 200px expanded. White/light background contrasting with teal header.
- **AppShell inner panels**: local (200px), sidebar (320px), main (flex-grow), aside (300px), tabs (icon strip).
- Panels have 4px margin spacing, 8px radius, and their own shadow. Groups share borders (no gap between grouped panels).
- Content padding: 16–24px inside panels.

### Imagery
- Property photos are used in listing cards (16:9 or 4:3 aspect ratio, rounded-lg).
- No abstract illustrations, no hand-drawn elements.
- Avatar initials (letter + color background) when no photo is available.

---

## ICONOGRAPHY

Guesty uses two icon systems:

### 1. Lucide Icons (Primary — `@guestyci/icons/system`)
The entire [Lucide icon library](https://lucide.dev) is bundled via `@guestyci/icons/system`. This is the current standard for all new components and UI. Icons are SVG-based React components.

**Usage**: `import { House, Inbox, Calendar, Settings } from '@guestyci/icons/system'`

**Common icons in the Guesty UI**:
- Navigation: `House`, `Inbox`, `Calendar`, `Users`, `Settings`, `ConciergeBell`, `Hotel`
- Actions: `Plus`, `Pencil`, `Trash2`, `Copy`, `Download`, `Share`, `Search`, `Filter`, `X`, `Check`
- Status: `CircleCheck`, `CircleAlert`, `TriangleAlert`, `Info`
- UI: `ChevronDown`, `ChevronRight`, `Menu`, `EllipsisVertical`, `ArrowLeft`, `SlidersHorizontal`

**Sizes**: 16px (inline, buttons), 20px (nav items, page actions), 24px (empty state, feature icons)
**Stroke**: Lucide default (1.5px, round cap/join)
**Color**: Inherits from `currentColor`

### 2. Legacy SVG Icons (`packages/icons/src/`)
An older set of branded SVGs with `Btn*` (action buttons) and `Ico*` (informational) naming. Used in legacy product areas. Being deprecated in favour of Lucide.

### 3. Custom Amenity SVGs (`packages/icons/src/`)
Property-specific icons: `bed`, `bath`, `pool`, `bbq`, `gym`, `parking`, `wifi`, `dogs`, `cats`, etc. Used exclusively in listing detail screens.

**No emoji** — Emoji are never used as icons or decorative elements in the product UI.

---

## Files in this Design System

```
styles.css               — Global CSS entry point (@import only)
readme.md                — This file
SKILL.md                 — Agent skill definition

tokens/
  colors.css             — Color CSS custom properties
  typography.css         — Font imports + type scale tokens
  spacing.css            — Spacing, radius, shadow, z-index tokens

assets/
  logo-white.svg         — Guesty wordmark (white, for teal/dark backgrounds)
  logo-dark.svg          — Guesty wordmark (dark, for light backgrounds)
  google_logo.png        — Google logo (used in OAuth flows)

guidelines/
  colors-primary.card.html     — Primary brand color specimen
  colors-semantic.card.html    — Status/semantic color palette
  colors-neutral.card.html     — Neutral/surface color ramp
  type-sans.card.html          — Figtree type specimen
  type-scale.card.html         — Full type scale
  spacing-scale.card.html      — Spacing tokens visual
  radius.card.html             — Border radius scale
  shadows.card.html            — Shadow system
  brand-logo.card.html         — Logo usage

components/
  core/
    Button.jsx / .d.ts / .prompt.md    — Primary button component
    Badge.jsx  / .d.ts / .prompt.md    — Status/count badge
    Input.jsx  / .d.ts / .prompt.md    — Text input
    Card.jsx   / .d.ts / .prompt.md    — Content card container
    core.card.html                     — Component showcase card
  feedback/
    Alert.jsx  / .d.ts / .prompt.md    — Alert/notification banner
    feedback.card.html                 — Feedback component showcase

ui_kits/
  guesty_app/
    index.html           — Interactive Guesty app shell prototype
```
