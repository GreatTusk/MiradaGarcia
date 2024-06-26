const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      'xs': '361px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary-color': "#2d3748",
        'secondary-color': '#0fa',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
