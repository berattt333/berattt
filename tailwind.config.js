/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F8F5FB',
          50: '#FDFBFF',
          100: '#F8F5FB',
          200: '#EEE8F4',
          300: '#E0D7EC',
        },
        plum: {
          DEFAULT: '#6B5B95',
          50: '#A89BC7',
          100: '#9889B8',
          200: '#8779A8',
          300: '#776899',
          400: '#6B5B95',
          500: '#5A4B82',
          600: '#493D6E',
        },
        espresso: {
          DEFAULT: '#3D3A52',
          50: '#7A7592',
          100: '#5D5A78',
          200: '#4D4A65',
          300: '#3D3A52',
          400: '#2D2A3E',
        },
        mauve: {
          DEFAULT: '#C4B8D4',
          light: '#DDD3E8',
          dark: '#A89BC7',
        },
        brass: {
          DEFAULT: '#9B8EC4',
          light: '#C4B8D4',
          dark: '#7B6EA8',
        },
        sage: {
          DEFAULT: '#B0C4B8',
          light: '#D0DDC8',
          dark: '#8FA898',
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
