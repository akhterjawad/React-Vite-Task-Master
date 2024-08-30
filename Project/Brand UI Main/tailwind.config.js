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
        'below-md': '973px', // Custom screen for below 'sm'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}