/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* brand */
        "imperial-green": {
          DEFAULT: "#037D43",
          600: "#037D43",
          700: "#026738",
        },
        yellow: {
          400: "#DAA520",
          500: "#B8860B",
          600: "#996515",
        },
        imperial: { 500: "#0ea5e9", 600: "#0284c7" },
        gold: { 500: "#f59e0b", 600: "#d97706" },

        /* dark modern theme */
        dark: {
          DEFAULT: "#0E0E0E",
          900: "#0B0B0B",
          800: "#111111",
          700: "#1A1A1A",
        },
        "text-primary": "#FFFFFF",
        "text-secondary": "#CFCFCF",
        accent: { DEFAULT: "#6A4CE8", light: "#8E73FF" },
        divider: "#222222",
      },
      fontFamily: {
        heading: ["Poppins", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      letterSpacing: { wide2: "0.08em" },
      spacing: { section: "6rem" },
      boxShadow: {
        "soft-glow": "0 10px 30px rgba(106,76,232,0.12)",
        "panel": "0 12px 30px rgba(2,6,23,0.6)",
      },
      borderRadius: { "xl-2": "1rem" },
    },
  },
  plugins: [],
};
