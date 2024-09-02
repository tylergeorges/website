import { GeistMono as FontMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import localFont from 'next/font/local';

export const fontSans = GeistSans;

export const fontMono = FontMono;

export const fontPixelsHeading = localFont({
  variable: '--font-pixels-heading',
  src: [
    {
      path: '../../public/fonts/PPMondwest-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/ArgentPixelCF-Italic.woff2',
      style: 'italic'
    },
    {
      path: '../../public/fonts/PPMondwest-Bold.otf',
      weight: '700'
    }
  ],
  display: 'swap'
});

export const fontPixels = localFont({
  variable: '--font-pixels',
  src: '../../public/fonts/DepartureMono-Regular.otf',
  display: 'swap'
});
