import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroller from '@/components/layout/SmoothScroller';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Clear Path Digital | Premium Digital Solutions',
  description: 'Full-service digital marketing agency for modern businesses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={cn(inter.variable, "bg-background text-foreground overflow-x-hidden min-h-screen flex flex-col")}>
        <SmoothScroller>
          <Navbar />
          <div className="flex-grow pt-16">
            {children}
          </div>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
