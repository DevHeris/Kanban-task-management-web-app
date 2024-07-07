/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { 'medium-grey-text': '#828fa3' },
      backgroundColor: {
        light: '#ffffff',
        container: '#f4f7fd',
        'blue-hover': '#635fc7',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
