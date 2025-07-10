/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 🔥 this line enables dark mode via .dark class
  theme: {
    extend: {},
  },
  plugins: [],
}
