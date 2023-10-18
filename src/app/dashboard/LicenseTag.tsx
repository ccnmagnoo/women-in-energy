import { Eli, Gas, License, Service } from '@/Models/Providers';
import Image from 'next/image';
import style from './License.module.scss';
import React from 'react';
import { CompetenceList, eliCompetence, gasCompetence } from '@/Models/Competence';

export function LicenseTag<S extends Service>({ license }: { license: License<S> }) {
  const competence: CompetenceList<Gas | Eli> =
    license.service === 'eli' ? eliCompetence : gasCompetence;

  return (
    <div className={style.container}>
      <div className={style.tag}>
        <div className={style.upper}>
          <span className={style.title}>clase</span>
        </div>
        <div className={style.lower}>
          <span className={style.category}>{license.category}</span>
          <span className={style.ico}>{license.service === 'eli' ? '⚡' : '🔥'}</span>
        </div>
      </div>
      <Image src={competence[license.category].icon} alt=''></Image>
    </div>
  );
}
