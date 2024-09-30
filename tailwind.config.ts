import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import TailwindFluid, { extract } from 'fluid-tailwind';
import TailwindTypography from '@tailwindcss/typography';
import reset from 'tw-reset';

import { screens as _screens } from 'tw-reset/defaultTheme';
import { TailwindChildren, TailwindFlexible } from './src/lib/tailwind/plugins';

const { '2xl': _, ...screensInRem } = _screens;

// Things that need to be exported on the client

export const screens = {
  ...screensInRem,
  xs: '26rem',
  md: '53.75rem'
};

const config: Config = {
  presets: [reset],

  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    extract
  },
  theme: {
    container: () => {
      const { xs, ...screensWithoutXs } = screens;

      return {
        center: true,
        screens: screensWithoutXs
      };
    },
    screens,

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'to-dark':
          'linear-gradient(to bottom,transparent,rgba(0,0,0,.7) 50%,rgba(0,0,0,0.9) 75%,rgba(0,0,0,0.9))'
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

      aspectRatio: {
        golden: '1.618'
      },

      borderRadius: {
        '2.5cqw': '2.5cqw'
      },

      maxWidth: {
        prose: '43rem' // the default 65ch seemingly waits for the font-face to load, which causes a FOUC
      },

      colors: {
        border: 'rgb(var(--border) / <alpha-value>)',
        input: 'rgb(var(--input) / <alpha-value>)',
        ring: 'rgb(var(--ring) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
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

      fontFamily: {
        // sans: ['var(--font-sans), monospace'],
        sans: [
          `var(--font-sans), ${fontFamily.sans.join(', ')}`,
          {
            fontFeatureSettings: "'ss11', 'ss04'"
          }
        ],
        abc: ['var(--font-abc)'],
        mono: ['var(--font-mono)'],
        // mono: ['var(--font-geist-mono), monospace', ...fontFamily.mono],
        pixels: ['var(--font-pixels)'],
        pixelsHeading: ['var(--font-pixels-heading)']
      }
    }
  },

  plugins: [TailwindFlexible, TailwindFluid, TailwindTypography, TailwindChildren]
};

export default config;
