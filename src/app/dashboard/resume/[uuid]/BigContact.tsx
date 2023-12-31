import { Contact, Provider, Service } from '@/Models/Providers';
import React from 'react';
import style from './Resume.module.scss';
import { Media } from './BigContactMedia';

export const BigContact = <S extends Service>({
  provider,
}: {
  provider?: Provider<S>;
}) => {
  return (
    <section className={style.contact}>
      <ul>
        {provider &&
          Object.entries(provider?.contact).map((par) => {
            const [media, identifier] = par;
            return (
              <Media key={media} media={media as keyof Contact} provider={provider} />
            );
          })}
      </ul>
    </section>
  );
};
