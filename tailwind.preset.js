/** @type {import('tailwindcss').Config['theme']} */
module.exports = {
  darkMode: 'media',
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    divideStyle: true,
  },
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '16px',
    },
  },
};
