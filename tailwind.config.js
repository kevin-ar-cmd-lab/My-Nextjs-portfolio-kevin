module.exports = {
  darkMode: 'class',
 content: [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './app/**/*.{js,ts,jsx,tsx}',
],
 safelist: ['animate-color-cycle'],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 0.6s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'color-cycle': 'colorCycle 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        colorCycle: {
          '0%, 100%': { color: '#f87171' },
          '25%': { color: '#60a5fa' },
          '50%': { color: '#34d399' },
          '75%': { color: '#facc15' },
        },
      },
    },
  },
  plugins: [],
};
