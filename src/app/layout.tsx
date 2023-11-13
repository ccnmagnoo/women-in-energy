import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './Providers';
import { Background } from '@/components/Background';
import { Navbar } from '@/components/Navbar';
import { URL } from 'url';
import { ReactNode } from 'react';
import { Bottombar } from '@/components/Bottombar';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          {/* //session provider */}
          <header>
            <Navbar />
          </header>
          {children}
          <footer>
            <Bottombar />
          </footer>
        </Providers>
        <Background />
      </body>
    </html>
  );
}

export default RootLayout;
