import { GeistMono as FontMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import localFont from 'next/font/local';
// import { JetBrains_Mono as FontMono } from 'next/font/google';

// export const fontSans = GeistSans;

// export const fontMono = FontMono;

export const fontSans = localFont({
  src: '../app/fonts/GeistVF.woff',
  variable: '--font-sans',
  display: 'swap',

});

export const fontMono = localFont({
  src: '../app/fonts/GeistMonoVF.woff',
  variable: '--font-mono',
  display: 'swap',
});
// export const fontSans = Inter({ variable: '--font-geist-sans', display: 'swap' });

export const fontAbc = localFont({
  variable: '--font-abc',
  src: [
    {
      path: '../app/fonts/ABCDiatypeVariable.woff2'
    }
  ],
  display: 'swap'
});

// export const fontPixelsHeading = localFont({
//   variable: '--font-pixels-heading',
//   src: [
//     {
//       path: '../../public/fonts/PPMondwest-Regular.otf',
//       weight: '400',
//       style: 'normal'
//     },
//     {
//       path: '../../public/fonts/ArgentPixelCF-Italic.woff2',
//       style: 'italic'
//     },
//     {
//       path: '../../public/fonts/PPMondwest-Bold.otf',
//       weight: '700'
//     }
//   ],
//   display: 'swap'
// });

export const fontPixels = localFont({
  variable: '--font-pixels',
  src: '../app/fonts/DepartureMono-Regular.otf',
  display: 'swap'
});
