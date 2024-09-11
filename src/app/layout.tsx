import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

import { siteConfig } from '@/config/site';
import { fontMono, fontSans, fontAbc, fontPixels } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import { ModalRenderer } from '@/components/modal';

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
    <html lang="en">
      <body
        className={cn(
          'flex-1 bg-background font-mono text-foreground antialiased vertical',
          fontMono.variable,
          fontAbc.variable,
          fontSans.variable,
          fontPixels.variable
        )}
      >
        <ModalRenderer />
        <div className="flex-1">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
