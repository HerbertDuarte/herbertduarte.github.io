/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-light': 'var(--primary-light)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'primary-dark': 'var(--primary-dark)',
        main: 'var(--main)',
        'main-smooth': 'var(--main-smooth)',
        letter: 'var(--letter)',
        'letter-smooth': 'var(--letter-smooth)',
        'main-dark': 'var(--main-dark)',
      },
    },
  },
  plugins: [],
};
