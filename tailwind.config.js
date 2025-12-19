/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FFA500',
        surface: '#0d0d0d',
        surfaceElevated: '#151515',
        borderMuted: '#1f1f1f',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Responsive typography scale using clamp()
        'h1': ['clamp(2rem, 1.5rem + 2.5vw, 3.5rem)', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }], // 32-56px
        'h2': ['clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.01em' }], // 24-36px
        'h3': ['clamp(1.25rem, 1.125rem + 0.625vw, 1.75rem)', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '-0.01em' }], // 20-28px
        'card-title': ['clamp(1.125rem, 1rem + 0.625vw, 1.25rem)', { lineHeight: '1.4', fontWeight: '600' }], // 18-20px
        'body': ['clamp(0.9375rem, 0.875rem + 0.3125vw, 1.125rem)', { lineHeight: '1.6', fontWeight: '400' }], // 15-18px
        'meta': ['clamp(0.8125rem, 0.75rem + 0.3125vw, 0.9375rem)', { lineHeight: '1.5', fontWeight: '400' }], // 13-15px
        'label': ['clamp(0.75rem, 0.6875rem + 0.3125vw, 0.8125rem)', { lineHeight: '1.5', fontWeight: '400' }], // 12-13px (never smaller than 12px)
        'nav': ['clamp(0.875rem, 0.8125rem + 0.3125vw, 1rem)', { lineHeight: '1.5', fontWeight: '500' }], // 14-16px
        'button': ['clamp(1rem, 0.9375rem + 0.3125vw, 1.125rem)', { lineHeight: '1.5', fontWeight: '600' }], // 16-18px
      },
      boxShadow: {
        'soft-glow': '0 20px 45px rgba(0, 0, 0, 0.55)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
