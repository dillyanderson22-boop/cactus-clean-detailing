import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0C0D0A',
        bg2: '#14150F',
        card: '#1B1D14',
        fg: '#ECEAE0',
        muted: '#9C9986',
        line: 'rgba(236,234,224,0.10)',
        accent: '#E0913C',
        'accent-dark': '#BB7224',
        sand: '#84A85C',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: { shell: '1320px' },
    },
  },
  plugins: [],
}
export default config
