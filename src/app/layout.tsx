import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './Providers';
import { Background } from '@/components/Background';
import { Navbar } from '@/components/Navbar';
import { ReactNode } from 'react';
import { Bottombar } from '@/components/Bottombar';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Instaladoras',
  description: 'Promoviendo a las Mujeres certificadas SEC de Chile',
  icons: [
    {
      rel: 'icon',
      url: './static/icon.svg',
    },
  ],
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Background />
        <Providers>
          {/* //session provider */}
          <Navbar />
          {children}
          <Bottombar />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
