/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      
      colors:{
        'deep-purple' : '#2A1B3D',
        'electric-blue' : '#00B4D8',
        'golden-honey' : '#FFB703',
        'cloud-white' : '#F8F9FA',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}