/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // colors
        'primary-color': '#edf2f8',
        'secondary-color': '#313bac',
        'black-color': '#030303',
        'lightGray-color': '#e4e4e4',
        'gray-color': '#6b7688',
        'brown-color': '#46364a',
        'white-color': '#ffffff',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
