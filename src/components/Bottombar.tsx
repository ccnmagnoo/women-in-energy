import React from 'react';
import styles from './Bottombar.module.scss';

export const Bottombar = () => {
  return (
    <nav className={styles.bottombar}>
      <ul>
        <li>motivaciones</li>
        <li>definiciones</li>
        <li>desarrollo</li>
      </ul>
    </nav>
  );
};
