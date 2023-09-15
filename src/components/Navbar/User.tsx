import { Session } from 'next-auth';
import React, { ReactNode } from 'react';
import styles from '@/components/Navbar/Navbar.module.scss';
import Image from 'next/image';
export const User = ({ session }: { session: Session | null }) => {
  return (
    <section className={styles.user_container}>
      {session ? 'hola' : 'anónimo'} {session?.user?.name?.split(' ')[0]}
      <span className={styles.user_pic}>
        {session?.user?.image && (
          <Image width={50} height={50} src={session?.user?.image} alt='' />
        )}
      </span>
    </section>
  );
};
