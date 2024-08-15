import type { Metadata } from 'next';
import './globals.css';

import { siteConfig } from '@/config/site';
import { fontMono, fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import { SiteFooter } from '@/components/site-footer';
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
          'size-full flex-1 bg-background font-mono leading-tight text-foreground antialiased vertical',
          fontMono.variable,
          fontSans.variable
        )}
      >
        <ModalRenderer />
        <div className="flex-1 px-6 pt-8 md:pb-4 lg:pt-10 ">{children}</div>

        <SiteFooter />
      </body>
    </html>
  );
}
