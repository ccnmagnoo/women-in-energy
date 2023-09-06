'use client';

import { ChangeEvent } from 'react';
import styles from './ServiceSearchBar.module.scss';
import { UseFormReturn } from 'react-hook-form';
import { InputService } from '@/Models/Input';

const ServiceSearchBar = ({ form }: { form: UseFormReturn<Partial<InputService>> }) => {
  const handler = (data: Partial<InputService>) => console.log(data);

  return (
    <article className='card big'>
      <section className={styles.container}>
        <form onSubmit={form.handleSubmit(handler)}>
          <input
            required
            {...form.register('description')}
            className={styles.searchbar}
            placeholder='¿Qué arreglo quieres hacer?'
            maxLength={100}
            minLength={10}
            type='text'
          ></input>
          <button className={styles.button}>buscar</button>
        </form>
      </section>
    </article>
  );
};

export default ServiceSearchBar;
