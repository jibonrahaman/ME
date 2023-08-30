/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg':'#1f1f38',
        'btn': '#4db5ff',
        'light':'rgba(255,255,255,0.6)',
        'nav':'rgba(0,0,0,0.6)',
        'card':'rgba(71,181,255,0.4)',
      },fontFamily: {
        'pop': ['Poppins'],
      
      }
    },
  },
  plugins: [],
}