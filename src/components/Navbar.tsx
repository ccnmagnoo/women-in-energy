'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/static/mi-logo.svg';
import styles from '@/components/Navbar/Navbar.module.scss';
import { User } from './Navbar/User';
import searchIco from '@/app/static/search-ico.svg';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const session = useSession().data;
  const router = useRouter();

  const logoutHandler = () => {
    signOut();
    router.push('/home');
  };
  return (
    <header>
      {/* Instaladoras mt */}
      <div id='site-logo'>
        <Image src={logo} alt='' />
        <p>de gas y electricidad</p>
      </div>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <Link id={styles.newSearch} href='/'>
          <Image src={searchIco} alt={'🔍'} />
          <p>
            buscar <span>instaladora</span>
          </p>
        </Link>

        {/* session info👤 */}
        <User session={session} />

        {session ? (
          <button
            className={[styles.logButton, styles.logout].join(' ')}
            onClick={() => logoutHandler()}
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
    </header>
  );
};
