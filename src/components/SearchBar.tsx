'use client';

import styles from './SearchBar.module.scss';
import { UseFormReturn } from 'react-hook-form';
import { InputService } from '@/Models/Input';
import { Dispatch, SetStateAction } from 'react';

const ServiceSearchBar = ({
  form,
  register,
  placeholder,
  dispatch,
}: {
  form: UseFormReturn<Partial<InputService>>;
  register: keyof Partial<InputService>;
  placeholder?: string;
  dispatch?: Dispatch<SetStateAction<keyof InputService>>;
}) => {
  const handler = (data: Partial<InputService>) => {
    console.log(data);
    dispatch !== undefined ? dispatch('location') : null;
  };

  return (
    <section className='card big'>
      <div className={styles.container}>
        <form onSubmit={form.handleSubmit(handler)}>
          <input
            autoFocus={true}
            required
            {...form.register(register)}
            className={styles.searchbar}
            placeholder={placeholder}
            maxLength={100}
            minLength={5}
            type='text'
          ></input>
          <button className={styles.button}>buscar</button>
        </form>
      </div>
    </section>
  );
};

export default ServiceSearchBar;
