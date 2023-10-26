import { Provider, Service } from '@/Models/Providers';
import React, { useEffect, useState } from 'react';
import style from './Validation.module.scss';
import { ValidationRequest } from '@/Models/Validation';
import validStamp from '@/app/static/valid-ico.svg';
import invalidStamp from '@/app/static/novalid-ico.svg';
import Image from 'next/image';

function Validation<S extends Service>({ provider }: { provider: Provider<S> }) {
  const [validation, setValidation] = useState<ValidationRequest | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('proxy', process.env.NEXTAUTH_URL);
        const query = fetch(
          `/api/verification?service=${provider.license.service}&rut=${provider.rut}`
        );
        const validation = await query;
        const result = await validation.json();
        setValidation(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {validation && (
        <section className={style.stamp}>
          {validation.response.at(-1) === 'VIGENTE' ? (
            <Image src={validStamp} alt='' />
          ) : (
            <Image src={invalidStamp} alt='' />
          )}
          <article className={style.dialog}>
            <p>SEC</p>
            <a href={validation.source} target='_blank'>
              {validation.response.at(-1)?.toLowerCase()}
            </a>
          </article>
        </section>
      )}
    </>
  );
}

export default Validation;
