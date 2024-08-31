/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'below-sm': {'min': '500px'},
        'below-sm-2': '545px',
        'below-md': '975px', // Custom screen for below 'sm'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}