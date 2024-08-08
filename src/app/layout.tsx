import type { Metadata } from 'next';
import './globals.css';

import { siteConfig } from '@/config/site';
import { fontMono, fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s`
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  authors: [
    {
      name: 'Tyler Georges',
      url: 'https://github.com/tylergeorges'
    }
  ],
  creator: 'Tyler Georges'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={cn(
          'relative  bg-background px-6 pb-4 pt-8 font-mono leading-tight text-foreground antialiased vertical lg:pt-10',
          fontMono.variable,
          fontSans.variable
        )}
      >
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
