/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Satoshi', 'sans-serif'],      // Headings
        'sans': ['Inter', 'system-ui', 'sans-serif'], // Body text
      },
      colors: {
        'deep-navy': '#0A1428',
        'electric-cyan': '#00B4D8',
        'brushed-silver': '#E5E7EB',
        'card-background': '#11223A',
        'footer': '#000000',
        'borders': '#334155',
      }
    },
  },
  plugins: [],
}