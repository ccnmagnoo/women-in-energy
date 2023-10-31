'use client';

import styles from './SearchBar.module.scss';
import { UseFormReturn } from 'react-hook-form';
import { InputService } from '@/Models/Input';
import { Dispatch, SetStateAction } from 'react';

const ServiceSearchBar = ({
  form,
  register,
  placeholder,
  setDispatch,
  dispatch,
}: {
  form: UseFormReturn<Partial<InputService>>;
  register: keyof Partial<InputService>;
  placeholder?: string;
  setDispatch?: Dispatch<SetStateAction<keyof InputService>>;
  dispatch?: keyof Partial<InputService>;
}) => {
  const handler = (data: Partial<InputService>) => {
    console.log(data);
    setDispatch && dispatch && setDispatch(dispatch);
  };

  return (
    <section className='card big animate'>
      <div className={styles.container}>
        <form onSubmit={form.handleSubmit(handler)} autoComplete='off'>
          <input
            autoFocus={true}
            required
            {...form.register(register)}
            className={styles.searchbar}
            placeholder={placeholder}
            maxLength={100}
            minLength={4}
            type='text'
          ></input>
          <button type='submit' className={styles.button}>
            buscar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ServiceSearchBar;
