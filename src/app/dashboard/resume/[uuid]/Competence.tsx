import React from 'react';
import style from './Resume.module.scss';
import { Competence } from '@/Models/Competence';
import { Service } from '@/Models/Providers';
import { Install } from './Install';

export const CompetenceCards = <S extends Service>({
  competence,
}: {
  competence: Competence<S>;
}) => {
  return (
    <ul className={style.competence}>
      {competence.install.map((install) => {
        //^?
        return <Install install={install} key={install.technology} />;
        //                ^?
      })}
    </ul>
  );
};
