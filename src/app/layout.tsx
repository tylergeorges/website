import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

import { siteConfig } from '@/config/site';
import { fontMono, fontSans, fontPixels } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import { TooltipProvider } from '@/components/ui/tooltip';
import Navbar from '@/components/navbar';

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

export const viewport: Viewport = {
  initialScale: 1
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
          'mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24',
          fontMono.variable,
          fontSans.variable,
          fontPixels.variable
        )}
      >
        <TooltipProvider delayDuration={0}>
          {children}
          <Navbar />
        </TooltipProvider>
        <Analytics />
      </body>
    </html>
  );
}
