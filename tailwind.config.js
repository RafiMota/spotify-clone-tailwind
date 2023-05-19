/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins']
    },

    extend: {
      backgroundImage: {
        'hero': 'url("/assets/hero.jpg")'
      }
    },
  },
  plugins: [],
};
