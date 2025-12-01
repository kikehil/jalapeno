/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jalapeno-red': '#C41010',
        'jalapeno-yellow': '#FFCC00',
        'jalapeno-orange': '#FF5E00',
        'jalapeno-green': '#2EA043',
      },
      fontFamily: {
        'cartoon': ['Comic Sans MS', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

