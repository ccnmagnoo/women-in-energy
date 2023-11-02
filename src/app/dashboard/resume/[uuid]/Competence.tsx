import React from 'react';
import style from './Resume.module.scss';
import { CompetenceList, Competence } from '@/Models/Competence';
import { Eli, Gas, Service } from '@/Models/Providers';

export const CompetenceCard = <S extends Service>({
  competence,
}: {
  competence: Competence<S>;
}) => {
  return <section className={style.competence}>{competence.resume.short}</section>;
};
