import style from './Providers.module.scss';
import { Provider, Territory } from '@/Models/Providers';
import React from 'react';

export const ProviderCard = ({
  provider,
  scope,
}: {
  provider: Provider;
  scope: Territory;
}) => {
  return (
    <article className={style.card} data-scope={scope}>
      {provider.personal.name} {provider.rut}
    </article>
  );
};
