/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: { 
       screens: {
      'ss': { 'max': '412px' }, 
      'nn': { 'max': '431px' }, 
      'll': { 'max': '1024px' },
      'yy': { 'max': '1280px' },
      } 
    },
  },
  plugins: [],
}

