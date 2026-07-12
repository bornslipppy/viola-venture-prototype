/* @ds-bundle: {"format":4,"namespace":"AptosDesignSystem_1112d2","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"PATTERN_PRESETS","sourcePath":"components/backgrounds/Pattern.jsx"},{"name":"Pattern","sourcePath":"components/backgrounds/Pattern.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"CodeBlock","sourcePath":"components/content/CodeBlock.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Marquee","sourcePath":"components/feedback/Marquee.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"ThemeToggle","sourcePath":"components/forms/ThemeToggle.jsx"},{"name":"ICONS","sourcePath":"components/foundations/Icon.jsx"},{"name":"Icon","sourcePath":"components/foundations/Icon.jsx"},{"name":"Wordmark","sourcePath":"components/foundations/Wordmark.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"9266e2a15308","components/actions/IconButton.jsx":"2ef2a7ef3f7f","components/backgrounds/Pattern.jsx":"e1808938ce1d","components/content/Card.jsx":"76638d162e19","components/content/CodeBlock.jsx":"53f5c667a857","components/content/StatBlock.jsx":"e2f855ba4b57","components/content/Tag.jsx":"d020f6ae1baa","components/feedback/Accordion.jsx":"8d52be9c3ff8","components/feedback/Marquee.jsx":"c89d3b69fcfe","components/forms/SegmentedControl.jsx":"26197e788b79","components/forms/TextField.jsx":"39bd7cfc8783","components/forms/ThemeToggle.jsx":"f0a99d640a06","components/foundations/Icon.jsx":"b55ca8c10168","components/foundations/Wordmark.jsx":"fe3b866f9501","components/navigation/Footer.jsx":"f97f6c0df819","components/navigation/NavBar.jsx":"557aeb82cd6b","ui_kits/website/sections.jsx":"ede301a10615"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AptosDesignSystem_1112d2 = window.AptosDesignSystem_1112d2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/backgrounds/Pattern.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Striped-inversion mask engine — the Aptos-style arc / diamond / lens
   background motif. Two-colour stripes, inverted inside circle or diamond
   figures to carve concentric bands. Also shipped as a standalone
   stylesheet at patterns/aptos-patterns.css for non-React consumers. */
