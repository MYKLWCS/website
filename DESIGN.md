# Dollar Loans Website Design System

**Version:** 1.0
**Last Updated:** 2025-12-15

## Overview

This design system establishes a clean, modern, and professional aesthetic for the Dollar Loans website. The design emphasizes clarity, trust, and accessibility while maintaining a premium fintech appearance.

---

## Color Palette

### Primary Colors

The website uses a refined, sophisticated color scheme:

| Color | Purpose | Hex | RGB | Usage |
|-------|---------|-----|-----|-------|
| **White** | Primary Background | `#FFFFFF` | `255, 255, 255` | Page backgrounds, cards, primary surfaces |
| **Black** | Primary Text | `#111827` | `17, 24, 39` | Headings, body text, primary content |
| **Grey** | Secondary/Muted | `#6B7280` | `107, 114, 128` | Secondary text, captions, labels |
| **Light Grey** | Borders/Panels | `#E5E7EB` | `229, 231, 235` | Borders, dividers, subtle backgrounds |
| **Pink** | Primary Brand | `#EC4899` | `236, 72, 153` | Primary CTA buttons, links, accents |
| **Gold** | Secondary Brand | `#EAB308` | `234, 179, 8` | Secondary accents, premium features, highlights |

### Semantic Colors

| Purpose | Color | RGB |
|---------|-------|-----|
| Success | Green | `34, 197, 94` |
| Warning | Gold | `234, 179, 8` |
| Error/Danger | Red | `239, 68, 68` |

### Color Usage Guidelines

1. **White Background**: All pages should have a pure white (`#FFFFFF`) background for maximum clarity
2. **Text Hierarchy**:
   - Primary text: Black (`#111827`)
   - Secondary text: Grey (`#6B7280`)
   - Disabled text: Light Grey (`#9CA3AF`)
3. **Brand Colors**:
   - **Pink**: Use for primary CTAs, active states, and important interactive elements
   - **Gold**: Use for premium features, secondary CTAs, and special highlights
4. **Contrast**: Ensure WCAG AA compliance (4.5:1 for normal text, 3:1 for large text)

---

## Typography

### Font Stack

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Type Scale

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| **Hero** | 48px / 3rem | 700 (Bold) | 1.1 | Hero headlines |
| **H1** | 36px / 2.25rem | 600 (SemiBold) | 1.2 | Page titles |
| **H2** | 24px / 1.5rem | 600 (SemiBold) | 1.3 | Section headings |
| **H3** | 20px / 1.25rem | 600 (SemiBold) | 1.4 | Subsection headings |
| **Body Large** | 16px / 1rem | 400 (Regular) | 1.6 | Large body text |
| **Body** | 14px / 0.875rem | 400 (Regular) | 1.6 | Standard body text |
| **Small** | 12px / 0.75rem | 400 (Regular) | 1.5 | Captions, labels |
| **Tiny** | 10px / 0.625rem | 600 (SemiBold) | 1.4 | Micro-labels, badges |

### Typography Guidelines

1. **Tracking (Letter Spacing)**:
   - Headlines: `-0.025em` (tight)
   - Labels/Tiny text: `0.05em` (wide)
   - Body: Default
2. **Font Smoothing**: Apply `-webkit-font-smoothing: antialiased` for crisp rendering
3. **Hierarchy**: Use size, weight, and color to establish clear visual hierarchy

---

## Spacing System

Use a consistent 4px base unit spacing system:

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight spacing, icon gaps |
| `sm` | 8px | Small component padding |
| `md` | 16px | Standard component padding |
| `lg` | 24px | Section spacing |
| `xl` | 32px | Large section spacing |
| `2xl` | 48px | Extra large section spacing |
| `3xl` | 64px | Hero spacing |

---

## Layout & Grid

### Container

- **Max Width**: 1280px
- **Padding**: 24px (mobile), 32px (tablet+)
- **Centering**: `margin: 0 auto`

### Grid System

- **Columns**: 12-column grid
- **Gap**: 24px
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Section Spacing

- **Between sections**: 64px (mobile), 96px (desktop)
- **Within sections**: 32px - 48px

---

## Components

### Buttons

#### Primary Button
- **Background**: Pink (`#EC4899`)
- **Text**: White
- **Padding**: 12px 24px
- **Border Radius**: 12px
- **Font**: 14px, 600 weight
- **Hover**: Darken by 10%
- **Shadow**: Subtle elevation

#### Secondary Button
- **Background**: White
- **Border**: 1px solid Light Grey
- **Text**: Black
- **Padding**: 12px 24px
- **Border Radius**: 12px
- **Hover**: Background to Light Grey

#### Tertiary Button
- **Background**: Transparent
- **Text**: Black
- **Padding**: 12px 24px
- **Hover**: Background to Light Grey

### Cards

