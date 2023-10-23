/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*{.js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '640px',
        dektop: '1440px',
      }
    },
  },
  plugins: [],
}

