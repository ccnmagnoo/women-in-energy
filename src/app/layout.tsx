import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './Providers';
import { Background } from '@/components/Background';
import { Navbar } from '@/components/Navbar';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'mujeres instaladoras',
  description: 'Instaladoras certificadas SEC de electricidad y gas',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
