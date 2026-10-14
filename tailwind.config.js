/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF6F0',
          50: '#FFFDFA',
          100: '#FAF6F0',
          200: '#F2EBE0',
          300: '#E8DCCB',
        },
        plum: {
          DEFAULT: '#5C4458',
          50: '#9A8293',
          100: '#8B7082',
          200: '#745D6E',
          300: '#66505F',
          400: '#5C4458',
          500: '#4D3A4A',
          600: '#3E2E3B',
        },
        espresso: {
          DEFAULT: '#4A3F38',
          50: '#8A7D72',
          100: '#6B5E53',
          200: '#5A4E44',
          300: '#4A3F38',
          400: '#3A312B',
        },
        mauve: {
          DEFAULT: '#B8A5B0',
          light: '#D4C5CD',
          dark: '#9A8590',
        },
        brass: {
          DEFAULT: '#5B8C8A',
          light: '#8AB5B3',
          dark: '#3D6B69',
        },
        sage: {
          DEFAULT: '#A8B5A0',
          light: '#C8D1C0',
          dark: '#8A9A82',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Mulish', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide-2': '0.15em',
        'wide-3': '0.22em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
};
