// @ts-check

/** @type {import('tailwindcss').Config['theme']} */
const theme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-styles
  extend: {
    colors: {
      primary: {
        50: '#fef2f0',
        100: '#fde6e2',
        200: '#fbc7bc',
        300: '#f9a795',
        400: '#f47a5f',
        500: '#ED4B24',
        600: '#d13816',
        700: '#ae2a10',
        800: '#8c1f0c',
        900: '#721808',
      },
      secondary: {
        50: '#f0f4f8',
        100: '#d9e2ea',
        200: '#b3c2d1',
        300: '#8da2b8',
        400: '#67829f',
        500: '#02182E',
        600: '#011525',
        700: '#01111c',
        800: '#000d13',
        900: '#00090a',
      },
      background: {
        DEFAULT: '#020910',
        50: '#e6e7e9',
        100: '#cdd0d3',
        200: '#9ba1a7',
        300: '#68717a',
        400: '#232323',
        500: '#020910',
        600: '#01070c',
        700: '#010508',
        800: '#000304',
        900: '#000102',
      },
      card: {
        DEFAULT: '#675283',
        50: '#f7f5fa',
        100: '#efeaf4',
        200: '#dfd5ea',
        300: '#cfc0df',
        400: '#bfabd5',
        500: '#675283',
        600: '#0d0d0d',
      },
    },
  },
}

module.exports = {
  theme,
}
