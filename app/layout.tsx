import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroller from '@/components/layout/SmoothScroller';
import MouseFollower from '@/components/animations/MouseFollower';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Clear Path Digital | Premium Digital Solutions',
  description: 'Full-service digital marketing agency for modern businesses.',
};

const GA_ID = 'G-08W7GZ7C0P';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className={cn(inter.variable, "bg-background text-foreground overflow-x-hidden min-h-screen flex flex-col")}>
        <MouseFollower />
        <SmoothScroller>
          <Navbar />
          <div className="flex-grow pt-16 overflow-hidden w-full relative">
            {children}
          </div>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}

