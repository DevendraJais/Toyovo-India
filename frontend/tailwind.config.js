/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'toy-blue': {
          DEFAULT: '#90CAF9',
          light: '#E3F2FD',
          dark: '#64B5F6',
        },
        'toy-yellow': {
          DEFAULT: '#FFF59D',
          light: '#FFF9C4',
          dark: '#FFF176',
        },
        'toy-mint': {
          DEFAULT: '#A5D6A7',
          light: '#E8F5E9',
          dark: '#81C784',
        },
        'toy-coral': {
          DEFAULT: '#EF9A9A',
          light: '#FFEBEE',
          dark: '#E57373',
        },
      },
      borderRadius: {
        'toy': '20px',
        'toy-lg': '30px',
      },
      fontFamily: {
        'kids': ["Comfortaa", "Nunito", "sans-serif"],
        'kids-block': ["Comfortaa", "serif"],
        'modern': ["Inter", "Roboto", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'premium': '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
