/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1286c9",

          "secondary": "#99f3ff",

          "accent": "#68e888",

          "neutral": "#2A2433",

          "base-100": "#F7F7F8",

          "info": "#4E9BCA",

          "success": "#3FD997",

          "warning": "#FAD157",

          "error": "#F93E5D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}