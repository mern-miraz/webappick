/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      screens:{
        sm:"640px",
        md:"786px",
        lg:"1024px",
        "2xl":"1280px"
      },
      padding : {
        DEFAULT: '1rem',
      }
    },
    extend: {
      boxShadow: {
        'greenShadow': '0px 42px 34px 0px rgba(82, 67, 194, 0.30)',
      },
    },

    fontFamily: {
      'popps': ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}