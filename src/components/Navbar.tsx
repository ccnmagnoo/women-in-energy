'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/static/mi-logo.svg';
import styles from '@/components/Navbar/Navbar.module.scss';
import { User } from './Navbar/User';

export const Navbar = () => {
  const session = useSession().data;
  return (
    <section>
      {/* Instaladoras mt */}
      <Image src={logo} id='site-logo' alt='' />

      {/* Navigation */}
      <nav className={styles.navbar}>
        <Link href='/'>buscar instaladoras</Link>

        {/* session info👤 */}
        <User session={session} />

        {session ? (
          <button
            className={[styles.logButton, styles.logout].join(' ')}
            onClick={() => signOut()}
          >
            salir
          </button>
        ) : (
          <button
            className={[styles.logButton, styles.login].join(' ')}
            onClick={() => signIn()}
          >
            ingreso
          </button>
        )}
      </nav>
    </section>
  );
};