const CSS = `
.apt-pattern.pattern-root{
  position:absolute; inset:0; overflow:hidden;
  --aptos-black:var(--color-black,#0f0e0b);
  --aptos-beige:var(--color-sand,#ccc5a3);
  --aptos-blue:var(--color-blue,#badbee);
  --aptos-coral:#ff8866;
  --aptos-mint:var(--color-mint,#d5fad3);
  --aptos-tan:var(--color-tan,#9d937c);
}
.apt-pattern .pattern-container{
  position:relative; width:100%; height:100%; container-type:size;
  --columns:16; --rows:8; --color:var(--aptos-beige);
}
.apt-pattern.pattern-root:has(> .proportional){ position:relative; height:auto; }
.apt-pattern .pattern-container.proportional{ height:auto; aspect-ratio:var(--columns)/var(--rows); }
.apt-pattern .pattern-layer{
  position:absolute; inset:0;
  --cell:calc(100cqw / var(--columns));
  --cell-h:calc(100cqh / var(--rows));
}
.apt-pattern .pattern-layer.vertical.even{ background:repeating-linear-gradient(to right,var(--color) 0 var(--cell),var(--aptos-black) var(--cell) calc(2*var(--cell))); }
.apt-pattern .pattern-layer.vertical.odd{ background:repeating-linear-gradient(to right,var(--aptos-black) 0 var(--cell),var(--color) var(--cell) calc(2*var(--cell))); }
.apt-pattern .pattern-layer.horizontal.even{ background:repeating-linear-gradient(to bottom,var(--color) 0 var(--cell-h),var(--aptos-black) var(--cell-h) calc(2*var(--cell-h))); }
.apt-pattern .pattern-layer.horizontal.odd{ background:repeating-linear-gradient(to bottom,var(--aptos-black) 0 var(--cell-h),var(--color) var(--cell-h) calc(2*var(--cell-h))); }
.apt-pattern .pattern-figure-mask{
  --fig-r:calc(var(--size) / 2 * var(--cell));
  --fig-cx:calc(50cqw + var(--x) * var(--cell));
  --fig-cy:calc(50cqh + var(--y) * var(--cell));
  --figure-circle:circle(var(--fig-r) at var(--fig-cx) var(--fig-cy));
  --figure-diamond:polygon(var(--fig-cx) calc(var(--fig-cy) - var(--fig-r)),calc(var(--fig-cx) + var(--fig-r)) var(--fig-cy),var(--fig-cx) calc(var(--fig-cy) + var(--fig-r)),calc(var(--fig-cx) - var(--fig-r)) var(--fig-cy));
  clip-path:var(--figure);
}
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "pattern");
  el.textContent = CSS;
  document.head.appendChild(el);
}

// f(shape, size, x, y, phase) — one figure layer
const f = (shape, size, x, y, phase) => ({
  shape,
  size,
  x,
  y,
  phase
});

/* The eight scanned layouts. columns/rows/orientation/proportional set the
   grid; figures paint the inversions in source order (later = on top). */
const PATTERN_PRESETS = {
  "lens-column": {
    label: "Lens Column",
    orientation: "vertical",
    columns: 8,
    color: "blue",
    figures: [f("circle", 20, 0, -10, "odd"), f("circle", 20, 0, -18, "even"), f("circle", 20, 0, 10, "odd"), f("circle", 20, 0, 18, "even")]
  },
  "arc-banner": {
    label: "Arc Banner",
    orientation: "vertical",
    proportional: true,
    columns: 32,
    rows: 10,
    color: "beige",
    figures: [f("circle", 20, 0, 5, "odd"), f("circle", 10, 0, 5, "even")]
  },
  "diamond-banner": {
    label: "Diamond Banner",
    orientation: "vertical",
    proportional: true,
    columns: 32,
    rows: 10,
    color: "beige",
    figures: [f("diamond", 24, 0, -6, "odd"), f("diamond", 8, 0, -5, "even")]
  },
  "side-cut": {
    label: "Side Cut",
    orientation: "vertical",
    columns: 4,
    color: "beige",
    figures: [f("circle", 32, 12, -16, "odd"), f("circle", 32, 12, 16, "odd")]
  },
  "side-cut-mobile": {
    label: "Side Cut (mobile)",
    orientation: "vertical",
    columns: 16,
    color: "beige",
    figures: [f("circle", 30, 0, -15, "odd"), f("circle", 30, 0, 15, "odd")]
  },
  "horizontal-twin": {
    label: "Horizontal Twin",
    orientation: "horizontal",
    proportional: true,
    columns: 16,
    rows: 8,
    color: "beige",
    figures: [f("circle", 36, -18, 3, "odd"), f("circle", 29, -22, 3, "even"), f("circle", 36, 18, 3, "odd"), f("circle", 29, 22, 3, "even")]
  },
  "side-arc-mobile": {
    label: "Side Arc (mobile)",
    orientation: "vertical",
    columns: 16,
    color: "blue",
    figures: [f("circle", 20, 7, 0, "odd"), f("circle", 10, 8, 0, "even")]
  },
  "left-arc-mobile": {
    label: "Left Arc (mobile)",
    orientation: "vertical",
    proportional: true,
    columns: 16,
    rows: 6,
    color: "blue",
    figures: [f("circle", 20, -7, 0, "odd"), f("circle", 8, -8, 0, "even")]
  }
};
const COLOR_VAR = {
  blue: "var(--aptos-blue)",
  beige: "var(--aptos-beige)",
  coral: "var(--aptos-coral)",
  mint: "var(--aptos-mint)",
  tan: "var(--aptos-tan)",
  black: "var(--aptos-black)"
};

/**
 * Decorative striped-inversion background pattern (arc / diamond / lens).
 * Absolute-fills its nearest positioned ancestor (proportional presets
 * self-size and flow instead). Purely decorative — aria-hidden.
 */
function Pattern({
  preset = "arc-banner",
  color,
  columns,
  rows,
  figures,
  className = "",
  style,
  ...rest
}) {
  useStyle();
  const cfg = PATTERN_PRESETS[preset] || PATTERN_PRESETS["arc-banner"];
  const orient = cfg.orientation;
  const cols = columns ?? cfg.columns;
  const rws = rows ?? cfg.rows;
  const figs = figures ?? cfg.figures;
  const accent = COLOR_VAR[color || cfg.color] || COLOR_VAR.beige;
  const containerStyle = {
    "--color": accent,
    "--columns": cols
  };
  if (cfg.proportional) containerStyle["--rows"] = rws;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["apt-pattern", "pattern-root", className].filter(Boolean).join(" "),
    "aria-hidden": "true",
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: ["pattern-container", cfg.proportional ? "proportional" : ""].filter(Boolean).join(" "),
    style: containerStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: `pattern-layer even ${orient}`
  }), figs.map((fig, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `pattern-layer pattern-figure-mask ${orient} ${fig.phase}`,
    style: {
      "--figure": fig.shape === "diamond" ? "var(--figure-diamond)" : "var(--figure-circle)",
      "--size": fig.size,
      "--x": fig.x,
      "--y": fig.y
    }
  }))));
}
Object.assign(__ds_scope, { PATTERN_PRESETS, Pattern });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/backgrounds/Pattern.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.apt-stat{ display:flex; flex-direction:column; gap:8px; }
.apt-stat__value{
  font-family:var(--font-serif); font-weight:400; line-height:0.95;
  letter-spacing:-0.03em; font-size:var(--text-5xl); color:var(--inverted-100);
}
.apt-stat__label{
  font-family:var(--font-mono); font-size:var(--text-xs); text-transform:uppercase;
  letter-spacing:0.03em; color:var(--text-secondary);
}
.apt-stat__desc{ font-family:var(--font-sans); font-size:var(--text-sm); color:var(--text-secondary); max-width:32ch; }
.apt-stat--sm .apt-stat__value{ font-size:var(--text-3xl); }
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "stat");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Big serif metric + mono label — the site's stat/figure block. */
function StatBlock({
  value,
  label,
  description,
  size = "md",
  className = "",
  ...rest
}) {
  useStyle();
  const cls = ["apt-stat", size === "sm" ? "apt-stat--sm" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "apt-stat__value"
  }, value), label ? /*#__PURE__*/React.createElement("div", {
    className: "apt-stat__label"
  }, label) : null, description ? /*#__PURE__*/React.createElement("div", {
    className: "apt-stat__desc"
  }, description) : null);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.apt-tag{
  display:inline-flex; align-items:center; gap:6px;
  font-family:var(--font-mono); font-size:var(--text-2xs); text-transform:uppercase;
  letter-spacing:0.03em; line-height:1; padding:6px 10px; border-radius:var(--radius-full);
  border:1px solid var(--border); color:var(--inverted-100); background:transparent;
  white-space:nowrap;
}
.apt-tag--mint{ background:var(--accent-mint); color:var(--color-black); border-color:transparent; }
.apt-tag--blue{ background:var(--accent-blue); color:var(--color-black); border-color:transparent; }
.apt-tag--lime{ background:var(--accent-lime); color:var(--color-black); border-color:transparent; }
.apt-tag--solid{ background:var(--inverted-100); color:var(--surface-100); border-color:transparent; }
.apt-tag__dot{ width:6px; height:6px; border-radius:50%; background:currentColor; }
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "tag");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Mono pill label / eyebrow chip. Use for status, categories, eyebrows. */
function Tag({
  children,
  variant = "outline",
  dot = false,
  className = "",
  ...rest
}) {
  useStyle();
  const cls = ["apt-tag", variant !== "outline" ? `apt-tag--${variant}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "apt-tag__dot",
    "aria-hidden": "true"
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
@keyframes apt-marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
.apt-marquee{ overflow:hidden; width:100%; -webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent); mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent); }
.apt-marquee__track{ display:flex; width:max-content; animation:apt-marquee var(--apt-marquee-dur,24s) linear infinite; }
.apt-marquee:hover .apt-marquee__track{ animation-play-state:paused; }
.apt-marquee__group{ display:flex; align-items:center; gap:var(--apt-marquee-gap,48px); padding-right:var(--apt-marquee-gap,48px); }
.apt-marquee__item{
  font-family:var(--font-serif); font-size:var(--text-2xl); font-weight:400; color:var(--inverted-100);
  white-space:nowrap; display:inline-flex; align-items:center; gap:12px;
}
.apt-marquee--mono .apt-marquee__item{ font-family:var(--font-mono); font-size:var(--text-sm); text-transform:uppercase; letter-spacing:0.03em; color:var(--text-secondary); }
@media (prefers-reduced-motion: reduce){ .apt-marquee__track{ animation:none; } }
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "marquee");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Infinite horizontal marquee — the site's scrolling ticker / logo wall. */
function Marquee({
  items = [],
  variant = "serif",
  speed = 24,
  gap = 48,
  separator = "—",
  className = "",
  style = {},
  ...rest
}) {
  useStyle();
  const group = /*#__PURE__*/React.createElement("div", {
    className: "apt-marquee__group",
    "aria-hidden": "false"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    className: "apt-marquee__item",
    key: i
  }, it, separator ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      opacity: 0.4
    }
  }, separator) : null)));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["apt-marquee", variant === "mono" ? "apt-marquee--mono" : "", className].filter(Boolean).join(" "),
    style: {
      "--apt-marquee-dur": `${speed}s`,
      "--apt-marquee-gap": `${gap}px`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "apt-marquee__track"
  }, group, /*#__PURE__*/React.createElement("div", {
    className: "apt-marquee__group",
    "aria-hidden": "true"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    className: "apt-marquee__item",
    key: i
  }, it, separator ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      opacity: 0.4
    }
  }, separator) : null)))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.apt-seg{
  display:inline-flex; padding:4px; gap:2px; background:var(--surface-200);
  border:1px solid var(--border); border-radius:var(--radius-full);
}
.apt-seg__opt{
  appearance:none; border:0; cursor:pointer; background:transparent;
  padding:8px 18px; border-radius:var(--radius-full);
  font-family:var(--font-mono); font-size:var(--text-xs); text-transform:uppercase;
  letter-spacing:0.03em; color:var(--text-secondary);
  transition:background var(--duration-fast) var(--ease-in-out), color var(--duration-fast) var(--ease-in-out);
}
.apt-seg__opt:hover{ color:var(--inverted-100); }
.apt-seg__opt[aria-selected="true"]{ background:var(--inverted-100); color:var(--surface-100); }
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "seg");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Segmented control / toggle group — pill container of mono options. */
function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  className = "",
  ...rest
}) {
  useStyle();
  const [internal, setInternal] = React.useState(defaultValue ?? (options[0] && (options[0].value ?? options[0])));
  const current = value !== undefined ? value : internal;
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["apt-seg", className].filter(Boolean).join(" "),
    role: "tablist"
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    role: "tab",
    type: "button",
    className: "apt-seg__opt",
    "aria-selected": current === o.value,
    onClick: () => {
      if (value === undefined) setInternal(o.value);
      onChange && onChange(o.value);
    }
  }, o.label)));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.apt-field{ display:flex; flex-direction:column; gap:8px; font-family:var(--font-sans); }
