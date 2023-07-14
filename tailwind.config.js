/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "blue-50": "#ebf1fd",
        "blue-100": "#d7e2fb",
        "blue-200": "#c3d4fa",
        "blue-300": "#9cb7f6",
        "blue-400": "#608bf1",
        "blue-500": "#386eed",
        "blue-600": "#2d58be",
        "blue-700": "#274da6",
        "blue-800": "#162c5f",
        "blue-900": "#112147",
        "blue-950": "#060b18",
      },
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
