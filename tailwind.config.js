/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D65F8',
        'secondary': '#FFF50C',
        'redd': '#F99393',
        "last":"#251F72"
      },
      fontFamily: {
        'Kaushan':"Kaushan Script",
      }

    },
  },
  plugins: [],
}

