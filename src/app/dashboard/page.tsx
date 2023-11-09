'use client';
import { useSearchParams } from 'next/navigation';
import { InputService } from '@/Models/Input';
import { useEffect, useState } from 'react';
import { Eli, Gas, ApiResponse, SearchResponse, Provider } from '@/Models/Providers';
import dynamic from 'next/dynamic';
import { Loading } from '@/components/Loading';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { KeyObject } from 'crypto';

const DynamicProviderContainer = dynamic(
  () => import('./ProvidersContainer').then((mod) => mod.ProvidersContainer),
  {
    loading: () => <Loading size={40} />,
  }
);

const Dashboard = () => {
  const by_url = useSearchParams();
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
      //const data = await fetchProviders(buildParams);
      //setProviders(data);
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

/**
 * How to deploy at hosting Next JS on firebase
 * https://firebase.google.com/docs/hosting/frameworks/nextjs?hl=es-419
 * next js docs
 * https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props
 * video
 * https://youtu.be/TJqJ-WY3XxA
 */

export const getServerSideProps = (async (context) => {
  //url params
  const params: PartialStringified<InputService> = {
    description: undefined,
    service: undefined,
    location: undefined,
    magnitude: undefined,
  };

  const build: Record<string, string | undefined> = {};
  Object.keys(params).forEach((key) => {
    const get = context.query[key];
    build[key] = get as string;
  });

  //url fetch
  const request_params = Object.entries(build)
    .map(([key, value]) => key + '=' + value)
    .join('&');
  const request_url = '/api/provider?' + request_params;

  const res = await fetch(request_params);
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetServerSideProps<{
  repo: number;
}>;

export default Dashboard;
