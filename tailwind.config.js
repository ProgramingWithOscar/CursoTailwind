/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    fontFamily :{
      rale: ['Raleway']
    },
    extend: {
      colors: {
        danger: '#ff5f40',
        info: {
          100 : '#ff5f41'
        }
      }
    },
  },
  plugins: [],
}

