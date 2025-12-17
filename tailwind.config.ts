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
        
        // --- Project Aura ---
        beige: {
          DEFAULT: "#F5F5F5", // Light, clean beige
          50: "#FFFFFF",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
        },
        rose: {
          DEFAULT: "#F43F5E", // Bright, vibrant rose
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
        },
        gold: {
          DEFAULT: "#D4AF37", // Classic, elegant gold
          500: "#D4AF37",
          600: "#C09E31",
          700: "#A98A2A",
        },
        grey: {
          DEFAULT: "#808080",
          100: "#E5E7EB",
          200: "#D1D5DB",
          300: "#9CA3AF",
          400: "#6B7280",
          500: "#4B5563",
          600: "#374151",
          700: "#1F2937",
          800: "#111827",
          900: "#000000",
        },
        black: "#000000",
        white: "#FFFFFF",
        
        // Semantic colors
        danger: "rgb(var(--danger) / <alpha-value>)",
        warn: "rgb(var(--warn) / <alpha-value>)",
        ok: "rgb(var(--ok) / <alpha-value>)",
      },
      boxShadow: {
        "glow-rose": "0 0 20px 0 rgba(244, 63, 94, 0.3)",
        "glow-gold": "0 0 20px 0 rgba(212, 175, 55, 0.3)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
