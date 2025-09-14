import type { Config } from 'tailwindcss';
import textShadow from 'tailwindcss-textshadow';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'poppins, sans-serif', // виправив typo
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
  plugins: [typography, textShadow],
};

export default config;

// theme → налаштування теми (кольори, шрифти, брейкпоінти, keyframes, animation і т.д.).

// variants → це місце, де ми кажемо Tailwind: «для яких станів (hover, focus, group-hover, active і т.д.) генерувати класи».

// plugins → розширення Tailwind плагінами.
