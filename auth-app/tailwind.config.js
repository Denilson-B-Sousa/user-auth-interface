/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "Montserrat": "Montserrat",
      },
      colors: {
        "active": '#28A4E3',
        "disabled": '#798A94'
      }
    },
  },
  plugins: [],
}

