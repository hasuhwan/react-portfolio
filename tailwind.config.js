/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [{ pattern: /bg-|border-|drop-shadow/ }],
  theme: {
    extend: {
      colors: {
        whiteColor: "#FFFFFF",
        blackColor: "#000000",
        orangeColor: "#E8A744",
        darkgreyColor: "#374151",
        redColor: "#E52222",
        blueColor: "#5275F0",
        greenColor: "#5FCFA0",
      },
      fontSize: {
        menu: ["20px", { fontWeight: "600" }],
        title: ["40px", { fontWeight: "900" }],
        text: ["20px", { fontWeight: "400" }],
      },
      fontFamily: {
        emphasizeEN: ["Monoton"],
        emphasizeKO: ["Orbit"],
      },
      dropShadow: {
        whiteColor: ["0 0 5px #fff", "0 0 10px #fff", "0 0 21px #FFFFFF"],
        orangeColor: ["0 0 5px #fff", "0 0 10px #fff", "0 0 21px #E8A744"],
        redColor: ["0 0 5px #fff", "0 0 10px #fff", "0 0 21px #E52222"],
        blueColor: ["0 0 5px #fff", "0 0 10px #fff", "0 0 21px #5275F0"],
        greenColor: ["0 0 5px #fff", "0 0 10px #fff", "0 0 21px #5FCFA0"],
      },
    },
  },
  plugins: [],
};
