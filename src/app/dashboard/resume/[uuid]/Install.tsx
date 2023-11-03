import { ElectricInstall, GasInstall } from '@/Models/Competence';
import Image from 'next/image';
import React from 'react';
import infinite_symbol from '@/app/static/infinite-symbol.svg';
import style from './Resume.module.scss';

export const Install = <I extends GasInstall | ElectricInstall>({
  install,
}: {
  install: I;
}) => {
  return (
    <li className={style.install} key={install.technology}>
      <Image src={install.icon} alt={'⚡'}></Image>
      <p className={style.outside_limits}>
        <p>{install.limitSize === Infinity ? <NoLimit /> : install.limitSize}</p>
        <span className={style.unit}>{install.unit}</span>
      </p>
      <section>
        <article>
          <h4>{install.technology}</h4>
        </article>
        <article>
          <p className={style.limits}>
            {install.limitSize === Infinity ? '>600' : install.limitSize}
          </p>
          <span className={style.unit}>{install.unit}</span>

          {/* specific section depending on type of Service GAS/ElI */}
          {install.unit === 'kW' ? <p> volt: {install.voltage}</p> : undefined}
          {install.unit === 'Kg' ? (
            <p> presión: {install.pressure} pressure </p>
          ) : undefined}
        </article>
      </section>
    </li>
  );
};

export const NoLimit = () => {
  return <Image src={infinite_symbol} alt={'sin tope'} />;
};
