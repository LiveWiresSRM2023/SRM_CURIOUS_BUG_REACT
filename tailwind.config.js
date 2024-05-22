/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],

  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("tw-elements-react/dist/plugin.cjs")
  ]
}