import { Provider, Service } from '@/Models/Providers';
import React, { useEffect, useState } from 'react';
import style from './Validation.module.scss';
import { ValidationRequest } from '@/Models/Validation';
import validStamp from '@/app/static/valid-ico.svg';
// import invalidStamp from '@/app/static/novalid-ico.svg';
import nullStamp from '@/app/static/null-ico.svg';
import Image from 'next/image';
import { useCertification } from './certification/useCertification';

function Validation<S extends Service>({ provider }: { provider: Provider<S> }) {
  const certification: ValidationRequest | undefined = useCertification({
    service: { service: provider.license.service, rut: provider.rut },
  });

  // const [validation, setValidation] = useState<ValidationRequest | undefined>(undefined);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log(
  //         'requesting API verification:',
  //         provider.license.service,
  //         provider.rut
  //       );
  //       const query = fetch(
  //         `/api/verification?service=${provider.license.service}&rut=${provider.rut}`
  //       );
  //       const response = await query;
  //       const result: ValidationRequest | undefined = await response.json();
  //       console.log('api validation result: ', result?.response);
  //       setValidation(result);
  //     } catch (error) {
  //       console.error('error detail', error);
  //     }
  //   };

  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
      {certification?.response && (
        <section className={style.stamp}>
          {
            //FIXME: validation is nullable, so y async load drops Null pointer exception error.
            certification?.response?.at(-1) === 'VIGENTE' ? (
              <Image src={validStamp} alt='valid' />
            ) : (
              <Image src={nullStamp} alt='void' />
            )
          }

          <article className={style.dialog}>
            <a href={certification.source} target='_blank'>
              {/* cspell:disable */}
              <p>licencia</p>
              <p>{certification?.response?.at(-1)?.toLowerCase()}</p>
            </a>
          </article>
        </section>
      )}
    </>
  );
}

export default Validation;
