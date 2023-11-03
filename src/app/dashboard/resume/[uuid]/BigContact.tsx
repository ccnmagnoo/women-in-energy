import { Contact, Provider, Service } from '@/Models/Providers';
import React from 'react';
import style from './Resume.module.scss';
import { BigContactMedia } from './BigContactMedia';

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
              <BigContactMedia
                key={media}
                media={media as keyof Contact}
                identifier={identifier}
              />
            );
          })}
      </ul>
    </section>
  );
};
