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
        black:   '#06080F',
        deep:    '#090C17',
        surface: '#0E1220',
        border:  '#1A2240',
        muted:   '#2E3D60',
        cream:   '#C8D8F5',
        'cream-dim': '#607090',
        blue:    '#0099DD',
        'blue-lt': '#33BBFF',
        'blue-dk': '#005F8A',
        white:   '#E8F2FF',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        sans:      ['var(--font-dm-sans)', 'sans-serif'],
        bebas:     ['var(--font-bebas)', 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.6rem',
        'xs':  '0.65rem',
      },
      letterSpacing: {
        'widest2': '0.22em',
        'widest3': '0.18em',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up':      'fadeUp 0.6s ease forwards',
        'fade-up-1':    'fadeUp 0.6s ease 0.1s forwards',
        'fade-up-2':    'fadeUp 0.6s ease 0.2s forwards',
        'fade-up-3':    'fadeUp 0.6s ease 0.3s forwards',
        'fade-up-4':    'fadeUp 0.6s ease 0.4s forwards',
        'ticker':       'ticker 30s linear infinite',
        'spin-slow':    'spin 40s linear infinite',
        'spin-med':     'spin 30s linear infinite reverse',
        'spin-fast':    'spin 20s linear infinite',
      },
      backgroundImage: {
        'hero-grid': `
          linear-gradient(rgba(0,153,221,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,153,221,0.04) 1px, transparent 1px)
        `,
        'why-left': 'linear-gradient(135deg, #020B1E 0%, #071530 100%)',
      },
      backgroundSize: {
        'grid-80': '80px 80px',
      },
    },
  },
  plugins: [],
}

export default config
