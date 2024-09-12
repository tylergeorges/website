import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

import TailwindTypography from '@tailwindcss/typography';
import { TailwindChildren, TailwindFlexible } from './src/lib/tailwind/plugins';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },

      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--foreground) / 80%)',
            '--tw-prose-headings': 'rgb(var(--foreground))',
            '--tw-prose-lead': 'rgb(var(--foreground))',
            '--tw-prose-links': 'rgb(var(--foreground))',
            '--tw-prose-bold': 'rgb(var(--foreground))',
            '--tw-prose-counters': 'rgb(var(--muted-foreground))',
            '--tw-prose-bullets': 'rgb(var(--muted-foreground))',
            '--tw-prose-hr': 'rgb(var(--border))',
            '--tw-prose-quotes': 'rgb(var(--foreground))',
            '--tw-prose-quote-borders': 'rgb(var(--border))',
            '--tw-prose-captions': 'rgb(var(--foreground))',
            '--tw-prose-code': 'rgb(var(--foreground))',
            '--tw-prose-pre-code': 'rgb(var(--foreground))',
            '--tw-prose-pre-bg': 'rgb(var(--foreground))',
            '--tw-prose-th-borders': 'rgb(var(--foreground))',
            '--tw-prose-td-borders': 'rgb(var(--foreground))',
            '--tw-prose-invert-body': 'rgb(var(--foreground))',
            '--tw-prose-invert-headings': 'rgb(var(--foreground))',
            '--tw-prose-invert-lead': 'rgb(var(--foreground))',
            '--tw-prose-invert-links': 'rgb(var(--foreground))',
            '--tw-prose-invert-bold': 'rgb(var(--foreground))',
            '--tw-prose-invert-counters': 'rgb(var(--foreground))',
            '--tw-prose-invert-bullets': 'rgb(var(--foreground))',
            '--tw-prose-invert-hr': 'rgb(var(--foreground))',
            '--tw-prose-invert-quotes': 'rgb(var(--foreground))',
            '--tw-prose-invert-quote-borders': 'rgb(var(--foreground))',
            '--tw-prose-invert-captions': 'rgb(var(--foreground))',
            '--tw-prose-invert-code': 'rgb(var(--foreground))',
            '--tw-prose-invert-pre-code': 'rgb(var(--foreground))',
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': 'rgb(var(--foreground))',
            '--tw-prose-invert-td-borders': 'rgb(var(--foreground))'
          }
        }
      }),

      // gap: {
      //   '0': '0px',
      //   '0.5': '1px',
      //   '1': '3px',
      //   '1.5': '5px',
      //   '2': '7px',
      //   '2.5': '9px',
      //   '3': '13px',
      //   '4': '15px',
      //   '5': '21px',
      //   '6': '25px',
      //   '7': '30px'
      // },

      // spacing: {
      //   '0': '0px',
      //   '0.5': '1px',
      //   '1': '3px',
      //   '1.5': '5px',
      //   '2': '7px',
      //   '2.5': '9px',
      //   '3': '13px',
      //   '4': '15px',
      //   '5': '21px',
      //   '6': '25px',
      //   '7': '30px'
      // },

      // fontSize: {
      //   DEFAULT: '16.5px',
      //   sm: '11px',
      //   base: '16.5px',
      //   lg: '22px',
      //   xl: '33px',
      //   '2xl': '55px',
      //   '3xl': '66px',
      //   '4xl': '88px',
      //   '5xl': '121px'
      // },

      colors: {
        border: 'rgb(var(--border) / <alpha-value>)',
        input: 'rgb(var(--input) / <alpha-value>)',
        ring: 'rgb(var(--ring) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        'insert-mode': 'rgb(var(--insert-mode) / <alpha-value>)',
        'visual-mode': 'rgb(var(--visual-mode) / <alpha-value>)',
        'command-mode': 'rgb(var(--command-mode) / <alpha-value>)',
        'normal-mode': 'rgb(var(--normal-mode) / <alpha-value>)',
        foreground: {
          DEFAULT: 'rgb(var(--foreground) / <alpha-value>)',
          subtle: 'rgb(var(--foreground-subtle) / <alpha-value>)',
          'very-subtle': 'rgb(var(--foreground-very-subtle) / <alpha-value>)'
        },
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)'
        },
        popover: {
          DEFAULT: 'rgb(var(--popover) / <alpha-value>)',
          foreground: 'rgb(var(--popover-foreground) / <alpha-value>)'
        },
        card: {
          DEFAULT: 'rgb(var(--card) / <alpha-value>)',
          foreground: 'rgb(var(--card-foreground) / <alpha-value>)'
        }
      },

      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)'
      },

      fontFamily: {
        // sans: ['var(--font-sans), monospace'],
        sans: ['var(--font-geist-sans)', ...fontFamily.serif],
        abc: ['var(--font-abc)'],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
        // mono: ['var(--font-geist-mono), monospace', ...fontFamily.mono],
        pixels: ['var(--font-pixels)'],
        pixelsHeading: ['var(--font-pixels-heading)']
      }
    }
  },

  plugins: [TailwindFlexible, TailwindTypography, TailwindChildren]
};

export default config;
