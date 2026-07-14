/* @ds-bundle: {"format":3,"namespace":"GuestyNebulaDesignSystem_5b9b9d","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardTitle","sourcePath":"components/core/Card.jsx"},{"name":"CardDescription","sourcePath":"components/core/Card.jsx"},{"name":"CardContent","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"AlertTitle","sourcePath":"components/feedback/Alert.jsx"},{"name":"AlertDescription","sourcePath":"components/feedback/Alert.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"c31e1d98999a","components/core/Button.jsx":"ed0d0b969d81","components/core/Card.jsx":"1fe33f52c7b3","components/core/Input.jsx":"79266503ac7a","components/feedback/Alert.jsx":"22b146e720f4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GuestyNebulaDesignSystem_5b9b9d = window.GuestyNebulaDesignSystem_5b9b9d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ── Badge — pill-shaped label component ───────────────────────────
   Distinct from Status. Use for tags, counts, and categorical labels
   on cards, nav items, and tables.
   Figma source: /Badge — borderRadius 9999, fontWeight 700, fontSize 12
   ─────────────────────────────────────────────────────────────────── */

const badgeVariants = {
  default: {
    /* Figma: rgb(32,83,248) — updated primary blue for Badge (distinct from teal primary) */
    background: 'rgb(32, 83, 248)',
    color: 'rgb(250, 250, 250)'
  },
  secondary: {
    /* Figma: rgb(244,244,245) */
    background: 'rgb(244, 244, 245)',
    color: 'rgb(31, 41, 55)'
  },
  outline: {
    /* Figma: transparent with inset border rgb(232,234,237) */
    background: 'transparent',
    color: 'rgb(31, 41, 55)',
    boxShadow: 'inset 0 0 0 1px rgb(232, 234, 237)'
  },
  destructive: {
    background: 'rgb(216, 0, 39)',
    color: 'rgb(250, 250, 250)'
  }
};
function Badge({
  variant = 'default',
  children,
  style,
  ...rest
}) {
  const vs = badgeVariants[variant] || badgeVariants.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 9999,
      padding: '2px 10px',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'var(--font-sans)',
      lineHeight: '16px',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      ...vs,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const btnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  whiteSpace: 'nowrap',
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  fontSize: '0.875rem',
  lineHeight: 1,
  borderRadius: 'var(--radius-lg)',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 120ms ease, opacity 120ms ease, box-shadow 120ms ease',
  outline: 'none',
  textDecoration: 'none',
  flexShrink: 0
};
const variants = {
  default: {
    background: 'var(--color-primary)',
    color: 'var(--color-primary-foreground)'
  },
  destructive: {
    background: 'var(--color-destructive)',
    color: 'var(--color-destructive-foreground)'
  },
  secondary: {
    background: 'var(--color-background)',
    color: 'var(--color-foreground)',
    border: '1px solid var(--color-border)',
    boxShadow: 'var(--shadow-sm)'
  },
  plain: {
    background: 'transparent',
    color: 'var(--color-foreground)'
  },
  'plain-primary': {
    background: 'transparent',
    color: 'var(--color-primary)'
  }
};
const sizes = {
  default: {
    height: '40px',
    padding: '0 16px'
  },
  sm: {
    height: '32px',
    padding: '0 12px',
    fontSize: '0.8125rem',
    gap: '6px'
  },
  lg: {
    height: '44px',
    padding: '0 32px',
    fontSize: '0.9375rem'
  },
  icon: {
    height: '40px',
    width: '40px',
    padding: '0'
  },
  'icon-sm': {
    height: '32px',
    width: '32px',
    padding: '0'
  }
};
const Spinner = () => /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 14 14",
  fill: "none",
  style: {
    animation: 'gst-spin 0.7s linear infinite',
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement("style", null, `@keyframes gst-spin { to { transform: rotate(360deg); } }`), /*#__PURE__*/React.createElement("circle", {
  cx: "7",
  cy: "7",
  r: "5.5",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeOpacity: "0.25"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 1.5A5.5 5.5 0 0 1 12.5 7",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}));
function Button({
  variant = 'default',
  size = 'default',
  isLoading = false,
  disabled = false,
  icon: Icon,
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const hoverOverlay = hovered && !disabled && !isLoading ? {
    opacity: 0.88
  } : {};
  const computedStyle = {
    ...btnBase,
    ...(variants[variant] || variants.default),
    ...(sizes[size] || sizes.default),
    ...(disabled || isLoading ? {
      opacity: 0.5,
      cursor: 'not-allowed',
      pointerEvents: 'none'
    } : {}),
    ...hoverOverlay,
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: computedStyle,
    disabled: disabled || isLoading,
    onMouseEnter: e => {
      setHovered(true);
      onMouseEnter?.(e);
    },
    onMouseLeave: e => {
      setHovered(false);
      onMouseLeave?.(e);
    }
  }, rest), isLoading && /*#__PURE__*/React.createElement(Spinner, null), !isLoading && Icon && /*#__PURE__*/React.createElement(Icon, {
    size: size === 'sm' ? 14 : 16
  }), size !== 'icon' && size !== 'icon-sm' && children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cardBase = {
  background: 'var(--color-card)',
  color: 'var(--color-card-foreground)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-sm)',
  fontFamily: 'var(--font-sans)'
};
function Card({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...cardBase,
      ...style
    }
  }, rest), children);
}
function CardHeader({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      padding: '24px',
      ...style
    }
  }, rest), children);
}
function CardTitle({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      ...style
    }
  }, rest), children);
}
function CardDescription({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-muted-foreground)',
      lineHeight: 1.5,
      ...style
    }
  }, rest), children);
}
function CardContent({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '0 24px 24px',
      ...style
    }
  }, rest), children);
}
function CardFooter({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px 24px',
      gap: '8px',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const inputBase = {
  display: 'block',
  width: '100%',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-sm)',
  color: 'var(--color-foreground)',
  background: 'transparent',
  border: '1px solid var(--color-input)',
  borderRadius: 'var(--radius-md)',
  outline: 'none',
  transition: 'box-shadow 120ms ease, border-color 120ms ease',
  boxSizing: 'border-box'
};
const sizes = {
  base: {
    height: '40px',
    padding: '0 12px'
  },
  sm: {
    height: '32px',
    padding: '0 10px',
    fontSize: 'var(--text-xs)'
  }
};
function Input({
  size = 'base',
  prefix,
  suffix,
  showClearButton = false,
  placeholder,
  disabled = false,
  style,
  onChange,
  value,
  defaultValue,
  type = 'text',
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const hasContent = currentValue !== '' && currentValue !== null && currentValue !== undefined;
  const handleChange = e => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };
  const handleClear = () => {
    if (!isControlled) setInternalValue('');
    onChange?.({
      target: {
        value: ''
      }
    });
  };
  const wrapperStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    border: `1px solid ${focused ? 'var(--color-ring)' : 'var(--color-input)'}`,
    borderRadius: 'var(--radius-md)',
    boxShadow: focused ? '0 0 0 2px color-mix(in srgb, var(--color-ring) 25%, transparent)' : 'none',
    background: disabled ? 'var(--color-muted)' : 'var(--color-background)',
    transition: 'box-shadow 120ms ease, border-color 120ms ease',
    opacity: disabled ? 0.5 : 1,
    ...(sizes[size] || sizes.base),
    padding: '0'
  };
  const innerInputStyle = {
    flex: 1,
    height: '100%',
    fontFamily: 'var(--font-sans)',
    fontSize: sizes[size]?.fontSize || 'var(--text-sm)',
    color: 'var(--color-foreground)',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    padding: prefix ? '0 8px' : `0 ${sizes[size]?.padding?.split(' ')[1] || '12px'}`,
    paddingLeft: prefix ? '4px' : sizes[size]?.padding?.split(' ')[1] || '12px',
    paddingRight: suffix || showClearButton ? '4px' : sizes[size]?.padding?.split(' ')[1] || '12px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrapperStyle
  }, prefix && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '12px',
      color: 'var(--color-muted-foreground)',
      flexShrink: 0
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: isControlled ? value : internalValue,
    defaultValue: isControlled ? undefined : undefined,
    onChange: handleChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    placeholder: placeholder,
    disabled: disabled,
    style: innerInputStyle
  }, rest)), showClearButton && hasContent && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleClear,
    style: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: '8px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--color-muted-foreground)',
      flexShrink: 0
    },
    "aria-label": "Clear input"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))), suffix && !showClearButton && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: '12px',
      color: 'var(--color-muted-foreground)',
      flexShrink: 0
    }
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const alertStyles = {
  neutral: {
    background: 'var(--color-muted)',
    color: 'var(--color-foreground)',
    border: '1px solid var(--color-border)'
  },
  information: {
    background: 'var(--color-information-foreground)',
    color: 'hsl(226,60%,20%)',
    border: '1px solid hsl(226,60%,80%)'
  },
  success: {
    background: 'var(--color-success-foreground)',
    color: 'hsl(143,60%,18%)',
    border: '1px solid hsl(143,60%,70%)'
  },
  warning: {
    background: 'var(--color-warning-foreground)',
    color: 'hsl(32,80%,22%)',
    border: '1px solid hsl(32,70%,70%)'
  },
  critical: {
    background: 'var(--color-destructive-foreground)',
    color: 'hsl(5,70%,25%)',
    border: '1px solid hsl(5,70%,75%)'
  }
};
const IconInfo = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 16v-4M12 8h.01"
}));
const IconCheck = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "m9 12 2 2 4-4"
}));
const IconWarn = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 9v4M12 17h.01"
}));
const IconAlert = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "m4.93 4.93 14.14 14.14"
}));
const IconX = () => /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18M6 6l12 12"
}));
const variantIcons = {
  neutral: IconAlert,
  information: IconInfo,
  success: IconCheck,
  warning: IconWarn,
  critical: IconAlert
};
function Alert({
  variant = 'neutral',
  children,
  dismissible = true,
  defaultOpen = true,
  open,
  onOpenChange,
  showIcon = true,
  icon,
  style,
  ...rest
}) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const handleClose = () => {
    if (!isControlled) setInternalOpen(false);
    onOpenChange?.(false);
  };
  if (!isOpen) return null;
  const IconComponent = icon ? () => icon : variantIcons[variant] || variantIcons.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      position: 'relative',
      width: '100%',
      borderRadius: 'var(--radius-lg)',
      padding: '14px 16px',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start',
      boxSizing: 'border-box',
      ...(alertStyles[variant] || alertStyles.neutral),
      ...style
    }
  }, rest), showIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: '1px'
    }
  }, /*#__PURE__*/React.createElement(IconComponent, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, children), dismissible && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleClose,
    "aria-label": "Close alert",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '2px',
      borderRadius: 'var(--radius-sm)',
      color: 'currentColor',
      opacity: 0.5,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      lineHeight: 1,
      transition: 'opacity 120ms'
    },
    onMouseEnter: e => e.currentTarget.style.opacity = '1',
    onMouseLeave: e => e.currentTarget.style.opacity = '0.5'
  }, /*#__PURE__*/React.createElement(IconX, null)));
}
function AlertTitle({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      margin: '0 0 2px',
      lineHeight: 1.4,
      ...style
    }
  }, rest), children);
}
function AlertDescription({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontSize: 'var(--text-sm)',
      margin: 0,
      lineHeight: 1.5,
      opacity: 0.9,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Alert, AlertTitle, AlertDescription });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.AlertTitle = __ds_scope.AlertTitle;

__ds_ns.AlertDescription = __ds_scope.AlertDescription;

})();
