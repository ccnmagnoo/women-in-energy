'use client';

import styles from './SearchBar.module.scss';
import { UseFormReturn } from 'react-hook-form';
import { InputService } from '@/Models/Input';

const ServiceSearchBar = ({
  form,
  register,
  placeholder,
}: {
  form: UseFormReturn<Partial<InputService>>;
  register: keyof Partial<InputService>;
  placeholder?: string;
}) => {
  const handler = (data: Partial<InputService>) => console.log(data);

  return (
    <section className='card big'>
      <div className={styles.container}>
        <form onSubmit={form.handleSubmit(handler)}>
          <input
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
