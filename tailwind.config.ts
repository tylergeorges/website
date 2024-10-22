import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import TailwindTypography from '@tailwindcss/typography';
import reset from 'tw-reset';

import { TailwindChildren, TailwindFlexible } from './src/lib/tailwind/plugins';

const config: Config = {
  presets: [reset],

  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ]
  },
  theme: {
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

      maxWidth: {
        prose: '43rem' // the default 65ch seemingly waits for the font-face to load, which causes a FOUC
      },

      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground) / <alpha-value>)'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
        }
      },

      fontFamily: {
        sans: [
          `var(--font-sans), ${fontFamily.sans.join(', ')}`,
          {
            fontFeatureSettings: "'ss11', 'ss04'"
          }
        ],
        mono: ['var(--font-mono)', ...fontFamily.mono],
        pixels: ['var(--font-pixels)'],
        pixelsHeading: ['var(--font-pixels-heading)']
      }
    }
  },

  plugins: [TailwindFlexible, TailwindTypography, TailwindChildren]
};

export default config;
