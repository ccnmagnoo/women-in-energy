import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import woman from '../../public/woman-in-energy-css.svg';
import Image from 'next/image';
import { Background } from '@/components/Background';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'mujeres instaladoras',
  description: 'Instaladoras certificadas SEC de electricidad y gas',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
      <Background></Background>
    </html>
  );
}

export default RootLayout;
