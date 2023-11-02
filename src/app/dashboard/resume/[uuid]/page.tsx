'use client';
import React, { useEffect, useState } from 'react';
import style from './Resume.module.scss';
import { Provider, ApiResponse, Service, ServiceDeclare } from '@/Models/Providers';
import { LicenseTag } from '../../LicenseTag';
import Image from 'next/image';
import avatar from '@/app/static/woman-ico.svg';
import { Card } from './Card';
import { Personal } from './Personal';

function ProviderResume<S extends Service>({ params }: { params: { uuid: string } }) {
  const [provider, setProvider] = useState<undefined | ApiResponse<Provider<S>>>(
    undefined
  );

  useEffect(() => {
    async function fetchProvider() {
      //https://stackoverflow.com/questions/55690143/what-is-the-difference-between-env-local-and-env-development-local
      const query = await fetch('/api/personal?uuid=' + params.uuid);
      const data = (await query.json()) as ApiResponse<Provider<S>>;
      //                                        ^?
      setProvider(data);
    }
    fetchProvider();
  }, [params.uuid]);

  return (
    <main className={style.main}>
      <section className={style.container}>
        <div className={style.top}>
          {/* avatar license card */}
          <Card provider={provider?.response} />
          {/* personal information card */}
          <Personal provider={provider?.response} />
        </div>

        <div className={style.bottom}>contacto</div>
      </section>
    </main>
  );
}

export default ProviderResume;
