/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clay: {
          50:  "#fdf6ec",
          100: "#f9e4c8",
          200: "#f3c790",
          300: "#eca05a",
          400: "#e67c2e",
          500: "#C75B39",
          600: "#a84530",
          700: "#8a3326",
          800: "#6e261e",
          900: "#551c17",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
