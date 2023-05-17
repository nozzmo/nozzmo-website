/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        appearUp: {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
          '100%': { opacity: 1 },
        },
        rolldown: {
          '0%': { height: 0 },
          '100%': { height: '100vh' },
        },
        enterleft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        appear: 'appear 0.25s ease-in-out',
        rolldown: 'rolldown 0.75s ease-in-out',
        enterleft: 'enterleft 0.5s ease-in-out'
      }
    },
    fontFamily: {
      archivo: ["Archivo", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
    }
  },
  plugins: [],
}