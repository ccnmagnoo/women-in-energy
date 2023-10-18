import { ResultProviders, Service, Territory } from '@/Models/Providers';
import style from './Providers.module.scss';
import React from 'react';
import { InputService } from '@/Models/Input';
import { ProviderCard } from './ProviderCard';

export function ProvidersContainer<S extends Service>({
  res,
  req,
}: {
  res?: ResultProviders<S>;
  req: Partial<InputService>;
}) {
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
          Object.entries(res?.response).map(([scope, providersList]) => {
            if (providersList.length) {
              //filter empty list
              return (
                <article key={scope} className={style.territorialSection}>
                  <h3>
                    {scopeSectionTitle(scope as Territory)} ({providersList.length})
                  </h3>
                  <ul>
                    {/* sorting given lower license priority */}
                    {providersList
                      .sort((a, b) => (b.license.category > a.license.category ? 1 : -1))
                      .map((provider) => {
                        return (
                          <li key={provider.uuid} data-scope={scope}>
                            <ProviderCard
                              provider={provider}
                              scope={scope as Territory}
                            />
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
}

function scopeSectionTitle(scope: Territory) {
  switch (scope) {
    case 'city': {
      return 'en tu comuna';
    }
    case 'province': {
      return 'en alrededores';
    }
    case 'region': {
      return 'en tu región';
    }
    default:
      return undefined;
  }
}
