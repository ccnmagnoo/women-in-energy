import { Provider, Service } from '@/Models/Providers';
import React, { useLayoutEffect, useState } from 'react';
import style from './Validation.module.scss';
import { ValidationRequest } from '@/Models/Validation';
import validStamp from '@/app/static/valid-ico.svg';
import Image from 'next/image';

function Validation<S extends Service>({ provider }: { provider: Provider<S> }) {
  const [validation, setValidation] = useState<ValidationRequest | undefined>(undefined);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const query = fetch(
          `api/verification?service=${provider.license.service}&rut=${provider.rut}`
        );
        const validation = await query;
        const result = await validation.json();
        setValidation(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {validation && (
        <section className={style.stamp}>
          {validation.response.at(-1) === 'VIGENTE' ? (
            <Image src={validStamp} alt=''></Image>
          ) : undefined}
        </section>
      )}
    </>
  );
}

export default Validation;