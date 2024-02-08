/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        outFit: "'Outfit', sans-serif",
        youngSerif: "'Young Serif', serif"
      },
      colors: {
        // Primary Colors
        nutmegBrown: 'hsl(14, 45%, 36%)',
        darkRaspberry: 'hsl(332, 51%, 32%)',

        // Neutral Colors
        neutralWhite: 'hsl(0, 0%, 100%)',
        roseWhite: 'hsl(330, 100%, 98%)',
        neutralEggshell: 'hsl(30, 54%, 90%)',
        lightGrey: 'hsl(30, 18%, 87%)',
        wengeBrown: 'hsl(30, 10%, 34%)',
        darkCharcoal: 'hsl(24, 5%, 18%)',
      },
      screens: {
        sm: '375px',
        md: '480px',
        lg: '640px',
        xl: '768px',
        '2xl': '976px',
        '3xl': '1024px',
        '4xl': '1280px',
        '5xl': '1440px',
        '6xl': '1536px',
        '7xl': '1600px',
      }
    },
  },
  plugins: [],
}

