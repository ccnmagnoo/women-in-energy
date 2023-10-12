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
      <h2>resultado</h2>
      <p>
        {res?.search.size} mujeres profesionales encontradas en{' '}
        <span>{res?.search.location}</span> :{/* scope loop */}
      </p>

      {res &&
        Object.entries(res?.response).map(([scope, listProviders]) => {
          return (
            <section key={scope} className={`${style.providerSection} ${scope}`}>
              <h3>
                {scope} ({listProviders.length})
              </h3>
              {listProviders.map((provider) => {
                return (
                  <article key={provider.uuid} className={`${style.card} ${scope}`}>
                    {provider.personal.name} {provider.rut} ({provider.address.city})
                  </article>
                );
              })}
            </section>
          );
        })}
    </section>
  );
};
