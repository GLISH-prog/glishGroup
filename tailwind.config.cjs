/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0f1a',
        slate: '#0f172a',
        night: '#060914',
        ice: '#e2e8f0',
        cyan: '#22d3ee',
        blue: '#3b82f6',
        violet: '#6366f1',
        neon: '#5eead4',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Sora"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 50px -30px rgba(2, 8, 23, 0.85)',
        glow: '0 0 35px rgba(34, 211, 238, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
      animation: {
        'float-slow': 'float 9s ease-in-out infinite',
        rise: 'rise 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
