import { NextRequest as Req, NextResponse as Res } from 'next/server';
import { SecPayload, ServiceUrl } from './Service';
import { URLSearchParams } from 'url';

async function handler(req: Request) {
  //retrieve ?-params
  const { searchParams } = new URL(req.url);

  const service: Partial<ServiceUrl> = {
    service: getService(searchParams.get('service')),
    rut: searchParams.get('rut') ?? undefined,
  };

  //convert to model Payload
  const payload: SecPayload = {
    ambito: 1,
    rut: '14.189.412-9',
    accion: 'buscar',
  };

  const data = await fetch(
    'https://wlhttp.sec.cl/validadorInstaladores/sec/consulta.do',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: buildUrl(payload),
    }
  );
  const hypertext = await data.text();

  //data res
  return Res.json({ response: hypertext });
}

const buildUrl = (payload: Object): string => {
  return Object.entries(payload)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

const getService = (input?: string | null): ServiceUrl['service'] | undefined => {
  if (input) return undefined;
  if (input === 'eli' || input === 'gas') return input as ServiceUrl['service'];
  return undefined;
};

export { handler as GET };
