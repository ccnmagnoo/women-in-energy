'use client';
import { useSearchParams } from 'next/navigation';
import { InputService } from '@/Models/Input';
import { useEffect, useState } from 'react';
import { Eli, Gas, ApiResponse, SearchResponse, Provider } from '@/Models/Providers';
import { ProvidersContainer } from './ProvidersContainer';
import dynamic from 'next/dynamic';
import { Loading } from '@/components/Loading';

const DynamicProviderContainer = dynamic(
  () => import('./ProvidersContainer').then((mod) => mod.ProvidersContainer),
  {
    loading: () => <Loading size={40} />,
  }
);

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

  //validation type
  type SetService = typeof buildParams.service extends Eli ? Eli : Gas;

  //providers hooks
  const [providers, setProviders] = useState<
    ApiResponse<SearchResponse<Provider<SetService>>> | undefined
  >(undefined);

  useEffect(() => {
    async function fetch() {
      const data = await fetchProviders(buildParams);
      setProviders(data);
    }

    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <DynamicProviderContainer res={providers} req={buildParams} />
    </main>
  );
};

async function fetchProviders<T extends {}>(params: T) {
  try {
    const api =
      '/api/providers?' +
      Object.entries(params)
        .map(([key, value]) => `${key}=${value ?? ''}`)
        .join('&');

    const data = await fetch(api);

    return data.json();
  } catch (error) {
    console.error(error);
  }
}

export default Dashboard;
