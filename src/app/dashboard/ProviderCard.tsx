import style from './Providers.module.scss';
import { Provider, Territory } from '@/Models/Providers';
import React from 'react';

export const ProviderCard = ({ provider }: { provider: Provider; scope: Territory }) => {
  return <article className={style.card}>{provider.personal.name}</article>;
};
