module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      backgroundImage: theme => ({
        'desktop': "url('/images/homePage.webp')",
        'error': "url('/images/error.webp')",
       })
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }