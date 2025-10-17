/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1A1A2E',
        'secondary-light': '#E9E9F0',
        // --- CHANGE THE HEX CODE HERE ---
        'accent-blue': '#FF0099', 
        // --------------------------------
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'slow-spin': 'spin 15s linear infinite',
      },
    },
  },
  plugins: [],
}