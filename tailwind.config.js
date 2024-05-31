/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-primary': '#ff6c6c',
        primary: '#a52121',
        secondary: '#202020',
        'dark-primary': '#570707',
      },
    },
  },
  plugins: [],
};
