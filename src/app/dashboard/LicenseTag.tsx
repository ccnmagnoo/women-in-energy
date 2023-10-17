import { License, Service } from '@/Models/Providers';
import style from './License.module.scss';
import React from 'react';

export function LicenseTag<S extends Service>({ license }: { license: License<S> }) {
  const data = license;

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
    </div>
  );
}
