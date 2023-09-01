import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Background } from '@/components/Background';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'mujeres instaladoras',
  description: 'Instaladoras certificadas SEC de electricidad y gas',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
