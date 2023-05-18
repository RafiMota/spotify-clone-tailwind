/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url("/assets/hero.jpg")'
      }
    },
  },
  plugins: [],
};
