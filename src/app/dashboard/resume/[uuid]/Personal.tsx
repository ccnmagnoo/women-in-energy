import { Eli, Gas, Provider, Service } from '@/Models/Providers';
import React from 'react';
import style from './Resume.module.scss';
import { gasCompetence, eliCompetence, CompetenceList } from '@/Models/Competence';
import { CompetenceCards } from './Competence';

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
      <a href={regulationResource(provider?.license.service)} target='_blank'>
        <h3>
          <p>cerficación SEC</p>
          <p>{provider?.license.service === 'eli' ? 'eléctrica' : 'gas'}</p>
          <span>clase {provider?.license.category}</span>
        </h3>
      </a>
      <p>Servicios en {provider?.address.city} y alrededores</p>

      {provider && <CompetenceCards competence={competence[provider.license.category]} />}
    </article>
  );
};

const regulationResource = (service?: Service) => {
  switch (service) {
    case 'eli': {
      return 'https://www.sec.cl/area-instaladores/instaladores-electricos/#1582631689365-5ce39298-c21f';
    }
    case 'gas': {
      return 'https://www.sec.cl/area-instaladores/instaladores-electricos/#1582631689386-798bb9c4-c517';
    }
    default: {
      return undefined;
    }
  }
};
