'use client';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { InputService } from '@/Models/Input';
import { useState } from 'react';
import { ResultProviders } from '@/Models/Providers';

const Dashboard = () => {
  const by_url = useSearchParams();
  // const service: Partial<InputService> = {
  //   description: by_url.get('description') || undefined,
  //   service: (by_url.get('service') || undefined) as InputService['service'],
  //   location: by_url.get('location') || undefined,
  //   magnitude: (by_url.get('magnitude') || undefined) as InputService['magnitude'],
  // };

  const searchParams: PartialStringified<InputService> = {
    description: undefined,
    service: undefined,
    location: undefined,
    magnitude: undefined,
  };

  const buildParams: Record<string, string | undefined> = {};
  Object.keys(searchParams).forEach((key) => {
    buildParams[key] = by_url.get(key) || undefined;
  });

  //providers hooks
  const [providers, setProviders] = useState(undefined);

  return (
    <main>
      dashboard page <br />
      {buildParams.location} <br />
      {buildParams.description} <br />
      {buildParams.service}
    </main>
  );
};

async function fetchProviders<T extends Record<string, string | undefined>, K>(
  params: T
) {
  try {
    const api =
      '/api/providers?' +
      Object.entries(params)
        .map(([key, value]) => `${key}=${value ?? ''}`)
        .join('&');

    const data = await fetch(api);
    console.log('data', data);
  } catch (error) {
    console.error(error);
  }
}

export default Dashboard;
