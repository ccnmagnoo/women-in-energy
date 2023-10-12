import { ResultProviders } from '@/Models/Providers';
import style from './ProvidersContainer.module.scss';
import React from 'react';
import { InputService } from '@/Models/Input';

export const ProvidersContainer = ({
  res,
  req,
}: {
  res?: ResultProviders;
  req: Partial<InputService>;
}) => {
  return (
    <section className={style.container}>
      <h1>resultado</h1>
      <p>
        {res?.search.size} mujeres profesionales encontradas en{' '}
        <span>{res?.search.location}</span> :{/* scope loop */}
      </p>

      {res &&
        Object.entries(res?.response).map(([scope, listProviders]) => {
          return (
            <section key={scope}>
              {scope} ({listProviders.length})
              {listProviders.map((provider) => {
                return (
                  <article key={provider.uuid}>
                    {provider.personal.name} {provider.rut}
                  </article>
                );
              })}
            </section>
          );
        })}
    </section>
  );
};
