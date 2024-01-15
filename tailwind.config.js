/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =withMT ({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'clash-display':['clash Display','sans-serif'],
        'clash-display2':['clash Display','sans-serif'],
        'archivo':['Archivo','sans-serif'],
      },
      colors: {
        TK: {
          background: '#131921',
          default: '#131921',
        },
      },
      backgroundImage:{
        'specialDay': "url('./src/assets/images/specialDay.png')",
        'homeImage':"url('./src/assets/images/homeImage.png')",
        'handicraft':"url('./src/assets/images/handcraft.png')",
        'trends':"url('./src/assets/images/trends.png')",
        'shop':"url('./src/assets/images/shop1.jpg')",
        'eternal':"url('./src/assets/images/all1.png')",
        'engagement':"url('./src/assets/images/all2.png')",
        'wedding':"url('./src/assets/images/all3.png')",
        'bridal':"url('./src/assets/images/all4.png')",
        'product':"url('./src/assets/images/Product.png)"


      }
    },
  },
  plugins: [],
});
