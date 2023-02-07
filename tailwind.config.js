/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(120, 38%, 12%)",
        secondary: "hsl(113, 33%, 26%)",
        tertiary: "hsl(92, 45%, 32%)",
      },
    },
  },
  plugins: [],
};
