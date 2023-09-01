'use client';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

export const Navbar = () => {
  const user_data = useSession().data;
  return (
    <nav>
      <Link href='/'>inicio</Link>
      <button onClick={() => signIn()}>login</button>
      <a href='www.google.cl'>google</a>
    </nav>
  );
};
