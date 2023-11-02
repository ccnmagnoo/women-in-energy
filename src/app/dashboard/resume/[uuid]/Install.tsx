import { ElectricInstall, GasInstall } from '@/Models/Competence';
import Image from 'next/image';
import React from 'react';

export const Install = <I extends GasInstall | ElectricInstall>({
  install,
}: {
  install: I;
}) => {
  const current =
    install.unit === 'kW' ? (install as ElectricInstall) : (install as GasInstall);
  return (
    <li key={install.technology}>
      <Image src={''} alt={'⚡'}></Image>
      <div>
        <h4>{install.technology}</h4>
        <p>{install.description}</p>
        <p>
          {install.limitSize}
          {install.unit}
        </p>

        {/* specific section depending on type of Service GAS/ElI */}

        {install.unit === 'kW' ? (
          <div>
            <p>
              {install.feederSize}
              {install.unit}
            </p>
            <p>{install.voltage}</p>
          </div>
        ) : undefined}

        {install.unit === 'Kg' ? (
          <div>
            <p>{install.pressure}</p>
          </div>
        ) : undefined}
      </div>
    </li>
  );
};
