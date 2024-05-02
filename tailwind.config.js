/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '96': '96rem', // Add a new utility class with a maximum width of 96rem
      }
    },
  },
  plugins: [],
}

