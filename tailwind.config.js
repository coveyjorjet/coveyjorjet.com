/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '5xl': '68rem',  // 1088px — comfortable on large screens
        '6xl': '76rem',
      },
      fontFamily: {
        mono: ['"Geist Mono"', '"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          blue:  '#2563eb',
          cyan:  '#0891b2',
          green: '#16a34a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.55s ease forwards',
        'blink':   'blink 1.1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
