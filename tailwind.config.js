/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        amber: {
          DEFAULT: '#E8952F',
          50: '#FEF7ED',
          100: '#FDEDD3',
          200: '#F9D5A5',
          300: '#F5B96D',
          400: '#E8952F',
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
          800: '#78350F',
          900: '#451A03',
        },
        primary: '#E8952F',
        surface: {
          DEFAULT: '#0D0D0F',
          elevated: '#141418',
          panel: '#1A1A1F',
          raised: '#121214',
        },
        graphite: {
          DEFAULT: '#111113',
          light: '#1C1C21',
          dark: '#0A0A0B',
        },
        borderMuted: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(3rem,6vw+1rem,6rem)', { lineHeight: '1.02', fontWeight: '700', letterSpacing: '-0.04em' }],
        hero: ['clamp(2.75rem,5vw+1rem,5.5rem)', { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.03em' }],
        'section-title': ['clamp(2rem,3vw+0.5rem,3.75rem)', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'feature-title': ['clamp(1.25rem,1.5vw+0.5rem,1.75rem)', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.01em' }],
        body: ['clamp(1rem,0.5vw+0.875rem,1.125rem)', { lineHeight: '1.6', fontWeight: '400' }],
        caption: ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        label: ['0.8125rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.08em' }],
        nav: ['0.875rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.02em' }],
        button: ['0.75rem', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.15em' }],
        meta: ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
        'card-title': ['1.125rem', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(2rem,4vw+0.5rem,3rem)', { lineHeight: '1.08', fontWeight: '700', letterSpacing: '-0.025em' }],
        'h2': ['clamp(1.5rem,2.5vw+0.5rem,2.25rem)', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.015em' }],
        'h3': ['clamp(1.25rem,2vw+0.25rem,1.5rem)', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        site: '1400px',
      },
      borderRadius: {
        card: '1.5rem',
        button: '1rem',
        phone: '1.75rem',
        container: '1.25rem',
      },
      boxShadow: {
        glow: '0 0 60px rgba(232, 149, 47, 0.15)',
        'glow-lg': '0 0 100px rgba(232, 149, 47, 0.2)',
        'glow-xl': '0 0 140px rgba(232, 149, 47, 0.25)',
        card: '0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.05)',
        'card-hover': '0 32px 64px rgba(0, 0, 0, 0.5), 0 0 40px rgba(232, 149, 47, 0.08)',
        premium: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        'premium-lg': '0 40px 80px -20px rgba(0, 0, 0, 0.7)',
        phone: '0 50px 100px -20px rgba(0, 0, 0, 0.8)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
