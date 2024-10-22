import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

import { siteConfig } from '@/config/site';
import { fontMono, fontSans, fontAbc, fontPixels } from '@/lib/fonts';
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
          'mx-auto min-h-screen max-w-2xl flex-1 bg-background px-6 py-12 font-sans text-foreground antialiased vertical sm:py-24',
          fontMono.variable,
          fontAbc.variable,
          fontSans.variable,
          fontPixels.variable
        )}
      >
        <div className="flex-1">{children}</div>

        <TooltipProvider delayDuration={0}>
          <Navbar />
        </TooltipProvider>
        <Analytics />
      </body>
    </html>
  );
}