.apt-field__label{
  font-family:var(--font-mono); font-size:var(--text-2xs); text-transform:uppercase;
  letter-spacing:0.03em; color:var(--text-secondary);
}
.apt-field__input{
  width:100%; height:48px; padding:0 16px; font-family:var(--font-sans); font-size:var(--text-base);
  color:var(--inverted-100); background:var(--surface-100);
  border:1px solid var(--border); border-radius:var(--radius-sm);
  transition:border-color var(--duration-fast) var(--ease-in-out);
}
.apt-field__input::placeholder{ color:var(--text-muted); }
.apt-field__input:focus{ outline:none; border-color:var(--inverted-100); }
textarea.apt-field__input{ height:auto; min-height:110px; padding:12px 16px; resize:vertical; line-height:1.5; }
.apt-field--error .apt-field__input{ border-color:var(--color-error); }
.apt-field__hint{ font-size:var(--text-xs); color:var(--text-muted); }
.apt-field--error .apt-field__hint{ color:var(--color-error); }
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "field");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Text input / textarea with mono label and hairline border. */
function TextField({
  label,
  hint,
  error = false,
  multiline = false,
  id,
  className = "",
  ...rest
}) {
  useStyle();
  const fieldId = id || `f-${Math.random().toString(36).slice(2, 8)}`;
  const cls = ["apt-field", error ? "apt-field--error" : "", className].filter(Boolean).join(" ");
  const Input = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "apt-field__label",
    htmlFor: fieldId
  }, label) : null, /*#__PURE__*/React.createElement(Input, _extends({
    id: fieldId,
    className: "apt-field__input"
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    className: "apt-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/foundations/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Viola Ventures iconography — Material-Symbols line glyphs + brand social marks,
   lifted verbatim from the site's sprite.svg. Self-contained so the set
   travels with the bundle (no external sprite fetch). All paths use
   currentColor and a 0 0 24 24 box unless noted. */

/* Thin line arrows — horizontal shaft + open chevron head, drawn with
   strokes (not fills) to match the Viola arrow mark. Normalized to a
   0 0 24 24 box so they drop into the same circles as every other icon. */
const ICONS = {
  "arrow-forward": {
    stroke: true,
    paths: ["M22.5 12H1.5", "M22.5 12C18.64 12 15.5 8.86 15.5 5", "M22.5 12C18.64 12 15.5 15.14 15.5 19"]
  },
  "arrow-back": {
    stroke: true,
    paths: ["M1.5 12H22.5", "M1.5 12C5.36 12 8.5 8.86 8.5 5", "M1.5 12C5.36 12 8.5 15.14 8.5 19"]
  },
  "arrow-outward": "M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z",
  "arrow-downward": {
    stroke: true,
    paths: ["M12 22.5V1.5", "M12 22.5C12 18.64 15.14 15.5 19 15.5", "M12 22.5C12 18.64 8.86 15.5 5 15.5"]
  },
  "arrow-upward": {
    stroke: true,
    paths: ["M12 1.5V22.5", "M12 1.5C12 5.36 8.86 8.5 5 8.5", "M12 1.5C12 5.36 15.14 8.5 19 8.5"]
  },
  "keyboard-arrow-down": "m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z",
  "keyboard-arrow-up": "m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z",
  close: "M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z",
  check: "m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z",
  menu: "M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z",
  search: "m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14",
  "add-2": "M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z",
  remove: "M5 13v-2h14v2z",
  download: "m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z",
  terminal: "M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V8H4zm3.5-1l-1.4-1.4L8.675 13l-2.6-2.6L7.5 9l4 4zm4.5 0v-2h6v2z",
  copy: "M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V7q0-.425.288-.712T4 6t.713.288T5 7v13h10q.425 0 .713.288T16 21t-.288.713T15 22z",
  "ios-share": "M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h3v2H6v10h12V10h-3V8h3q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm5-6V4.825l-1.6 1.6L8 5l4-4l4 4l-1.4 1.425l-1.6-1.6V16z",
  "location-on": "M13.413 11.413Q14 10.825 14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12t1.413-.587M12 19.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22",
  lock: "M4 22V8h3V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h3v14zm2-2h12V10H6zm7.413-3.588Q14 15.826 14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17t1.413-.587M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z",
  "light-mode": "M14.125 14.125Q15 13.25 15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15t2.125-.875m-5.663 1.413Q7 14.075 7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17t-3.537-1.463M5 13H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z",
  "dark-mode": "M12.1 22q-2.1 0-3.937-.8t-3.2-2.162t-2.163-3.2T2 11.9q0-3.65 2.325-6.437T10.25 2q-.45 2.475.275 4.838t2.5 4.137t4.138 2.5T22 13.75q-.65 3.6-3.45 5.925T12.1 22m0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412t-2.425-3.45T8.1 4.85Q6.175 5.925 5.088 7.813T4 11.9q0 3.375 2.363 5.738T12.1 20",
  discord: {
    box: "0 0 18 15",
    path: "M15.248 1.847A14.8 14.8 0 0011.534.691c-.16.287-.347.672-.476.979a13.8 13.8 0 00-4.115 0c-.129-.307-.32-.692-.481-.979A14.7 14.7 0 002.745 1.85C.395 5.367-.242 8.797.076 12.179a14.9 14.9 0 004.555 2.311 11 11 0 00.975-1.591 9.6 9.6 0 01-1.536-.74 8 8 0 00.377-.296c2.962 1.372 6.18 1.372 9.106 0q.185.153.377.296a9.6 9.6 0 01-1.54.741c.282.559.608 1.092.976 1.591a14.9 14.9 0 004.558-2.312c.373-3.92-.639-7.319-2.676-10.332M6.01 10.1c-.89 0-1.618-.822-1.618-1.823s.713-1.825 1.618-1.825 1.634.822 1.618 1.825C7.63 9.278 6.915 10.1 6.01 10.1m5.98 0c-.889 0-1.618-.822-1.618-1.823s.713-1.825 1.618-1.825 1.634.822 1.618 1.825c0 1.001-.713 1.823-1.618 1.823"
  },
  github: {
    box: "0 0 18 19",
    path: "M9 1.068a9.03 9.03 0 00-5.83 2.135A8.94 8.94 0 00.12 8.585a8.9 8.9 0 001.182 6.064 9 9 0 004.852 3.859c.447.083.615-.194.615-.43 0-.235-.009-.919-.012-1.665-2.503.54-3.032-1.057-3.032-1.057-.409-1.037-.999-1.31-.999-1.31-.817-.554.061-.544.061-.544.905.064 1.38.923 1.38.923.802 1.368 2.106.973 2.619.741.08-.579.314-.973.572-1.197-2-.225-4.101-.993-4.101-4.422a3.46 3.46 0 01.927-2.402c-.093-.225-.401-1.135.088-2.37 0 0 .755-.24 2.475.917a8.6 8.6 0 014.507 0c1.718-1.158 2.472-.918 2.472-.918.49 1.233.182 2.143.09 2.371a3.45 3.45 0 01.928 2.405c0 3.437-2.106 4.194-4.109 4.415.322.278.61.822.61 1.658 0 1.197-.01 2.16-.01 2.455 0 .239.162.517.618.43a9 9 0 004.852-3.86 8.9 8.9 0 001.182-6.065 8.94 8.94 0 00-3.052-5.381 9.03 9.03 0 00-5.832-2.134z"
  },
  x: {
    box: "0 0 18 19",
    path: "m1.775 2.943 5.322 7.606-5.042 5.894h1.98l3.948-4.627 3.238 4.627h5.182l-5.566-7.968 4.718-5.532h-1.95L9.955 7.21l-2.98-4.266zm2.88 1.5h1.537l7.333 10.5h-1.523z"
  },
  youtube: {
    box: "0 0 18 19",
    path: "M17.82 6.093s-.175-1.241-.717-1.786c-.685-.717-1.451-.72-1.803-.763-2.517-.183-6.296-.183-6.296-.183h-.007s-3.78 0-6.297.183c-.352.042-1.118.046-1.803.763-.542.545-.714 1.786-.714 1.786S0 7.552 0 9.007v1.365c0 1.455.18 2.914.18 2.914s.175 1.241.713 1.786c.686.717 1.586.693 1.986.77 1.442.137 6.121.18 6.121.18s3.783-.008 6.3-.187c.352-.042 1.118-.046 1.804-.763.54-.545.717-1.786.717-1.786S18 11.83 18 10.37V9.007c0-1.455-.18-2.914-.18-2.914M7.14 12.027V6.968l4.862 2.539z"
  },
  linkedin: {
    box: "0 0 18 18",
    path: "M15.816 1H2.18C1.528 1 1 1.516 1 2.153v13.69A1.17 1.17 0 002.181 17h13.635c.653 0 1.184-.52 1.184-1.153V2.153C17 1.516 16.469 1 15.816 1M5.746 14.634H3.373V6.997h2.375v7.637ZM4.56 5.956a1.376 1.376 0 11-.004-2.751 1.376 1.376 0 01.004 2.751m10.075 8.678h-2.372v-3.712c0-.885-.015-2.025-1.234-2.025-1.234 0-1.422.965-1.422 1.962v3.775h-2.37V6.997h2.275V8.04h.032c.315-.6 1.09-1.234 2.243-1.234 2.404 0 2.847 1.581 2.847 3.638z"
  },
  telegram: {
    box: "0 0 18 19",
    path: "M9 .693a9 9 0 110 18 9 9 0 010-18m3.68 5.418c-.339.006-.858.187-3.358 1.227q-1.312.547-5.248 2.26-.64.255-.67.498c-.039.31.41.407.973.59.46.15 1.078.325 1.4.332q.436.009.975-.36 3.671-2.479 3.796-2.51c.056-.012.134-.029.186.018.053.047.048.135.042.16-.044.19-2.347 2.284-2.48 2.422-.505.526-1.082.847-.193 1.433.769.506 1.216.83 2.008 1.35.506.331.903.724 1.426.676.24-.022.49-.249.615-.923.299-1.594.884-5.046 1.02-6.47a1.6 1.6 0 00-.016-.354.38.38 0 00-.128-.244.6.6 0 00-.348-.105"
  }
};

/**
 * Renders a brand icon by name. `size` sets both dimensions (px);
 * color follows `currentColor`.
 */
function Icon({
  name,
  size = 20,
  className = "",
  style = {},
  ...rest
}) {
  const entry = ICONS[name];
  if (!entry) return null;
  const isStroke = typeof entry === "object" && entry.stroke;
  const box = typeof entry === "string" ? "0 0 24 24" : entry.box || "0 0 24 24";
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: `icon ${className}`,
    width: size,
    height: size,
    viewBox: box,
    role: "presentation",
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      flexShrink: 0,
      ...style
    }
  }, rest), isStroke ? entry.paths.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: typeof entry === "string" ? entry : entry.path
  }));
}
Object.assign(__ds_scope, { ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once. Keeps the pill + hover-sweep self-contained
   while styling entirely through design tokens. */
const CSS = `
.apt-btn{
  --_fill: var(--inverted-400);
  position:relative; overflow:hidden; isolation:isolate;
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  height:45px; padding:0 20px; border-radius:var(--radius-full);
  font-family:var(--font-mono); font-size:var(--text-xs); text-transform:uppercase;
  letter-spacing:0.03em; line-height:1; white-space:nowrap; cursor:pointer;
  border:1px solid transparent; transition:color var(--duration-fast) var(--ease-in-out);
  text-decoration:none;
}
.apt-btn__sweep{
  position:absolute; inset:0; z-index:-1; border-radius:inherit;
  transform:scaleX(0); transform-origin:right center;
  transition:transform var(--duration-base) var(--ease-in-out);
  background:var(--_fill);
}
.apt-btn:hover .apt-btn__sweep{ transform:scaleX(1); transform-origin:left center; }
.apt-btn:focus-visible{ outline:2px solid var(--inverted-100); outline-offset:2px; }

.apt-btn--primary{ background:var(--inverted-100); color:var(--surface-100); }
.apt-btn--secondary{ background:transparent; color:var(--inverted-100); border-color:var(--border); }
.apt-btn--secondary .apt-btn__sweep{ --_fill:var(--inverted-100); }
.apt-btn--secondary:hover{ color:var(--surface-100); }
.apt-btn--ghost{ background:transparent; color:var(--inverted-100); }
.apt-btn--ghost .apt-btn__sweep{ --_fill:var(--inverted-100)/0; background:color-mix(in oklab,var(--inverted-100) 8%,transparent); }
.apt-btn--ghost:hover{ color:var(--inverted-100); }

.apt-btn--sm{ height:36px; padding:0 16px; }
.apt-btn--lg{ height:52px; padding:0 26px; font-size:var(--text-sm); }

.apt-btn[aria-disabled="true"], .apt-btn:disabled{
  background:color-mix(in oklab,var(--inverted-100) 12%,transparent);
  color:var(--text-muted); border-color:transparent; cursor:default; pointer-events:none;
}
.apt-btn__circle{
  display:inline-flex; align-items:center; justify-content:center;
  width:36px; height:36px; margin-right:-8px; border-radius:var(--radius-full);
  border:1px solid var(--border);
}
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "button");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Pill button with the signature left-to-right hover sweep.
 * Renders as <a> when `href` is set, otherwise <button>.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  trailingCircle = false,
  disabled = false,
  className = "",
  ...rest
}) {
  useStyle();
  const Tag = href ? "a" : "button";
  const cls = ["apt-btn", `apt-btn--${variant}`, size !== "md" ? `apt-btn--${size}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    "aria-disabled": disabled || undefined,
    disabled: !href && disabled ? true : undefined
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "apt-btn__sweep",
    "aria-hidden": "true"
  }), icon && !trailingCircle ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, /*#__PURE__*/React.createElement("span", null, children), trailingCircle ? /*#__PURE__*/React.createElement("span", {
    className: "apt-btn__circle",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || "arrow-forward",
    size: 15
  })) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.apt-iconbtn{
  position:relative; overflow:hidden; isolation:isolate;
  display:inline-flex; align-items:center; justify-content:center;
  width:45px; height:45px; border-radius:var(--radius-full);
  border:1px solid var(--border); background:transparent; color:var(--inverted-100);
  cursor:pointer; transition:color var(--duration-fast) var(--ease-in-out);
  flex-shrink:0;
}
.apt-iconbtn__sweep{
  position:absolute; inset:0; z-index:-1; border-radius:inherit;
  transform:scaleX(0); transform-origin:right center;
  transition:transform var(--duration-base) var(--ease-in-out);
  background:var(--inverted-100);
}
.apt-iconbtn:hover .apt-iconbtn__sweep{ transform:scaleX(1); transform-origin:left center; }
.apt-iconbtn:hover{ color:var(--surface-100); }
.apt-iconbtn:focus-visible{ outline:2px solid var(--inverted-100); outline-offset:2px; }
.apt-iconbtn--filled{ background:var(--inverted-100); color:var(--surface-100); border-color:transparent; }
.apt-iconbtn--filled .apt-iconbtn__sweep{ background:var(--inverted-400); }
.apt-iconbtn--sm{ width:36px; height:36px; }
.apt-iconbtn[aria-disabled="true"]{
  background:color-mix(in oklab,var(--inverted-100) 12%,transparent);
  color:var(--text-muted); border-color:transparent; pointer-events:none;
}
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "iconbutton");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Circular icon button — the round arrow control used across the site
 * (nav, cards, "back to top"). Fills with the sweep on hover.
 */
