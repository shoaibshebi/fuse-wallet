/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeClr: "#F2F2F2",
      },
      fontFamily: {
        mona: ["Mona-Sans"],
      },
    },
  },
  plugins: [],
});
