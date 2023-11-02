import { Provider, Service } from '@/Models/Providers';
import React from 'react';
import style from './Resume.module.scss';

import { LicenseTag } from '../../LicenseTag';
import Image from 'next/image';
import avatar from '@/app/static/woman-ico.svg';

export const Card = <S extends Service>({
  provider,
}: {
  provider: Provider<S> | undefined;
}) => {
  return (
    <article className={style.avatarFrame}>
      {provider && <LicenseTag provider={provider} />}
      <section className={style.avatar}>
        <Image src={avatar} alt={''} />
      </section>
    </article>
  );
};
