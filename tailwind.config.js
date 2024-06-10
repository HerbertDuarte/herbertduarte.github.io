/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-light': '#ff6c6c',
        primary: '#a52121',
        secondary: '#111111',
        'primary-dark': '#360000',
        main: '#080808',
        'main-smooth': '#1f1f1f',
        letter: '#dddddd',
        'letter-smooth': '#969696',
      },
    },
  },
  plugins: [],
};
