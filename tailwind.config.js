/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [{ pattern: /bg-|border-|drop-shadow/ }],
  theme: {
    screens: {
      desktop: "1100px",
    },
    extend: {
      colors: {
        whiteColor: "#FFFFFF",
        blackColor: "#000000",
        orangeColor: "#E8A744",
        mainBgColor: "#191919",
        bodyBgColor: "#3b413f",
        redColor: "#E52222",
        blueColor: "#5275F0",
        greenColor: "#5FCFA0",
        purpleColor: "#7E21CF",
        silverColor: "#C0C0C0",
      },
      fontSize: {
        top: ["60px", { fontWeight: "900" }],
        menu: ["20px", { fontWeight: "600" }],
        title: ["40px", { fontWeight: "900" }],
        mediumBold: ["35px", { fontWeight: "900" }],
        medium: ["35px", { fontWeight: "600" }],
        textBold: ["25px", { fontWeight: "600" }],
        text: ["20px"],
        textSmall: ["18px"],
        textSmallBold: ["18px", { fontWeight: "600" }],
      },
      fontFamily: {
        emphasizeEN: ["Monoton"],
      },
      dropShadow: {
        whiteColor: ["0 0 5px #fff", "0 0 10px #fff", "0 0 21px #FFFFFF"],
        orangeColor: ["0 0 5px #fff", "0 0 10px #fff", "0 0 21px #E8A744"],
        redColor: ["0 0 5px #fff", "0 0 10px #fff", "0 0 21px #E52222"],
        blueColor: ["0 0 5px #fff", "0 0 10px #fff", "0 0 21px #5275F0"],
        greenColor: ["0 0 5px #fff", "0 0 10px #fff", "0 0 21px #5FCFA0"],
        purpleColor: ["0 0 5px #fff", "0 0 10px #fff", "0 0 21px #7E21CF"],
      },

      animation: {
        fliker: "fliker 3s ease-in-out 4 both",
        dropDown: "dropDown .2s ease",
      },
      keyframes: {
        fliker: {
          "0%": {
            color: "#FFFFFF",
            textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 21px #FFFFFF",
          },
          "80%": {
            color: "#FFFFFF",
            textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 21px #FFFFFF",
          },
          "81%": { color: "#000000", textShadow: "none" },
          "94%": { color: "#000000", textShadow: "none" },
          "95%": {
            color: "#FFFFFF",
            textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 21px #FFFFFF",
          },
          "96%": { color: "#000000", textShadow: "none" },
          "97%": {
            color: "#FFFFFF",
            textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 21px #FFFFFF",
          },
          "98%": {
            color: "#FFFFFF",
            textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 21px #FFFFFF",
          },
          "99%": { color: "#000000", textShadow: "none" },
          "100%": {
            color: "#FFFFFF",
            textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 21px #FFFFFF",
          },
        },

        dropDown: {
          "0%": { transform: "translateY(-100%) " },
          "100%": { transform: "translateY(0) " },
        },
      },
    },
  },
  plugins: [],
};
