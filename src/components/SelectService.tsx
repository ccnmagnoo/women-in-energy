'use client';

import styles from './SearchBar.module.scss';
import { UseFormReturn } from 'react-hook-form';
import { InputService } from '@/Models/Input';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import gas_ico from '@/app/static/gas-ico.svg';

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
        <section className={styles.selectContainer}>
          <button
            className={styles.serviceButton}
            onClick={() => form.setValue('service', 'eli')}
          >
            eléctrica
          </button>
          <button
            className={styles.serviceButton}
            onClick={() => form.setValue('service', 'gas')}
          >
            <Image src={gas_ico} alt='' />
            gas
          </button>
        </section>
      </div>
      {form.watch('service')}
    </section>
  );
};

export default SelectService;
