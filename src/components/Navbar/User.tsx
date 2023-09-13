import { Session } from 'next-auth';
import React, { ReactNode } from 'react';
import styles from '@/components/Navbar/Navbar.module.scss';
import Image from 'next/image';
export const User = ({ session }: { session: Session | null }) => {
  return (
    <section className={styles.user_container}>
      Hola {session?.user?.name?.split(' ')[0]}
      {session?.user?.image && (
        <Image width={50} height={50} src={session?.user?.image} alt='' />
      )}
    </section>
  );
};
