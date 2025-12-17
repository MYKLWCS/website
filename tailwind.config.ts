import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Semantic Token Mapping
        bg: "rgb(var(--bg) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        "fg-muted": "rgb(var(--fg-muted) / <alpha-value>)",
        
        // Brand & Accents
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        
        // State
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        error: "rgb(var(--error) / <alpha-value>)",
        
        // High-Tech Specifics
        "tech-black": "#050505",
        "tech-zinc": "#1A1A1A",
        "tech-panel": "#111111",
        "neon-blue": "#00f3ff",
        "neon-purple": "#bc13fe",
      },
      fontFamily: {
        sans: ["var(--font-heading)", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, var(--primary) 0deg, var(--accent) 180deg, var(--primary) 360deg)',
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(var(--primary), 0.3)",
        "glow-accent": "0 0 40px -10px rgba(var(--accent), 0.3)",
      },
      keyframes: {
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.7s ease-out",
        "slide-left": "slide-left 0.5s ease-out",
        shimmer: "shimmer 3s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
      }
    }
  },
  plugins: []
} satisfies Config;
