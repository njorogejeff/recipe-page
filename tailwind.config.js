/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        youngSerif: '"Young Serif", serif',
        outfit: '"Outfit", system-ui',
      },
      colors: {
        // Primary Colors
        recipeBrown: 'hsl(14, 45%, 36%)',
        recipeRose: 'hsl(332, 51%, 32%)',
        lightRecipeRose: 'hsl(330, 100%, 98%)',

        // Neutral Colors
        recipeWhite: 'hsl(0, 0%, 100%)',
        stone100: 'hsl(30, 54%, 90%)',
        stone150: 'hsl(30, 18%, 87%)',
        stone600: 'hsl(30, 10%, 34%)',
        stone900: 'hsl(24, 5%, 18%)',
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
      },
    },
  },
  plugins: [],
}