function IconButton({
  icon = "arrow-forward",
  variant = "outline",
  size = "md",
  href,
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  useStyle();
  const Tag = href ? "a" : "button";
  const cls = ["apt-iconbtn", variant === "filled" ? "apt-iconbtn--filled" : "", size === "sm" ? "apt-iconbtn--sm" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    "aria-label": label,
    "aria-disabled": disabled || undefined
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "apt-iconbtn__sweep",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 14 : 15
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.apt-card{
  position:relative; display:flex; flex-direction:column;
  background:var(--surface-100); color:var(--inverted-100);
  border:1px solid var(--border); border-radius:var(--radius-none);
  padding:30px; min-height:300px; overflow:hidden;
  transition:background var(--duration-base) var(--ease-in-out);
}
.apt-card--dark{ background:var(--color-black); color:var(--color-white); border-color:transparent; }
.apt-card--dark .apt-card__desc{ color:rgba(249,249,240,0.6); }
.apt-card--fill-mint{ background:var(--accent-mint); color:var(--color-black); border-color:transparent; }
.apt-card--fill-blue{ background:var(--accent-blue); color:var(--color-black); border-color:transparent; }
.apt-card--fill-lime{ background:var(--accent-lime); color:var(--color-black); border-color:transparent; }
.apt-card__eyebrow{
  font-family:var(--font-mono); font-size:var(--text-xs); text-transform:uppercase;
  letter-spacing:0.03em; opacity:0.6; margin-bottom:14px;
}
.apt-card__title{
  font-family:var(--font-serif); font-size:var(--text-xl); font-weight:400;
  line-height:1.15; letter-spacing:-0.01em; margin:0 0 12px;
}
.apt-card__desc{
  font-family:var(--font-sans); font-size:var(--text-sm); line-height:1.45;
  color:var(--text-secondary); margin:0; max-width:42ch;
}
.apt-card__media{ flex:1; display:flex; align-items:center; justify-content:center; margin:24px 0; min-height:80px; }
.apt-card__footer{
  margin-top:auto; display:inline-flex; align-items:center; gap:12px;
  font-family:var(--font-mono); font-size:var(--text-xs); text-transform:uppercase;
  letter-spacing:0.03em; text-decoration:none; color:inherit; width:max-content;
}
.apt-card__footer .apt-card__circle{
  display:inline-flex; align-items:center; justify-content:center;
  width:40px; height:40px; border-radius:var(--radius-full); border:1px solid currentColor;
  position:relative; overflow:hidden; isolation:isolate; transition:color var(--duration-fast) var(--ease-in-out);
  opacity:0.5;
}
.apt-card a.apt-card__footer:hover .apt-card__circle{ opacity:1; }
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "card");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Editorial content card. The dark variant with a fine-line illustration
 * slot is the site's use-case card; light/accent-fill variants also exist.
 */
function Card({
  eyebrow,
  title,
  description,
  children,
  href,
  linkLabel,
  variant = "light",
  className = "",
  ...rest
}) {
  useStyle();
  const cls = ["apt-card", variant === "dark" ? "apt-card--dark" : "", variant.startsWith("fill-") ? `apt-card--${variant}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "apt-card__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "apt-card__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "apt-card__desc"
  }, description) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "apt-card__media"
  }, children) : null, linkLabel ? /*#__PURE__*/React.createElement("a", {
    className: "apt-card__footer",
    href: href || "#"
  }, /*#__PURE__*/React.createElement("span", {
    className: "apt-card__circle",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-forward",
    size: 15
  })), linkLabel) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/CodeBlock.jsx
try { (() => {
const CSS = `
.apt-code{
  font-family:var(--font-mono); font-size:var(--text-sm); line-height:1.6;
  color:var(--inverted-100); white-space:pre; overflow:auto;
  background:transparent; padding:0; margin:0; tab-size:2;
}
.apt-code--panel{
  background:var(--color-black); color:var(--color-white);
  padding:24px 28px; border-radius:var(--radius-md);
}
.apt-code__bar{
  display:flex; align-items:center; justify-content:space-between;
  font-family:var(--font-mono); font-size:var(--text-2xs); text-transform:uppercase;
  letter-spacing:0.03em; color:var(--text-muted); margin-bottom:14px;
}
.apt-code__copy{ display:inline-flex; align-items:center; gap:6px; cursor:pointer; background:none; border:0; color:inherit; font:inherit; text-transform:inherit; letter-spacing:inherit; }
.apt-code .cmt{ opacity:0.45; }
.apt-code .kw{ color:var(--accent-lime); }
.apt-code--panel .kw{ color:var(--accent-mint); }
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "code");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/* Minimal Move/Rust-ish highlighter: keywords + line comments. */
function highlight(code) {
  const kws = /\b(public|fun|let|module|struct|use|return|if|else|acquires|entry|const|move|has|copy|drop|store|key|bool|true|false)\b/g;
  return code.split("\n").map((line, i) => {
    const ci = line.indexOf("//");
    let codePart = ci >= 0 ? line.slice(0, ci) : line;
    let comment = ci >= 0 ? line.slice(ci) : "";
    const parts = [];
    let last = 0,
      m;
    while (m = kws.exec(codePart)) {
      if (m.index > last) parts.push(codePart.slice(last, m.index));
      parts.push(/*#__PURE__*/React.createElement("span", {
        className: "kw",
        key: m.index
      }, m[0]));
      last = m.index + m[0].length;
    }
    if (last < codePart.length) parts.push(codePart.slice(last));
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, parts, comment ? /*#__PURE__*/React.createElement("span", {
      className: "cmt"
    }, comment) : null, line === "" ? "\u200b" : null);
  });
}

/**
 * Decorative Move code block — the syntax-tinted snippet the site scatters
 * across hero and "Start Building" panels. Set `panel` for the dark card.
 */
function CodeBlock({
  code = "",
  label,
  panel = false,
  copyable = false,
  className = "",
  ...rest
}) {
  useStyle();
  const cls = ["apt-code", panel ? "apt-code--panel" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", rest, label || copyable ? /*#__PURE__*/React.createElement("div", {
    className: "apt-code__bar"
  }, /*#__PURE__*/React.createElement("span", null, label), copyable ? /*#__PURE__*/React.createElement("button", {
    className: "apt-code__copy",
    onClick: () => navigator.clipboard && navigator.clipboard.writeText(code)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "copy",
    size: 13
  }), " Copy") : null) : null, /*#__PURE__*/React.createElement("pre", {
    className: cls
  }, highlight(code)));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.apt-acc{ border-top:1px solid var(--border); }
