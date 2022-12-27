/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      gray: {
        75: "#b0b0b0",
        100: "#808080",
        200: "#7A7A7A",
        300: "#747474",
        400: "#6F6F6F",
        500: "#696969",
        600: "#646464",
        700: "#5E5E5E",
        800: "#595959",
        900: "#535353",
      },
      amber: "#ff9900",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
