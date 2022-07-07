module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ['jost', 'cursive']
    },
    screens: {
      xxs: '200px',
      xs: '400px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      textColor: ['active'],
      colors: {
        primary: {
          100: '#76C9EE',
          200: '#373199'
        },
        secondary: {
          100: '#000000'
        },
        purple: {
          100: '#7520FF',
          200: '#5B1ACE',
          300: '#5806DD'
        },
        green: {
          100: '#40FF9F'
        },
        pink: {
          100: '#CDB3D9'
        },
        red: {
          100: '#FE354A'
        },
        white: {
          100: '#FFFFFF'
        },
        whitesmoke: {
          100: '#F2F2F2'
        },
        black: {
          100: '#100A31',
          200: '#26242A',
          300: '#000000'
        },

        hoverButton: {
          100: '#8d81c9'
        },
        common: { 100: '#2e2e2e' },
        uncommon: { 100: '#ababab' },
        rare: { 100: '#ffca00' },
        mythic: { 100: '#ff8600' },
        special: { 100: '#fd6ee1' },
        basic: { 100: '#000000' }
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
