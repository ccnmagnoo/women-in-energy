'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  const session = useSession().data;
  return (
    <section>
      logo
      <nav>
        <Link href='/'>inicio</Link>
        <button onClick={() => signIn()}>login</button>
        <button onClick={() => signOut()}>logout</button>
        <a href='www.google.cl'>google</a>
        <span>{session?.user?.name}</span>
      </nav>
    </section>
  );
};
