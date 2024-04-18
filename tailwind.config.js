/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "primary": "#a855f7",
        "light-primary": "rgb(216 180 254)",
        "dark-primary": "rgb(107 33 168)"
      }
    },
  },
  plugins: [],
};
