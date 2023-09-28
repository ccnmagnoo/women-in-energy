import { NextRequest as Req, NextResponse as Res } from 'next/server';
import { SecPayload, ServiceUrl } from './Service';
import * as cheerio from 'cheerio';

async function handler(req: Req, res: Res) {
  //retrieve ?-params
  const { searchParams } = new URL(req.url);
  const service: Partial<ServiceUrl> = {
    service: getService(searchParams.get('service')),
    rut: getRut(searchParams.get('rut')),
  };

  if (!service.rut)
    return Res.json({ message: 'invalid identifier input' }, { status: 400 });
  if (!service.service)
    return Res.json({ message: 'invalid service type' }, { status: 400 });

  //convert to model Payload
  const payload: SecPayload = {
    ambito: service.service === 'gas' ? 2 : 1,
    rut: service.rut ?? '',
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

  //extracting data if exists
  const $ = cheerio.load(hypertext);
  const result = $('tr.odd').find('td').toArray();

  if (!result.length)
    return Res.json(
      { response: 'no data' },
      {
        status: 206,
        statusText: `no certification found for ${service.service}`,
      }
    );

  //data res
  return Res.json(
    { response: result.slice(0, 5).map((it) => cheerio.load(it).text()) },
    { status: 200 }
  );
}

/**
 *
 * @param payload object to convert to x-www-form request
 * @returns string with x-www-form format, this is requested by POST source
 */
const buildUrl = (payload: Object): string => {
  return Object.entries(payload)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

/**
 * @param input string corresponding a type of services to search "eli"|"gas"|undefined
 * @returns it´s if a valid service type, if not gives undefined
 */
const getService = (input?: string | null): ServiceUrl['service'] | undefined => {
  if (!input) return undefined;
  if (input === 'eli' || input === 'gas') return input as ServiceUrl['service'];
  return undefined;
};

/**
 * @param rut string of rol id format "12000000-1"
 * @returns string with dot format "12.000.000-1"
 */
const getRut = (rut?: string | null): string | undefined => {
  if (!rut) return undefined;

  const [body, cv] = rut.split('-', 2);

  if (typeof +body !== 'number' || isNaN(+body)) return undefined;

  return (+body).toLocaleString().replace(',', '.') + '-' + cv;
};

export { handler as GET };
