/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        sf: {
          black:   '#000000',
          dark:    '#0a0a0a',
          surface: '#111111',
          card:    '#161616',
          border:  '#222222',
          muted:   '#555555',
          // Fire / orange brand accent (from logo flames)
          fire: {
            50:  '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          // Silver / warm accent (from logo: silver/orange/red)
          silver: {
            50:  '#f3f4f6',
            100: '#e5e7eb',
            200: '#d1d5db',
            300: '#9ca3af',
            400: '#6b7280',
            500: '#555555',
            600: '#374151',
            700: '#1f2937',
            800: '#111827',
            900: '#18181b',
          },
          neon:    '#f97316',  // primary accent — orange fire
          neonAlt: '#ef4444',  // secondary accent — red
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
        display: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-fire': 'pulse-fire 2s ease-in-out infinite',
        'glow-fire': 'glow-fire 2s ease-in-out infinite alternate',
        'glow-silver': 'glow-silver 2s ease-in-out infinite alternate',
        'blink': 'blink 1s step-end infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'slide-in': 'slide-in 0.4s ease-out forwards',
      },
      keyframes: {
        'pulse-fire': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'glow-fire': {
          '0%': { textShadow: '0 0 5px #f97316, 0 0 10px #f97316' },
          '100%': { textShadow: '0 0 20px #f97316, 0 0 40px #f97316, 0 0 60px #ea580c' },
        },
        'glow-silver': {
          '0%': { textShadow: '0 0 5px #ef4444, 0 0 10px #ef4444' },
          '100%': { textShadow: '0 0 20px #ef4444, 0 0 40px #f97316, 0 0 60px #ea580c' },
        },
        'blink': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#f97316' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
