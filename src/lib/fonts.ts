import localFont from 'next/font/local';

export const fontSans = localFont({
  src: '../app/fonts/GeistVF.woff',
  variable: '--font-sans',
  display: 'swap'
});

export const fontMono = localFont({
  src: '../app/fonts/GeistMonoVF.woff',
  variable: '--font-mono',
  display: 'swap'
});

export const fontPixels = localFont({
  variable: '--font-pixels',
  src: '../app/fonts/DepartureMono-Regular.woff2',
  display: 'swap'
});
