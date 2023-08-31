'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
export const Navbar = () => {
  return (
    <nav>
      <Link href='/'>inicio</Link>
      <button onClick={() => signIn()}>login</button>
      <a href='www.google.cl'>google</a>
    </nav>
  );
};
