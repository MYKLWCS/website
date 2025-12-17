# Dollar Loans "High-Tech" Design System

**Version:** 2.0 (The "Aura" Protocol)
**Theme:** Cyber / Dark / Metal / Glass
**Last Updated:** 2025-12-17

---

## 1. Core Philosophy

**"The Bank Vault of the Future."**

We are not a traditional lender. We are a decentralized-style vehicle equity platform.
The design must feel:
- **Impenetrable**: Heavy brushed metal, carbon fiber.
- **Transparent**: Glassmorphism, see-through panels.
- **Electric**: Neon pulses, live data, energy.
- **Premium**: Luxury car aesthetic (matte black, gold, chrome).

---

## 2. Color Palette

### Base (The Void)
| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#050505` | Deepest black background |
| `panel` | `#111111` | Card/Panel backgrounds |
| `metal` | `#1A1A1A` | Brushed metal surfaces |

### Neon Accents (The Energy)
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#00F3FF` | **Electric Cyan** (Main actions, glow) |
| `secondary` | `#BC13FE` | **Neon Violet** (Gradients, secondary actions) |
| `brand` | `#FACC15` | **24K Gold** (Luxury, money, success) |
| `danger` | `#FF0033` | **Laser Red** (Errors, alerts) |

---

## 3. Materials & Textures

### Glass (`.glass-panel`)
Used for all cards and floating elements.
```css
background: rgba(17, 17, 17, 0.6);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
```

### Neon Glow (`.text-glow`, `.box-glow`)
Used to emphasize key data points or active states.
```css
text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
```

### Grid Background (`.tech-grid`)
Subtle background pattern to give technical depth.
```css
background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), ...
```

---

## 4. Typography

### Headings: **Inter**
Bold, tight tracking, crisp.
`tracking-tighter`, `font-black`.

### Data/Tech: **JetBrains Mono**
Used for numbers, rates, code snippets, and "system status" indicators.
`font-mono`, `text-xs`.

---

## 5. UI Components

### Buttons
- **Neon Variant**: Solid Cyan background, black text, strong glow.
- **Glass Variant**: Transparent, white border, backdrop blur.
- **Gold Variant**: Gradient Gold background, metallic shine effect.

### Charts & Data
- Thin lines (1px).
- Gradient fills (Cyan to transparent).
- Glowing dots on data points.

### Imagery (Nano Banana Style)
- **Style**: Flat 2D, Vector-like, Cartoon-ish but Tech-themed.
- **Subjects**: Isometric digital cities, bank vaults, floating coins, futuristic dashboards.
- **Vibe**: "Kurzgesagt meets Cyberpunk".

---

## 6. Layout Principles

1.  **Bento Grids**: Content organized in grid-like bento boxes.
2.  **Floating Elements**: Nothing feels "stuck" to the background.
3.  **Contrast**: Extreme contrast between the deep black background and neon brights.
4.  **Motion**: constant subtle movement (slow pulses, shimmers, floating).