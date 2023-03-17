const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"],
  theme: {
    fontFamily:{
      montserrat:['Montserrat'],
      montserratlight:['Montserrat-Light'],
      montserratsemibold:['Montserrat-SemiBold']

      },
    extend: {
      backgroundImage:{
        'herosection':"url('http://localhost:3000/images/card/hero-bg-home1.png')"
      },
      backgroundColor:{
        'default-color':'#1ab700',
        'active-color':'#1e9316'
    }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}