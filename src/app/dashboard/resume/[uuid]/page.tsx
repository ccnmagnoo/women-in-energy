'use client';
import React, { useEffect, useState } from 'react';
import style from './Resume.module.scss';
import { Provider, Service } from '@/Models/Providers';

function ProviderResume<S extends Service>({ params }: { params: { uuid: string } }) {
  type ProviderResponse = { response: Provider<S> };
  const [provider, setProvider] = useState<undefined | ProviderResponse>(undefined);

  useEffect(() => {
    async function fetchProvider() {
      const query = await fetch('/api/personal?uuid=' + params.uuid);
      const data = (await query.json()) as ProviderResponse;
      setProvider(data);
    }
    fetchProvider();
  }, [params.uuid]);

  return (
    <main className={style.main}>
      {provider?.response.rut}
      <section className={style.container}></section>
    </main>
  );
}

export default ProviderResume;
