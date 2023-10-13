import { ResultProviders, Territory } from '@/Models/Providers';
import style from './Providers.module.scss';
import React from 'react';
import { InputService } from '@/Models/Input';
import { ProviderCard } from './ProviderCard';

export const ProvidersContainer = ({
  res,
  req,
}: {
  res?: ResultProviders;
  req: Partial<InputService>;
}) => {
  return (
    <section className={style.container}>
      <section>
        <h2>resultado</h2>

        <p>
          {res?.search.size} mujeres profesionales encontradas en{' '}
          <span>{res?.search.location}</span> :{/* scope loop */}
        </p>
      </section>

      {res &&
        Object.entries(res?.response).map(([scope, listProviders]) => {
          return (
            <section key={scope} className={style.providerSection}>
              <h3>
                {scope} ({listProviders.length})
              </h3>
              <ul>
                {listProviders.map((provider) => {
                  return (
                    <li key={provider.uuid} data-scope={scope}>
                      <ProviderCard provider={provider} scope={scope as Territory} />
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
    </section>
  );
};
