import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-inter)'],
      },
      colors: {
        bg: '#000000',
        fg: '#ffffff',
        muted: 'rgba(255,255,255,0.6)',
        'muted-light': '#a3a3a3',
        accent: '#a5e71c',
        'accent-dark': '#50831d',
        surface: '#0a0a0a',
        border: 'rgba(255,255,255,0.1)',
        'border-light': 'rgba(255,255,255,0.25)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -2%)' },
          '30%': { transform: 'translate(2%, -1%)' },
          '50%': { transform: 'translate(-3%, 2%)' },
          '70%': { transform: 'translate(0, 3%)' },
          '90%': { transform: 'translate(-2%, 3%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
