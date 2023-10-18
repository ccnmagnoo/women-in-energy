import { Eli, Gas, License, Provider, Service } from '@/Models/Providers';
import Image from 'next/image';
import style from './License.module.scss';
import React from 'react';
import { CompetenceList, eliCompetence, gasCompetence } from '@/Models/Competence';
import Validation from './Validation';

export function LicenseTag<S extends Service>({ provider }: { provider: Provider<S> }) {
  const competence: CompetenceList<Gas | Eli> =
    provider.license.service === 'eli' ? eliCompetence : gasCompetence;

  return (
    <div className={style.container}>
      <div className={style.tag}>
        <div className={style.upper}>
          <span className={style.title}>clase</span>
        </div>
        <div className={style.lower}>
          <span className={style.category}>{provider.license.category}</span>
          <span className={style.ico}>
            {provider.license.service === 'eli' ? '⚡' : '🔥'}
          </span>
        </div>
        <Validation provider={provider}></Validation>
      </div>
      <Image src={competence[provider.license.category].icon} alt=''></Image>
    </div>
  );
}
