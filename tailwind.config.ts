import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        subtle: "rgb(var(--subtle) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        panelStrong: "rgb(var(--panel-strong) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        retro: {
          ink: "rgb(var(--retro-ink) / <alpha-value>)",
          paper: "rgb(var(--retro-paper) / <alpha-value>)",
          "paper-deep": "rgb(var(--retro-paper-deep) / <alpha-value>)",
          brick: "rgb(var(--retro-brick) / <alpha-value>)",
          teal: "rgb(var(--retro-teal) / <alpha-value>)",
          mint: "rgb(var(--retro-mint) / <alpha-value>)",
          sky: "rgb(var(--retro-sky) / <alpha-value>)",
          gold: "rgb(var(--retro-gold) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "#38bdf8",
          soft: "#22d3ee",
          strong: "#0ea5e9"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        mesh: "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at 80% 10%, rgba(34,211,238,0.12), transparent 50%), radial-gradient(circle at 50% 80%, rgba(99,102,241,0.16), transparent 45%)",
        glow: "radial-gradient(circle at center, rgba(56,189,248,0.12), transparent 65%)",
        noise: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/></filter><rect width='120' height='120' filter='url(%23n)' opacity='0.18'/></svg>\")"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56,189,248,0.22), 0 16px 40px rgba(56,189,248,0.16)",
        "soft-xl": "0 20px 60px rgba(0,0,0,0.45)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 2.2s linear infinite",
        pulseSoft: "pulseSoft 6s ease-in-out infinite"
      }
    }
  },
  plugins: [forms]
};

export default config;
