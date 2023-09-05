'use client';

import { ChangeEvent } from 'react';
import styles from './ServiceSearchBar.module.scss';

const ServiceSearchBar = () => {
  function handler(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
  }
  return (
    <>
      <article className='card big'>
        <section className={styles.container}>
          <form>
            <input
              required
              className={styles.searchbar}
              maxLength={100}
              minLength={10}
              type='text'
            />
            <button className={styles.button}>buscar</button>
            <label className={styles.labelline}>¿qué quieres arreglar hoy?</label>
          </form>
        </section>
      </article>
    </>
  );
};

export default ServiceSearchBar;