.apt-acc__item{ border-bottom:1px solid var(--border); }
.apt-acc__trigger{
  width:100%; display:flex; align-items:center; justify-content:space-between; gap:20px;
  padding:22px 4px; background:none; border:0; cursor:pointer; text-align:left;
  font-family:var(--font-serif); font-size:var(--text-xl); font-weight:400; color:var(--inverted-100);
}
.apt-acc__icon{ flex-shrink:0; display:inline-flex; transition:transform var(--duration-base) var(--ease-in-out); color:var(--text-secondary); }
.apt-acc__item[data-open="true"] .apt-acc__icon{ transform:rotate(45deg); }
.apt-acc__panel{ overflow:hidden; display:grid; grid-template-rows:0fr; transition:grid-template-rows var(--duration-base) var(--ease-in-out); }
.apt-acc__item[data-open="true"] .apt-acc__panel{ grid-template-rows:1fr; }
.apt-acc__inner{ min-height:0; }
.apt-acc__body{
  font-family:var(--font-sans); font-size:var(--text-base); line-height:1.5;
  color:var(--text-secondary); padding:0 4px 24px; max-width:60ch;
}
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "accordion");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Accordion — bordered rows with serif triggers and a rotating + glyph. */
function Accordion({
  items = [],
  allowMultiple = false,
  className = "",
  ...rest
}) {
  useStyle();
  const [open, setOpen] = React.useState(() => new Set());
  const toggle = i => setOpen(prev => {
    const next = new Set(allowMultiple ? prev : []);
    if (prev.has(i)) next.delete(i);else next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["apt-acc", className].filter(Boolean).join(" ")
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "apt-acc__item",
    key: i,
    "data-open": open.has(i)
  }, /*#__PURE__*/React.createElement("button", {
    className: "apt-acc__trigger",
    type: "button",
    "aria-expanded": open.has(i),
    onClick: () => toggle(i)
  }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("span", {
    className: "apt-acc__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "add-2",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "apt-acc__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "apt-acc__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "apt-acc__body"
  }, it.content))))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/ThemeToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.apt-theme{
  display:inline-flex; align-items:center; gap:2px; padding:4px;
  border:1px solid var(--border); border-radius:var(--radius-full); background:var(--surface-100);
}
.apt-theme__btn{
  appearance:none; border:0; cursor:pointer; background:transparent;
  width:36px; height:36px; display:inline-flex; align-items:center; justify-content:center;
  border-radius:var(--radius-full); color:var(--text-secondary);
  transition:background var(--duration-fast) var(--ease-in-out), color var(--duration-fast) var(--ease-in-out);
}
.apt-theme__btn[aria-pressed="true"]{ background:var(--inverted-100); color:var(--surface-100); }
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "theme");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Light/dark theme toggle. Controlled via `value`/`onChange`, or self-manages
 * and sets `data-theme` on <html> when uncontrolled.
 */
