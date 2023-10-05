/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        graywhite:'#e4eff2',
        navyblue:'#263657',
        red:'#e92a4b',
        white:'#fff',
      },
    },
  },
  plugins: [],
}