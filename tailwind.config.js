/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f0eee7',
        ink: '#280807',
      },
      fontFamily: {
        sans: ['Geist', 'Helvetica', 'Arial', 'sans-serif'],
        geistReg: ['"Geist-Regular"', 'sans-serif'],
        geistMed: ['"Geist-Medium"', 'sans-serif'],
        display: ['"Bomstad Display"', 'Helvetica', 'Arial', 'sans-serif'],
        instrument: ['"Instrument Sans"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