function ThemeToggle({
  value,
  onChange,
  className = "",
  ...rest
}) {
  useStyle();
  const [internal, setInternal] = React.useState(value || "light");
  const mode = value !== undefined ? value : internal;
  const set = m => {
    if (value === undefined) {
      setInternal(m);
      if (typeof document !== "undefined") document.documentElement.setAttribute("data-theme", m);
    }
    onChange && onChange(m);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["apt-theme", className].filter(Boolean).join(" "),
    role: "group",
    "aria-label": "Theme"
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "apt-theme__btn",
    "aria-pressed": mode === "light",
    "aria-label": "Light",
    onClick: () => set("light")
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "light-mode",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "apt-theme__btn",
    "aria-pressed": mode === "dark",
    "aria-label": "Dark",
    onClick: () => set("dark")
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "dark-mode",
    size: 16
  })));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/foundations/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Viola Ventures wordmark artwork. Paths use currentColor so the mark
   inherits text color on light or dark surfaces. viewBox is the artwork's
   native 1100 x 156. */
const INNER = "<g>\n<path d=\"M190.063 0.0527854C190.804 -0.0056833 190.955 -0.0509013 191.663 0.11835C192.16 0.820685 191.961 17.9492 191.961 20.1402L191.956 59.2785C186.471 59.5252 182.772 62.1655 180.342 66.9768C178.555 70.5126 176.797 74.0794 174.996 77.6055L162.653 101.931C156.503 114.075 151.987 124.807 142.008 134.382C126.877 148.903 109.79 155.148 89.1452 155.025C88.9535 148.699 89.1215 141.48 89.1191 135.098L89.1404 96.0466L0.0601525 96.0343C-0.0681067 85.1991 0.0490343 74.1239 0.0464313 63.2688L0.0476156 1.31921C10.1723 1.12961 20.8344 1.29625 30.9933 1.29554L89.7983 1.30904L89.7675 95.7853C90.5508 95.7891 91.3341 95.7713 92.115 95.7322C98.1659 95.4124 101.334 92.0217 103.836 86.8796C105.447 83.5622 107.177 80.1968 108.838 76.897L121.04 52.8505C126.321 42.431 130.678 32.3358 138.643 23.7108C152.74 8.44908 169.61 1.12203 190.063 0.0527854Z\" fill=\"currentColor\"></path>\n<path d=\"M1072.03 119C1054.54 119 1043.5 110.563 1043.12 96.9156H1055.16C1055.66 104.856 1062.23 109.447 1072.53 109.447C1081.71 109.447 1087.05 105.104 1087.05 99.397C1087.05 83.0198 1044.99 97.536 1044.99 70.737C1044.99 58.8263 1055.53 50.5136 1072.65 50.5136C1088.29 50.5136 1098.58 59.1985 1099.58 72.9702H1087.54C1087.17 64.9057 1081.21 60.067 1071.54 60.067C1062.73 60.067 1057.52 64.4094 1057.52 70.2407C1057.52 85.9975 1099.7 71.7295 1099.7 99.2729C1099.7 111.184 1089.15 119 1072.03 119Z\" fill=\"currentColor\"></path>\n<path d=\"M1000.52 119C981.41 119 967.763 104.732 967.763 84.6327C967.763 64.6576 981.41 50.5136 1000.52 50.5136C1016.27 50.5136 1029.55 62.3002 1029.55 83.7642V88.727H980.79C981.659 100.514 988.606 108.578 1000.52 108.578C1009.2 108.578 1015.03 103.491 1016.27 98.2804H1028.93C1026.94 109.695 1015.78 119 1000.52 119ZM980.79 79.2977H1016.89C1016.4 68.7518 1009.7 61.3077 1000.14 61.3077C989.103 61.3077 982.403 68.5037 980.79 79.2977Z\" fill=\"currentColor\"></path>\n<path d=\"M925.172 117.015V52.4987H937.207V64.7816C941.425 56.0968 950.234 51.7543 963.013 51.7543V63.5409C947.752 63.5409 937.207 69 937.207 80.6625V117.015H925.172Z\" fill=\"currentColor\"></path>\n<path d=\"M906.66 52.4987V117.015H894.129V105.973C889.538 113.789 881.97 119 871.3 119C855.667 119 847.727 109.447 847.727 90.9603V52.4987H860.382V90.5881C860.382 101.382 865.717 108.206 875.022 108.206C886.436 108.206 894.129 98.1563 894.129 84.3846V52.4987H906.66Z\" fill=\"currentColor\"></path>\n<path d=\"M830.073 116.891C811.587 118.628 801.785 117.883 802.157 99.6451V63.665H788.386V52.4988H802.157V35.129H814.813V52.4988H833.299V63.665H814.813V94.9305C814.813 105.6 815.309 106.965 830.073 105.849V116.891Z\" fill=\"currentColor\"></path>\n<path d=\"M718.228 117.015V52.4987H730.883V63.5409C735.474 55.7246 742.918 50.5136 753.588 50.5136C769.221 50.5136 777.285 60.067 777.285 78.5533V117.015H764.506V78.9255C764.506 68.1315 759.295 61.3077 749.866 61.3077C738.451 61.3077 730.883 71.3573 730.883 85.129V117.015H718.228Z\" fill=\"currentColor\"></path>\n<path d=\"M673.138 119C654.031 119 640.384 104.732 640.384 84.6327C640.384 64.6576 654.031 50.5136 673.138 50.5136C688.895 50.5136 702.17 62.3002 702.17 83.7642V88.727H653.411C654.28 100.514 661.227 108.578 673.138 108.578C681.823 108.578 687.654 103.491 688.895 98.2804H701.55C699.565 109.695 688.399 119 673.138 119ZM653.411 79.2977H689.515C689.019 68.7518 682.319 61.3077 672.766 61.3077C661.724 61.3077 655.024 68.5037 653.411 79.2977Z\" fill=\"currentColor\"></path>\n<path d=\"M591.939 117.015L562.286 52.4987H575.686L598.887 102.995L622.088 52.4987H635.611L605.959 117.015H591.939Z\" fill=\"currentColor\"></path>\n<path d=\"M475.064 119C460.3 119 453.228 109.695 453.228 99.8933C453.228 88.4789 463.029 81.531 482.012 79.4218L497.52 77.6848V73.9628C497.644 66.0223 493.054 61.3077 482.756 61.3077C472.955 61.3077 467.371 66.2705 467.371 74.335H455.461C455.461 59.3226 465.51 50.5136 483.004 50.5136C500.746 50.5136 510.175 59.1985 510.175 73.9628V100.886C510.175 106.221 511.168 108.082 516.255 107.586L516.007 116.519C504.22 119.868 499.009 115.03 498.265 104.856C494.667 113.789 486.726 119 475.064 119ZM477.793 109.074C488.587 109.074 496.9 99.6451 497.272 87.6104L485.61 88.8511C472.458 90.3399 465.759 93.5657 465.759 99.6451C465.759 104.112 468.86 109.074 477.793 109.074Z\" fill=\"currentColor\"></path>\n<path d=\"M423.078 117.015V19H435.733V117.015H423.078Z\" fill=\"currentColor\"></path>\n<path d=\"M375.566 119C356.459 119 342.812 104.732 342.812 84.6327C342.812 64.6576 356.459 50.5136 375.566 50.5136C394.797 50.5136 408.444 64.6576 408.444 84.6327C408.444 104.732 394.797 119 375.566 119ZM375.566 108.206C387.352 108.206 395.665 98.4044 395.665 84.6327C395.665 70.9851 387.352 61.3077 375.566 61.3077C363.903 61.3077 355.591 70.9851 355.591 84.6327C355.591 98.4044 363.903 108.206 375.566 108.206Z\" fill=\"currentColor\"></path>\n<path d=\"M320.721 42.6973C315.634 42.6973 311.664 38.8511 311.664 33.7643C311.664 28.8015 315.634 24.8313 320.721 24.8313C325.808 24.8313 329.654 28.8015 329.654 33.7643C329.654 38.8511 325.56 42.6973 320.721 42.6973ZM314.518 117.015V52.4988H327.049V117.015H314.518Z\" fill=\"currentColor\"></path>\n<path d=\"M261.653 117.015L232 52.4987H245.4L268.6 102.995L291.801 52.4987H305.325L275.672 117.015H261.653Z\" fill=\"currentColor\"></path>\n</g>";
const RATIO = 1100 / 156;

