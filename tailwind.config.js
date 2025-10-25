/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi-Variable', 'sans-serif'],
        satoshi: ['Satoshi-Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}