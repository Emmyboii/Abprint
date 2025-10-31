/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mk': '905px',
        'mq': '955px',
        'mz': '850px',
        'ww': '700px',
        'sk': '500px'
      }
    },
  },
  plugins: [],
}