/** Viola Ventures wordmark. Set `height` (px); width follows the aspect ratio. */
function Wordmark({
  height = 24,
  title = "Viola Ventures",
  className = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1100 156",
    width: height * RATIO,
    height: height,
    fill: "currentColor",
    role: "img",
    "aria-label": title,
    className: className,
    style: {
      display: "block",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: INNER
    }
  }, rest));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.apt-footer{
  background:var(--color-black); color:var(--color-white);
  padding:60px var(--content-gutter) 40px;
  font-family:var(--font-sans);
}
.apt-footer__signature{
  font-family:var(--font-serif); font-weight:400;
  font-size:clamp(2.75rem, 7vw, 6rem); line-height:0.98; letter-spacing:-0.02em;
  margin:0 0 64px; max-width:16ch; text-wrap:balance;
}
.apt-footer__top{ display:flex; flex-wrap:wrap; gap:60px; justify-content:space-between; }
.apt-footer__brand{ max-width:320px; }
.apt-footer__brand svg{ color:var(--color-white); }
.apt-footer__tag{ font-family:var(--font-sans); font-size:var(--text-sm); color:rgba(249,249,240,0.6); margin-top:18px; line-height:1.5; }
.apt-footer__cols{ display:flex; flex-wrap:wrap; gap:48px; }
.apt-footer__col h4{
  font-family:var(--font-mono); font-size:var(--text-2xs); text-transform:uppercase;
  letter-spacing:0.03em; color:rgba(249,249,240,0.5); margin:0 0 16px; font-weight:400;
}
.apt-footer__col ul{ list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:10px; }
.apt-footer__col a{ color:var(--color-white); font-size:var(--text-sm); text-decoration:none; opacity:0.85; }
.apt-footer__col a:hover{ opacity:0.55; }
.apt-footer__bottom{
  display:flex; flex-wrap:wrap; gap:20px; align-items:center; justify-content:space-between;
  margin-top:56px; padding-top:24px; border-top:1px solid rgba(255,255,255,0.15);
}
.apt-footer__social{ display:flex; gap:8px; }
.apt-footer__social a{
  display:inline-flex; align-items:center; justify-content:center;
  width:40px; height:40px; border-radius:var(--radius-full); border:1px solid rgba(255,255,255,0.2);
  color:var(--color-white); transition:background var(--duration-fast) var(--ease-in-out), color var(--duration-fast) var(--ease-in-out);
}
.apt-footer__social a:hover{ background:var(--color-white); color:var(--color-black); }
.apt-footer__legal{ font-family:var(--font-mono); font-size:var(--text-2xs); text-transform:uppercase; letter-spacing:0.03em; color:rgba(249,249,240,0.5); }
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "footer");
  el.textContent = CSS;
  document.head.appendChild(el);
}
const DEFAULT_COLS = [{
  heading: "Firm",
  links: ["Approach", "Team", "News", "Contact"]
}, {
  heading: "Founders",
  links: ["Portfolio", "Process", "Design partners", "Get in touch"]
}, {
  heading: "More",
  links: ["Careers", "Perspectives", "Co-investors", "Ecosystem"]
}];
const DEFAULT_SOCIALS = ["x", "linkedin"];

