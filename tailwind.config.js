/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(110, 50%, 70%)",
        secondary: "hsl(141, 43%, 62%)",
        tertiary: "hsl(163, 41%, 52%)",
      },
    },
  },
  plugins: [],
};
