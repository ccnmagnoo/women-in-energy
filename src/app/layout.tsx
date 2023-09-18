import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './Providers';
import { Background } from '@/components/Background';
import { Navbar } from '@/components/Navbar';
import { URL } from 'url';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'instaladoras',
  authors: { name: 'Carlos Campos', url: new URL('https://github.com/ccnmagnoo') },
  description: 'Instaladoras certificadas SEC de electricidad y gas',
  icons: {
    icon: '/src/app/static/mi-ico.png',
  },
};
function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <header>
            <Navbar />
          </header>
          {children}
          <footer>bottom bar</footer>
        </Providers>
        <Background />
      </body>
    </html>
  );
}

export default RootLayout;
