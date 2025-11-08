/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        imperial: {
          500: "#0ea5e9",
          600: "#0284c7",
        },
        gold: {
          500: "#f59e0b",
          600: "#d97706",
        }
      },
    },
  },
  plugins: [],
}