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
      <section className={style.header}>
        <h2>resultado</h2>

        <p>
          {res?.search.size} mujeres profesionales encontradas en{' '}
          <span>{res?.search.location}</span> :{/* scope loop */}
        </p>
      </section>

      <section className={style.body}>
        {res &&
          Object.entries(res?.response).map(([scope, listProviders]) => {
            if (listProviders.length) {
              //filter empty list
              return (
                <article key={scope} className={style.territorialSection}>
                  <h3>
                    {scopeSectionTitle(scope as Territory)} ({listProviders.length})
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
                </article>
              );
            }
          })}
      </section>
    </section>
  );
};

function scopeSectionTitle(scope: Territory) {
  switch (scope) {
    case 'city': {
      return 'en tu comuna';
    }
    case 'province': {
      return 'a tu alrededor';
    }
    case 'region': {
      return 'en tu región';
    }
    default:
      return undefined;
  }
}
