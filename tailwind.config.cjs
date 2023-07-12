/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "JetBrains Mono", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["BN Tillsdale"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: ["class", '[data-theme="dark"]'],
};
