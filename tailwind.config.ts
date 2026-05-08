import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0E1015',
        ink2: '#5A6072',
        brand: { DEFAULT: '#2D6FF2', dark: '#1F4FB8', light: '#E8EFFE' },
        surface: '#FFFFFF',
        bg: '#F4F5FA',
        star: '#F5B400',
      },
      fontFamily: {
        display: ['var(--font-manrope)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 8px 24px rgba(20,30,60,0.06)',
        cardHover: '0 16px 40px rgba(20,30,60,0.10)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'float-slow': 'float 10s ease-in-out infinite 1s',
      }
    },
  },
  plugins: [],
}
export default config
