import style from './Providers.module.scss';
import { Provider, Service, Territory } from '@/Models/Providers';
import React from 'react';
import { LicenseTag } from './LicenseTag';

export function ProviderCard<S extends Service>({
  provider,
  scope,
}: {
  provider: Provider<S>;
  scope: Territory;
}) {
  return (
    <article className={style.card} data-scope={scope}>
      <LicenseTag license={provider.license} />
      <h4>{provider.personal.name}</h4>
      <p>{provider.address.city}</p>
    </article>
  );
}
