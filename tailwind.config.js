/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   blue: "#00508D",
    //   white: "#FFFFFF",
    //   yellow: "#FFD12A",
    //   red: "#EF4339",
    // },
    extend: {
      colors: {
        sunny: "#FF6347",
        nav: "#FF904D",
      },
    },
  },
  plugins: [],
};
