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
        navy: "#1B3A6B",
        "navy-dark": "#122851",
        "navy-light": "#2A4F8C",
        slate: "#6B7A8D",
        "slate-light": "#9AAABB",
        orange: "#C45C2A",
        "orange-light": "#D97340",
        cream: "#F8F6F1",
        text: "#1A1E27",
        "text-muted": "#5A6272",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        nav: "0.12em",
      },
    },
  },
  plugins: [],
};
export default config;
