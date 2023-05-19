/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        cardo: ["Cardo", "serif"],
      },
      colors: {
        'myWhite':'#ffffff',
        'myRed':'#e84545',
        'myBlack':'#2d3033',
        'myGray':'#6c7279',
        'myGray_lite':'#c5c9cc',
        'myCoffee':'#53354a',
        'footerBg':'#3a3e64',
        'footerBg_2':'#313454',
      },
    },
  },
  plugins: [],
};
