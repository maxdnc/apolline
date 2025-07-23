import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        largest: '90rem',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: {
          '50': '#f8f8f8',
          '100': '#edecec',
          '200': '#e5e3e3',
          '300': '#d2cfcf',
          '400': '#b6b3b3',
          '500': '#9c9797',
          '600': '#847e7e',
          '700': '#6d6868',
          '800': '#5c5858',
          '900': '#4f4d4d',
          '950': '#282727',
        },
        primary: {
          '50': '#effef9',
          '100': '#cafdf0',
          '200': '#95fae3',
          '300': '#58f0d2',
          '400': '#25dcbd',
          '500': '#0dbfa5',
          '600': '#079a87',
          '700': '#0a7b6d',
          '800': '#0d6258',
          '900': '#105149',
          '950': '#02302d',
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 2s ease-in-out infinite',
        'hamburger-top-bar':
          'hamburgerAnimationTopBar 0.6s cubic-bezier(0.83, 0, 0.17, 1) forwards',
        'hamburger-bottom-bar':
          'hamburgerAnimationBottomBar 0.6s cubic-bezier(0.83, 0, 0.17, 1) forwards',
        'hamburger-top-bar-close':
          'hamburgerAnimationTopBarClose 0.6s cubic-bezier(0.83, 0, 0.17, 1) forwards',
        'hamburger-bottom-bar-close':
          'hamburgerAnimationBottomBarClose 0.6s cubic-bezier(0.83, 0, 0.17, 1) forwards',
      },
      transitionTimingFunction: {
        quint: 'cubic-bezier(0.83, 0, 0.17, 1)',
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

        fadeInOut: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px) scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(20px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
