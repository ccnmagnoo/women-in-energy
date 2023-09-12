'use client';

import styles from './SearchBar.module.scss';
import { UseFormReturn } from 'react-hook-form';
import { InputService } from '@/Models/Input';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import gas_ico from '@/app/static/gas-ico.svg';
import eli_ico from '@/app/static/eli-ico.svg';

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
            <Image className={styles.icon} src={eli_ico} alt='' />
            <span>eléctrica</span>
          </button>
          <button
            className={styles.serviceButton}
            onClick={() => form.setValue('service', 'gas')}
          >
            <Image className={styles.icon} src={gas_ico} alt='' />
            <span>gas</span>
          </button>
        </section>
      </div>
    </section>
  );
};

export default SelectService;
