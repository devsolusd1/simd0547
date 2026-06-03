/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'fire-orange': '#FF6B00',
        'fire-red': '#CC1100',
        'fire-yellow': '#FFC200',
        'fire-ember': '#FF4500',
        'fire-dark': '#080400',
        'fire-card': 'rgba(255,107,0,0.06)',
        'fire-border': 'rgba(255,107,0,0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'burn-glow': 'burnGlow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'flicker': 'flicker 1.5s ease-in-out infinite alternate',
        'ember-rise': 'emberRise 3s ease-in-out infinite',
      },
      keyframes: {
        burnGlow: {
          '0%': { textShadow: '0 0 20px rgba(255,107,0,0.6), 0 0 40px rgba(204,17,0,0.3)' },
          '100%': { textShadow: '0 0 40px rgba(255,194,0,0.8), 0 0 70px rgba(255,107,0,0.5), 0 0 100px rgba(204,17,0,0.3)' },
        },
        flicker: {
          '0%':   { opacity: '0.9', transform: 'scale(1)' },
          '33%':  { opacity: '1',   transform: 'scale(1.01)' },
          '66%':  { opacity: '0.85',transform: 'scale(0.99)' },
          '100%': { opacity: '1',   transform: 'scale(1.005)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        emberRise: {
          '0%':   { transform: 'translateY(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-80px) scale(0.3)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
