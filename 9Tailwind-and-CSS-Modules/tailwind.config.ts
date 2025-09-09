/** @type {import('tailwindcss').Config} */

import textShadow from 'tailwindcss-textshadow';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'popins, sans-serif',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography'), textShadow],
};

// theme → налаштування теми (кольори, шрифти, брейкпоінти, keyframes, animation і т.д.).

// variants → це місце, де ми кажемо Tailwind: «для яких станів (hover, focus, group-hover, active і т.д.) генерувати класи».

// plugins → розширення Tailwind плагінами.
