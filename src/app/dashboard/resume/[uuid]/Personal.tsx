import { Eli, Gas, Provider, Service } from '@/Models/Providers';
import React from 'react';
import style from './Resume.module.scss';
import { gasCompetence, eliCompetence, CompetenceList } from '@/Models/Competence';
import { CompetenceCard } from './Competence';

export const Personal = <S extends Service>({
  provider,
}: {
  provider: Provider<S> | undefined;
}) => {
  const competence: CompetenceList<Gas | Eli> =
    provider?.license.service === 'eli' ? eliCompetence : gasCompetence;
  //       ^?
  return (
    <article className={style.personal}>
      <h2>
        {provider?.personal.name?.split(' ')[0]} {provider?.personal.surname}
      </h2>
      <h3>
        <p>cerficación SEC</p>
        <p>{provider?.license.service === 'eli' ? 'eléctrica' : 'gas'}</p>
        <span>clase {provider?.license.category}</span>
      </h3>
      <p>Servicios en {provider?.address.city} y alrededores</p>

      {provider && <CompetenceCard competence={competence[provider.license.category]} />}
    </article>
  );
};
