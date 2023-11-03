import { Provider, Service } from '@/Models/Providers';
import React from 'react';
import style from './Resume.module.scss';

export const BigContact = <S extends Service>({
  provider,
}: {
  provider?: Provider<S>;
}) => {
  return <section className={style.contact}>Contact</section>;
};
