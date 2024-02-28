/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      Color: {
        'primary': '#0D65F8',
        'secondary': '#FFF50C',
        'Redd': '#F99393',
      }
    },
  },
  plugins: [],
}

