import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0d',
        surface: {
          DEFAULT: '#141414',
          '2': '#181818',
          '3': '#1f1f1f',
        },
        text: '#f4f4f5',
        muted: '#9a9aa2',
        faint: '#62626a',
        accent: '#7c3aed',
        border: 'rgba(255, 255, 255, 0.07)',
        'border-strong': 'rgba(255, 255, 255, 0.13)',
        green: '#22c55e',
        'green-dark': '#16a34a',
      },
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '16px',
        sm: '9px',
        lg: '20px',
      },
      maxWidth: {
        screen: '1200px',
      },
      spacing: {
        '0.75': '3px',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '18': '4.5rem',
        '21': '5.25rem',
      },
      gap: {
        '3.5': '0.875rem',
        '5.5': '1.375rem',
        '7': '1.75rem',
      },
    },
  },
  plugins: [],
};

export default config;
