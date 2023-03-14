/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        appear: 'appear 0.25s ease-in-out',
      }
    },
    fontFamily: {
      archivo: ["Archivo", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
    }
  },
  plugins: [],
}