import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        
        // --- Project Gilded Rose ---
        gold: {
          DEFAULT: "#B99555", // A rich, metallic gold
          50: "#FDFBF5",
          100: "#F9F4E6",
          200: "#F1E8CD",
          300: "#E9DBB4",
          400: "#DBC78F",
          500: "#CFAA6A",
          600: "#B99555",
          700: "#9E7B4A",
          800: "#83613F",
          900: "#684734",
          950: "#3F261A",
        },
        pink: {
          DEFAULT: "#EC4899", // Vibrant, energetic pink
          50: "#FDF2F8",
          100: "#FCE7F3",
          200: "#FBCFE8",
          300: "#F9A8D4",
          400: "#F472B6",
          500: "#EC4899",
          600: "#DB2777",
          700: "#BE185D",
          800: "#9D174D",
          900: "#831843",
          950: "#500724",
        },
        brown: {
          DEFAULT: "#43261A", // Dark, rich brown for text
          50: "#F7F5F4",
          100: "#EFECE9",
          200: "#E1D9D3",
          300: "#D3C6BD",
          400: "#B7A59A",
          500: "#9B8477",
          600: "#7F6354",
          700: "#634231",
          800: "#43261A",
          900: "#240F08",
          950: "#120704",
        },
        
        // Semantic colors
        danger: "rgb(var(--danger) / <alpha-value>)",
        warn: "rgb(var(--warn) / <alpha-value>)",
        ok: "rgb(var(--ok) / <alpha-value>)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--border) / 0.14), 0 18px 70px rgb(0 0 0 / 0.65), 0 0 60px rgb(var(--brand) / 0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 500ms ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
