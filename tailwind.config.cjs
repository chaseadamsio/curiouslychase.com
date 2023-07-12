/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Mono", "JetBrains Mono", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["BN Tillsdale"],
        // display: ["Palmer Lake"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: ["class", '[data-theme="dark"]'],
};
