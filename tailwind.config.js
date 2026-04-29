/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        cyan: {
          DEFAULT: '#00D4FF',
          dim: '#0099BB',
          glow: 'rgba(0,212,255,0.3)',
        },
        dark: {
          DEFAULT: '#050A14',
          2: '#080F1E',
          3: '#0D1A30',
          card: '#0A1628',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        scan: 'scan 4s linear infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
