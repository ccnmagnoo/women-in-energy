import { Eli, Gas, License, Provider, Service } from '@/Models/Providers';
import Image from 'next/image';
import style from './License.module.scss';
import React, { Suspense } from 'react';
import { CompetenceList, eliCompetence, gasCompetence } from '@/Models/Competence';
import loading from '@/app/static/loading.svg';
// import Validation from './Validation';
import dynamic from 'next/dynamic';
import { Loading } from '@/components/Loading';
const DynamicValidation = dynamic(() => import('./Validation'), {
  loading: () => <Loading size={16} />,
});

export function LicenseTag<S extends Service>({ provider }: { provider: Provider<S> }) {
  const competence: CompetenceList<Gas | Eli> =
    provider.license.service === 'eli' ? eliCompetence : gasCompetence;

  return (
    <div className={style.container}>
      <section className={style.tag}>
        <div className={style.upper}>
          <span className={style.title}>clase</span>
        </div>
        <div className={style.lower}>
          <span className={style.category}>{provider.license.category}</span>
          <span className={style.ico}>
            {provider.license.service === 'eli' ? '⚡' : '🔥'}
          </span>
        </div>
        {/* <Validation provider={provider}></Validation> */}
        <Suspense fallback={<Image src={loading} alt='..' />}>
          <DynamicValidation provider={provider} />
        </Suspense>
      </section>
      <section className={style.cornerIco}>
        <Image src={competence[provider.license.category].icon} alt=''></Image>
        <p>{competence[provider.license.category].resume.short}</p>
      </section>
    </div>
  );
}
