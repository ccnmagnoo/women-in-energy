import { InputService } from '@/Models/Input';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from '@/components/Dialog.module.scss';
import Image from 'next/image';

import gas_ico from '@/app/static/gas-ico.svg';
import eli_ico from '@/app/static/eli-ico.svg';
import { getTerritory } from 'chilean-territory-code';

export const Dialog = ({ form }: { form: UseFormReturn<Partial<InputService>> }) => {
  const { watch: obs } = form;

  function renderIcon<T extends Partial<InputService>>(service: T['service']) {
    switch (service) {
      case 'gas':
        return <Image key={service} className={styles.icon} src={gas_ico} alt='' />;
      case 'eli':
        return <Image key={service} className={styles.icon} src={eli_ico} alt='' />;
      default:
        return undefined;
    }
  }

  function pproximity(leven?: number): React.ReactNode {
    if (leven === undefined) return undefined;
    if (leven > 10 || leven < 0) return undefined;
    return <span className={styles.pproximity}>{100 - (leven ?? 10) * 10}%</span>;
  }

  return (
    <>
      {obs('description') && (
        <article className={styles.dialog}>
          <p>{obs('description')}</p>

          {obs('location') && (
            <p>
              <span>en </span>
              {getTerritory(obs('location'))?.name}😍
              {pproximity(getTerritory(obs('location'))?.leven)}
              {form.watch('service') && (
                <span className={styles.tag}>{renderIcon(form.watch('service'))}</span>
              )}
            </p>
          )}
        </article>
      )}
    </>
  );
};
