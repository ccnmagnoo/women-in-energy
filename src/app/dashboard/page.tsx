'use client';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { InputService } from '@/Models/Input';
import { useContext, useEffect, useState } from 'react';

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

  const build: Record<string, string | undefined> = {};
  Object.keys(searchParams).forEach((key) => {
    build[key] = by_url.get(key) || undefined;
  });

  //providers hooks
  const [providers, setProviders] = useState();
  fetchProviders(build);

  return (
    <main>
      dashboard page <br />
      {build.location} <br />
      {build.description} <br />
      {build.service}
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

    fetch(api);
  } catch (error) {
    console.error(error);
  }
}

export default Dashboard;
