/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        title: ['Righteous', 'sans-serif'],
        dosis: ['Dosis', 'sans-serif'],
      },
      colors: {
        'cumecinza-100': '#F2F2F2',
        'cumeazul-100': '#D8EAEB',
        'cumeazul-700': '#3A3640',
        'cumemarrom-100': '#BFB699',
        'cumemarrom-500': '#59473C',
      },
      height: {
        100: '40rem',
        125: '50rem',
      },
      flexGrow: {
        2: '2',
      },
      screens: {
        'max-md': { max: '767px' },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
