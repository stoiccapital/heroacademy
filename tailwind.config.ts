import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          surface: '#111111',
          raised: '#171717',
          border: '#262626',
          muted: '#737373',
          soft: '#a3a3a3',
          text: '#e5e5e5',
          bright: '#fafafa',
        },
        ember: {
          DEFAULT: '#d97706',
          bright: '#f59e0b',
          soft: '#fcd34d',
          dark: '#92400e',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
      },
    },
  },
  plugins: [],
};

export default config;
