import { InputService } from '@/Models/Input';
import { Eli, Gas, ApiResponse, SearchResponse, Provider } from '@/Models/Providers';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { ProvidersContainer } from './ProvidersContainer';

const Dashboard = ({
  providers,
  buildParams,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main>
      <ProvidersContainer res={providers} req={buildParams} />
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

  const buildParams: Record<string, string | undefined> = {};
  Object.keys(params).forEach((key) => {
    const get = context.query[key];
    buildParams[key] = get as string;
  });

  //url fetch
  const request_params = Object.entries(buildParams)
    .map(([key, value]) => key + '=' + value)
    .join('&');
  const request_url = '/api/provider?' + request_params;

  console.log('api request to url: ', request_url);

  const res = await fetch(request_url);
  const providers = await res.json();
  return { props: { providers, buildParams } };
}) satisfies GetServerSideProps<{
  providers: ApiResponse<SearchResponse<Provider<Eli | Gas>>>;
  buildParams: Record<string, string | undefined>;
}>;

export default Dashboard;
