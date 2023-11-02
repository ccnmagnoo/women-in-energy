import { Provider, Service } from '@/Models/Providers';
import React from 'react';
import style from './Resume.module.scss';

export const Personal = <S extends Service>({
  provider,
}: {
  provider: Provider<S> | undefined;
}) => {
  return (
    <article className={style.personal}>
      <h2>
        {provider?.personal.name?.split(' ')[0]} {provider?.personal.surname}
      </h2>
      <h3>
        <p>Certificada SEC</p>
        <p>{provider?.license.service === 'eli' ? 'electrica' : 'gas'}</p>
        <span>clase {provider?.license.category}</span>
      </h3>
      <p>Servicios en {provider?.address.city} y alrededores</p>
    </article>
  );
};
