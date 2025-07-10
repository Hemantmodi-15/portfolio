/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vintage': {
          'dark': '#1e1c1a',
          'beige': '#d6c1b1',
          'tan': '#a38b73',
          'brown': '#7b5e57',
          'text': '#fdfdfd',
          'subtext': '#d3cdc4',
          'coral': '#ff6f61',
          'gold': '#f4d03f',
          'emerald': '#58d68d',
          'lavender': '#bb8fce',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'draw-line': 'draw-line 2s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'wave': 'wave 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(2deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)',
            filter: 'brightness(1)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.2)',
            filter: 'brightness(1.2)'
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'draw-line': {
          '0%': { strokeDasharray: '0 100' },
          '100%': { strokeDasharray: '100 0' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0, transform: 'scale(0)' },
          '50%': { opacity: 1, transform: 'scale(1)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};