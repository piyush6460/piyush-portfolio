import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131315",
        surface: "#131315",
        "surface-variant": "#353437",
        "surface-container": "#201f21",
        "surface-container-low": "#1c1b1d",
        "surface-container-high": "#2a2a2c",
        "surface-container-highest": "#353437",
        primary: "#bdc2ff",
        "primary-container": "#818cf8",
        "electric-violet": "#6366f1",
        secondary: "#bdc7d8",
        "text-heading": "#ffffff",
        "text-body": "#d1d5db",
        "on-surface-variant": "#c6c5d5",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "outline-variant": "#454653",
        "accent-glow": "rgba(99, 102, 241, 0.15)",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        geist: ["var(--font-geist)", "monospace"],
      },
      spacing: {
        "section-gap-desktop": "120px",
        "section-gap-mobile": "64px",
        "container-max": "1280px",
        gutter: "32px",
      },
      backgroundImage: {
        "grid-pattern": `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-down": "fadeDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
