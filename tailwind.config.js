/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#E50914',
          black: '#141414',
          dark: '#000000',
          gray: {
            100: '#f8f8f8',
            200: '#e5e5e5',
            300: '#b3b3b3',
            400: '#808080',
            500: '#564d4d',
            600: '#333333',
            700: '#1a1a1a',
          }
        }
      },
      fontFamily: {
        netflix: ['Helvetica Neue', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}