```css
.card {
  background: white;
  border: 1px solid rgba(229, 231, 235, 0.7);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.card-hover {
  transition: all 200ms ease;
}

.card-hover:hover {
  border-color: rgba(229, 231, 235, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

### Inputs

- **Height**: 44px (touch-friendly)
- **Padding**: 12px 16px
- **Border**: 1px solid Light Grey
- **Border Radius**: 8px
- **Focus**: Pink border, subtle glow
- **Font**: 14px

### Panels

Light grey background panels for secondary content:
- **Background**: `rgba(249, 250, 251, 0.45)`
- **Border**: 1px solid `rgba(229, 231, 235, 0.7)`
- **Border Radius**: 16px

---

## Images & Media

### Image Guidelines

1. **No Backgrounds**: All product images, icons, and graphics should have transparent backgrounds (PNG/SVG)
2. **Format**:
   - Icons: SVG (preferred)
   - Images: WebP with PNG fallback
   - Max size: 1MB per image
3. **Responsive**: Use `srcset` for different screen densities
4. **Loading**: Lazy load images below the fold
5. **Alt Text**: Always include descriptive alt text

### Image Treatment

```css
.image-clean {
  background: transparent;
  mix-blend-mode: multiply; /* For seamless integration */
}
```

### Icons

- **Size**: 16px (small), 20px (medium), 24px (large)
- **Stroke Width**: 1.5px - 2px
- **Style**: Outlined (preferred) or solid
- **Color**: Inherit from parent or use brand colors

---

## UI/UX Principles

### 1. Clarity First
- Clear visual hierarchy
- Generous white space
- Obvious interactive elements
- No clutter

### 2. Trust & Transparency
- Clean, professional appearance
- Clear CTAs
- Honest copy
- Compliance-first design

### 3. Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Sufficient color contrast
- Touch-friendly targets (44px minimum)

### 4. Performance
- Fast page loads (< 3s)
- Optimized images
- Minimal animations (respect `prefers-reduced-motion`)
- Progressive enhancement

### 5. Consistency
- Reusable components
- Consistent spacing
- Predictable interactions
- Unified visual language

---

## Interaction Patterns

### Hover States
- **Buttons**: Background color change, subtle lift
- **Cards**: Border emphasis, shadow increase
- **Links**: Underline, color shift to Pink

### Focus States
- **Visible outline**: 2px solid Pink
- **Offset**: 2px from element
- **Never remove**: Always show focus indicators

### Transitions
- **Duration**: 150ms - 250ms
- **Easing**: `ease-out` for entrances, `ease-in` for exits
- **Properties**: Transform, opacity, color (avoid animating layout properties)

### Loading States
- **Skeleton screens**: For content loading
- **Spinners**: For actions/submissions
- **Progress bars**: For multi-step processes

---

## Responsive Design

### Mobile First
Design for mobile screens first, then enhance for larger screens.

### Breakpoints
```css
/* Mobile: Default (< 768px) */
/* Tablet: 768px */
@media (min-width: 768px) { }

/* Desktop: 1024px */
@media (min-width: 1024px) { }

/* Large Desktop: 1280px */
@media (min-width: 1280px) { }
```

### Mobile Considerations
- Touch targets: Minimum 44px × 44px
- Readable font sizes: 14px minimum for body text
- Single column layouts
- Simplified navigation

---

## Design Tokens (CSS Variables)

```css
:root {
  /* Colors */
  --bg: 255 255 255;              /* White */
  --panel: 249 250 251;           /* Light gray panel */
  --border: 229 231 235;          /* Light gray border */
  --fg: 17 24 39;                 /* Black text */
  --muted: 107 114 128;           /* Gray muted */
  --grey: 156 163 175;            /* Medium gray */
  --brand: 236 72 153;            /* Pink */
  --brand2: 234 179 8;            /* Gold */
  --danger: 239 68 68;            /* Red */
  --warn: 234 179 8;              /* Gold */
  --ok: 34 197 94;                /* Green */

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 10px 24px rgba(0, 0, 0, 0.12);
}
```

---

## Page Templates

### Marketing Page Template
```
1. Header (sticky navigation)
2. Hero section (large headline + CTA)
3. Content sections (alternating layout)
4. Trust indicators
5. FAQ section
6. Footer
```

### Dashboard Page Template
```
1. Dashboard header (breadcrumbs, user menu)
2. Page title + description
3. Main content area
4. Sidebar (if needed)
5. Footer (minimal)
```

---

## Brand Voice & Tone

### Visual Tone
- **Clean**: Uncluttered, spacious layouts
- **Modern**: Contemporary design patterns
- **Professional**: Trustworthy, premium appearance
- **Approachable**: Friendly, not intimidating
- **Crisp**: Sharp, well-defined edges and typography

### Design Adjectives
- Elegant
- Minimal
- Confident
- Transparent
- Polished

---

## Quality Checklist

Before deploying any page, verify:

- [ ] White background on all pages
- [ ] Colors match palette (White, Black, Grey, Pink, Gold)
- [ ] Images have no backgrounds
- [ ] Proper text hierarchy
- [ ] Consistent spacing
- [ ] Mobile responsive
- [ ] Touch targets are 44px minimum
- [ ] WCAG AA contrast ratios
- [ ] Loading states implemented
- [ ] Hover/focus states working
- [ ] No console errors
- [ ] Fast page load (< 3s)

---

## Tools & Resources

### Design Tools
- Figma (design mockups)
- TailwindCSS (utility framework)
- Heroicons (icon library)

### Testing Tools
- Chrome DevTools (responsive testing)
- WebAIM Contrast Checker (accessibility)
- Lighthouse (performance & accessibility)
- WAVE (accessibility evaluation)

### References
- [TailwindCSS Documentation](https://tailwindcss.com)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design (spacing reference)](https://material.io/design)

---

## Maintenance

This design system is a living document. Update it when:
- New components are created
- Color palette changes
- Layout patterns evolve
- Accessibility requirements change

**Document Owner**: Development Team
**Review Frequency**: Quarterly
