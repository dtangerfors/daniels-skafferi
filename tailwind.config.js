/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['0.9rem', '1.6em'],
      base: ['1rem', '1.6em'],
      lg: ['1.333rem', '1.2em'],
      xl: ['1.777rem', '1.2em'],
      '2xl': ['2.369rem', '1.2em'],
      '3xl': ['3.157rem', '1.2em'],
      '4xl': ['4.209rem', '1.2em'],
    },
    extend: {
      colors: {
        secondary: '#F0F0EC',
        primary: '#436F68',
        tertiary: '#aeb88a',
      },
      spacing: {
        full: '100%',
        5.5: '1.375rem',
        18: '4.5rem',
      },
      zIndex: {
        1: '1',
        '-1': '-1',
        2: '2',
      },
      transitionDuration: {
        5000: '5000ms',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Gambarino', 'serif']

      },
      backgroundImage: {
        'gradient-primary-secondary':
          'linear-gradient(to bottom, #436F68 50%, #F0F0EC 50%)',
        'gradient-secondary-white':
          'linear-gradient(to bottom, #F0F0EC 50%, #FFF 50%)',
        'wave': 'url(/images/halfcircle.svg)',
        'wave-beige': 'url(/images/halfcircle-beige.svg)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}