'use client';

import styles from './SearchBar.module.scss';
import { UseFormReturn } from 'react-hook-form';
import { InputService } from '@/Models/Input';
import { Dispatch, SetStateAction } from 'react';

const SelectService = ({
  form,
  register,
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
            id='eli'
            autoFocus={true}
            required
            {...form.register(register)}
            className={styles.searchbar}
            type='radio'
            value='eli'
          />
          <label htmlFor='eli'>eléctrico</label>
          <input
            id='gas'
            autoFocus={true}
            required
            {...form.register(register)}
            className={styles.searchbar}
            type='radio'
            value='gas'
          />
          <label htmlFor='gas'>gas</label>
        </form>
      </div>
    </section>
  );
};

export default SelectService;
