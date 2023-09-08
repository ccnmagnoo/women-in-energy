import { InputService } from '@/Models/Input';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from '@/components/Dialog.module.scss';

export const Dialog = ({ form }: { form: UseFormReturn<Partial<InputService>> }) => {
  const { watch: obs } = form;

  return (
    <>
      {obs('description') && (
        <article className={styles.dialog}>
          <p>{obs('description')}</p>

          {obs('location') && (
            <p>
              <span>en </span>
              {obs('location')}😍
            </p>
          )}
        </article>
      )}
    </>
  );
};
