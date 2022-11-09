/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mediumSerifItalic: ["CharterItalic"],
        mediumSerif: ["Charter"],
      },
      boxShadow: {
        t: "0px 2px 10px rgb(0 0 0 / 15%)",
        b: "0px -2px 10px rgb(0 0 0 / 15%);",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".highlight-none": {
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
          "-moz-tap-highlight-color": "rgba(0,0,0,0)",
          "-o-tap-highlight-color": "rgba(0,0,0,0)",
          "-ms-tap-highlight-color": "rgba(0,0,0,0)",
        },
      });
    }),
  ],
};
// 0px 2px 10px rgb(0 0 0 / 15%)
