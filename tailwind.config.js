/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': "5px 17px 120px -25px rgba(0, 0, 0, 0.10);"
      },
      colors:{
        dark: {
          100: "#1A1A1A",
          200: "#303030",
          300: "#585858",
          400: "#909090",
        },
        light : {
          100: "#FAFAFA",
          200: "#E8E8E8",
          300: "#DBDBDB"
        },
        magentas: {
          100: "#BE30BE",
          200: "#E7A1E7",
          300: "#F5D6F5"
        },
        skyblue: {
          100: '#6FE7F7',
        }
        
      }
    },
  },
  plugins: [],
}

