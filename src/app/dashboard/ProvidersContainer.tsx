import { ResultProviders } from '@/Models/Providers';
import style from './ProvidersContainer.module.scss';
import React from 'react';

export const ProvidersContainer = ({ res }: { res?: ResultProviders }) => {
  return (
    <section className={style.container}>
      <h1>proveedoras</h1>
      {res?.search.size} mujeres profesionales encontradas
    </section>
  );
};
