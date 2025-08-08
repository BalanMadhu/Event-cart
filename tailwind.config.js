/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'royal-purple': '#6B46C1',
        'imperial-gold': '#F59E0B',
        'deep-sapphire': '#1E40AF',
        'rose-marble': '#fecfef',
        'pearl-white': '#fef7ff',
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        'gold-shimmer': 'linear-gradient(135deg, #ffd700 0%, #ffed4e 25%, #fff59d 50%, #ffd700 75%, #ffb300 100%)',
        'sapphire-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #581c87 100%)',
        'rose-marble': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 25%, #ff9a9e 50%, #fecfef 75%, #fecfef 100%)',
        'imperial-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      boxShadow: {
        'royal': '0 25px 50px -12px rgba(139, 92, 246, 0.25)',
        'gold': '0 25px 50px -12px rgba(245, 158, 11, 0.25)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}