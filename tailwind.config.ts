import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        'hamburger-top-bar':
          'hamburgerAnimationTopBar 0.6s cubic-bezier(0.90, 0, 0.10, 1) forwards',
        'hamburger-bottom-bar':
          'hamburgerAnimationBottomBar 0.6s cubic-bezier(0.90, 0, 0.10, 1) forwards',
        'hamburger-top-bar-close':
          'hamburgerAnimationTopBarClose 0.6s cubic-bezier(0.90, 0, 0.10, 1) forwards',
        'hamburger-bottom-bar-close':
          'hamburgerAnimationBottomBarClose 0.6s cubic-bezier(0.90, 0, 0.10, 1) forwards',
      },
      keyframes: {
        hamburgerAnimationTopBar: {
          '0%': { transform: 'translateY(-4px)   rotate(0)' },
          '50%': { transform: 'translateY(2px)  rotate(0)' },
          '100%': { transform: 'translateY(2px)  rotate(45deg)' },
        },
        hamburgerAnimationBottomBar: {
          '0%': { transform: 'translateY(4px) rotate(0)' },
          '50%': { transform: 'translateY(-2px)  rotate(0)' },
          '100%': { transform: 'translateY(-2px)  rotate(-45deg)' },
        },
        hamburgerAnimationTopBarClose: {
          '0%': { transform: 'translateY(2px) rotate(45deg)' },
          '50%': { transform: 'translateY(2px) rotate(0)' },
          '100%': { transform: 'translateY(-4px) rotate(0)' },
        },
        hamburgerAnimationBottomBarClose: {
          '0%': { transform: 'translateY(-2px) rotate(-45deg)' },
          '50%': { transform: 'translateY(-2px) rotate(0)' },
          '100%': { transform: 'translateY(4px) rotate(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
