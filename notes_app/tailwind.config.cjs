/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["SFMono-Regular"],
      },
      colors: {
        "waikawa-gray": {
          50: "#f5f6fa",
          100: "#eaebf4",
          200: "#d0d4e7",
          300: "#a6b0d3",
          400: "#7686ba",
          500: "#6374ae",
          600: "#414f88",
          700: "#36406e",
          800: "#30395c",
          900: "#2c324e",
        },
      },
    },
  },
  plugins: [],
};
