import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import woman from '../../public/woman-in-energy-css.svg';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'mujeres instaladoras',
  description: 'Instaladoras certificadas SEC de electricidad y gas',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <span className='glowing up'></span>
        <span className='glowing down'></span>
        <Image alt='' src={woman} id='woman-sketch' />

        {children}
      </body>
    </html>
  );
}

export default RootLayout;
