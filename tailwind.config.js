/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: ["Poppins","sans-serif",]
    },
    screens: {
      'xs': {'max': '600px'}, // Add a custom breakpoint for screens <= 600px
    },

  },
  plugins: [],
}