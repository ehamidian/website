/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      primary1: '#057E81', 
      primary2: 'FDC75F',
      darkPrimary1: '055466', 
      lightPrimary2: 'FFEDC9',
      darkRed: '9E3F3E',
    },

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }  
    },

  },

  variants: {},
  plugins: [require('@tailwindcss/typography'),
],
};

module.exports = config;
