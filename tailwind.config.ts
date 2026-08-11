import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050d1a",
          900: "#0a1628",
          800: "#0f2040",
          700: "#162d57",
        },
        accent: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          subtle: "#1d4ed8",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f8fafc",
          card: "#ffffff",
          border: "#e2e8f0",
        },
        ink: {
          DEFAULT: "#0f172a",
          secondary: "#475569",
          muted: "#94a3b8",
          light: "#cbd5e1",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 24px -4px rgba(0,0,0,0.10), 0 2px 8px -2px rgba(0,0,0,0.06)",
        "blue-glow": "0 0 20px rgba(37,99,235,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
