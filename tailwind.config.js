const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#121212',
        light: '#f5f5f5',
        primary: '#f8ca0e',
        // primaryDark: '#f8ca0e'
      },
      keyframes: {
        signatureAnimate: {
          to: {
            strokeDashoffset: 0,
          }
        },
      },
      animation: {
        signatureAnimate: 'signatureAnimate 1s linear forwards',
        signatureUnderlineAnimate: 'signatureAnimate 0.75s linear forwards 0.6s',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 5px, #1b1b1b 100px)',
        circularLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 80px)',
        circularDarkLg: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 5px, #1b1b1b 80px)',
        circularLightMd: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 60px)',
        circularDarkMd: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 5px, #1b1b1b 60px)',
        circularLightSm: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 40px)',
        circularDarkSm: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 5px, #1b1b1b 40px)',
        cardRadialGradient: 'radial-gradient(800px circle at 100px 100px, rgba(255,255,255,0.06), transparent 40%)',
        customLinear: 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(35,35,35,1) 100%);',
        customLinear2: 'linear-gradient(145deg, rgba(0,0,0,1) 0%, rgba(31,31,32,1) 50%, rgba(0,0,0,1) 100%);',
        customRadial: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(16,16,17,1) 50%, rgba(0,0,0,1) 100%);'
      },  
    },
    screens: {
      '2xl': { max: '1535px'},
      xl: { max: '1280px'},
      lg: { max: '1023px'},
      md: { max: '767px'},
      sm: { max: '639px'},
      xs: { max: '479px'},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
