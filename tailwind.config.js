const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  theme: {
    screens: {
      'xs': '361px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary-color': '#0fa',
        'secondary-color': '#f0f',
      }
    },
  },
  plugins: [],
}
