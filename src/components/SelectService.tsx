'use client';

import styles from './SearchBar.module.scss';
import { UseFormReturn } from 'react-hook-form';
import { InputService } from '@/Models/Input';
import Image from 'next/image';
import gas_ico from '@/app/static/gas-ico.svg';
import eli_ico from '@/app/static/eli-ico.svg';
import { useRouter } from 'next/navigation';

const SelectService = ({ form }: { form: UseFormReturn<Partial<InputService>> }) => {
  const router = useRouter();

  function handler<T extends InputService>(service: T['service']) {
    form.setValue('service', service);
    console.log('setting service:', service);
    router.push(
      `/dashboard?description=${form.getValues('description')}&service=${form.getValues(
        'service'
      )}&location=${form.getValues('location')}`
    );
  }

  return (
    <section className='card big animate'>
      <div className={styles.container}>
        <section className={styles.selectContainer}>
          <button
            accessKey='e'
            className={styles.serviceButton}
            onClick={() => handler('eli')}
          >
            <Image className={styles.icon} src={eli_ico} alt='' />
            <span>eléctrica</span>
          </button>
          <button
            accessKey='g'
            className={styles.serviceButton}
            onClick={() => handler('gas')}
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
