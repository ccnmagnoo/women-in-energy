import { ElectricInstall, GasInstall } from '@/Models/Competence';
import Image from 'next/image';
import React from 'react';
import style from './Resume.module.scss';

export const Install = <I extends GasInstall | ElectricInstall>({
  install,
}: {
  install: I;
}) => {
  return (
    <li key={install.technology}>
      <Image src={install.icon} alt={'⚡'}></Image>
      <section>
        <h4>{install.technology}</h4>
        <p>
          {install.limitSize}
          <span className={style.unit}>{install.unit}</span>
        </p>
        {/* specific section depending on type of Service GAS/ElI */}
        {install.unit === 'kW' ? (
          <div>
            <p>
              alim: {install.feederSize}
              <span className={style.unit}>{install.unit}</span>
            </p>
            <p>voltaje {install.voltage}</p>
          </div>
        ) : undefined}
        {install.unit === 'Kg' ? (
          <div>
            <p>presion {install.pressure}</p>
          </div>
        ) : undefined}
      </section>
    </li>
  );
};