/** Site footer — dark, with link columns, social row and legal line. */
function Footer({
  columns = DEFAULT_COLS,
  socials = DEFAULT_SOCIALS,
  tagline = "In it. Together.",
  signature = "",
  className = "",
  ...rest
}) {
  useStyle();
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: ["apt-footer", className].filter(Boolean).join(" ")
  }, rest), signature ? /*#__PURE__*/React.createElement("p", {
    className: "apt-footer__signature"
  }, signature) : null, /*#__PURE__*/React.createElement("div", {
    className: "apt-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "apt-footer__brand"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    height: 26
  }), /*#__PURE__*/React.createElement("p", {
    className: "apt-footer__tag"
  }, tagline)), /*#__PURE__*/React.createElement("div", {
    className: "apt-footer__cols"
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    className: "apt-footer__col",
    key: c.heading
  }, /*#__PURE__*/React.createElement("h4", null, c.heading), /*#__PURE__*/React.createElement("ul", null, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, l)))))))), /*#__PURE__*/React.createElement("div", {
    className: "apt-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", {
    className: "apt-footer__legal"
  }, "\xA9 ", new Date().getFullYear(), " Viola Ventures"), /*#__PURE__*/React.createElement("div", {
    className: "apt-footer__social"
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s,
    size: 16
  }))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.apt-nav{
  display:flex; align-items:center; gap:24px;
  height:60px; padding:8px 8px 8px 20px; width:100%; max-width:560px;
  background:var(--surface-100); border:1px solid var(--border);
  border-radius:var(--radius-full);
}
.apt-nav__logo{ display:flex; align-items:center; color:var(--inverted-100); flex-shrink:0; }
.apt-nav__links{ display:flex; align-items:center; gap:4px; margin:0; padding:0; list-style:none; }
.apt-nav__link{
  display:inline-flex; align-items:center; gap:4px; padding:6px 10px;
  font-family:var(--font-mono); font-size:var(--text-xs); letter-spacing:0.03em;
  color:var(--inverted-100); background:none; border:0; cursor:pointer;
  border-bottom:1px solid transparent; transition:border-color var(--duration-fast) var(--ease-in-out);
}
.apt-nav__link:hover{ border-bottom-color:var(--inverted-100); }
.apt-nav__spacer{ flex:1; }
@media (max-width:640px){ .apt-nav__links{ display:none; } }
`;
let injected = false;
function useStyle() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-apt", "nav");
  el.textContent = CSS;
  document.head.appendChild(el);
}
const DEFAULT_ITEMS = ["Approach", "Portfolio", "Team"];

/** Floating pill navigation bar — the site's primary header. */
function NavBar({
  items = DEFAULT_ITEMS,
  ctaLabel = "Connect",
  ctaHref = "#",
  className = "",
  ...rest
}) {
  useStyle();
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["apt-nav", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("a", {
    className: "apt-nav__logo",
    href: "#",
    "aria-label": "Viola Ventures home"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    height: 22
  })), /*#__PURE__*/React.createElement("ul", {
    className: "apt-nav__links"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("button", {
    className: "apt-nav__link",
    type: "button"
  }, it, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "keyboard-arrow-down",
    size: 14
  }))))), /*#__PURE__*/React.createElement("span", {
    className: "apt-nav__spacer"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    href: ctaHref
  }, ctaLabel));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* Viola Ventures website UI kit — homepage sections, composed from the
   design-system bundle. Loaded after _ds_bundle.js, so components live on
   the namespace. */
const DS = window.AptosDesignSystem_1112d2;
const {
  NavBar,
  Footer,
  Button,
  IconButton,
  Card,
  Tag,
  StatBlock,
  Marquee,
  Accordion,
  ThemeToggle
} = DS;
const THREE_CS = [{
  title: "Clarity",
  desc: "Before scaling, we pressure-test product-market fit, sharpen ICP definition, and tighten GTM motion — so the founding team knows exactly what to do next.",
  link: "How we sharpen clarity"
}, {
  title: "Customers",
  desc: "We put founders in front of real buyers quickly — from design partners who shape the product to first paying customers and a repeatable sales motion.",
  link: "Meet the right buyers"
}, {
  title: "Capital",
  desc: "Funding is one piece of the puzzle. We help assemble the early syndicate, advisers, and talent — and position founders for the right investor-fits in later rounds.",
  link: "The right next capital"
}];
function HomePage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "site-header"
  }, /*#__PURE__*/React.createElement(NavBar, null)), /*#__PURE__*/React.createElement("div", {
    className: "header-tools"
  }, /*#__PURE__*/React.createElement(ThemeToggle, null)), /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__grid"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Early moves matter."), /*#__PURE__*/React.createElement("div", {
    className: "hero__aside"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero__lede"
  }, "We partner with founders \u2014 first-time or repeat \u2014 building what doesn't fully exist yet: visionaries creating new categories or reshaping existing ones, tackling real problems in markets that matter."), /*#__PURE__*/React.createElement("div", {
    className: "hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Meet the team"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    trailingCircle: true,
    icon: "arrow-forward"
  }, "Read our approach"))))), /*#__PURE__*/React.createElement("section", {
    className: "section--tight",
    style: {
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    variant: "mono",
    separator: "/",
    items: ["Spark moment", "Momentum", "Clarity", "Customers", "Capital", "In step", "Conviction-led", "Less noise, more signal"]
  })), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "In step at the moments that change your trajectory."), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Our approach")), /*#__PURE__*/React.createElement("div", {
    className: "approach-grid"
  }, THREE_CS.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    variant: "dark",
    eyebrow: "The 3Cs",
    title: c.title,
    description: c.desc,
    linkLabel: c.link
  }, /*#__PURE__*/React.createElement("div", {
    className: "mesh",
    "aria-hidden": "true"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section statement"
  }, /*#__PURE__*/React.createElement("span", {
    className: "statement__eyebrow"
  }, "Signal"), /*#__PURE__*/React.createElement("h2", {
    className: "statement__quote"
  }, "Nothing creates signal faster than the right customers."), /*#__PURE__*/React.createElement("p", {
    className: "statement__sub"
  }, "Know the buyers, the bottlenecks, and what it takes to win. We enter after the first spark \u2014 when tangible potential has emerged, but before the path is obvious \u2014 and move decisively when it counts."), /*#__PURE__*/React.createElement("div", {
    className: "statement__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    trailingCircle: true,
    icon: "arrow-forward"
  }, "How we partner"))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-grid"
  }, /*#__PURE__*/React.createElement("h2", null, "For founders"), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: "When do you invest?",
      content: "After the first spark — where tangible potential has emerged but the signal isn't yet clear and the path isn't obvious. And when swift, decisive motion needs to happen."
    }, {
      title: "How do you work with founders?",
      content: "Hands-on commitment: a day-in, day-out partnership geared toward separating signal from noise, staying focused on what matters most, and leveraging deep experience on the path to scaling."
    }, {
      title: "Who do you partner with?",
      content: "Founders — first-time or repeat — building what doesn't fully exist yet: visionaries creating new categories or reshaping existing ones in complex markets that matter."
    }, {
      title: "What do you help with first?",
      content: "Clarity, customers, and capital. We sharpen PMF and GTM, open doors to real buyers, and help assemble the early syndicate, advisers, and talent."
    }]
  }))), /*#__PURE__*/React.createElement(Footer, null));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.PATTERN_PRESETS = __ds_scope.PATTERN_PRESETS;

__ds_ns.Pattern = __ds_scope.Pattern;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
