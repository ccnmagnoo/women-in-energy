import { NextRequest as Req, NextResponse as Res } from 'next/server';
import { SecPayload, ServiceUrl } from './Service';
import * as cheerio from 'cheerio';

/**
 *
 * @param req api params
 * @param res api request
 * @returns promise 200{response:string[],source:url}
 */
async function handler(req: Req, res: Res) {
  //retrieve ?-params
  const { searchParams } = new URL(req.url);
  const service: Partial<ServiceUrl> = {
    service: getService(searchParams.get('service')),
    rut: getDottedRut(searchParams.get('rut')),
  };

  if (!service.rut) return Res.json({}, { status: 400, statusText: 'invalid id' });
  if (!service.service) return Res.json({}, { status: 400, statusText: 'invalid type' });

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
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/png,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        Connection: 'keep-alive',
      },
      body: buildUrl(payload),
    }
  );

  const hypertext = await data.text();

  //extracting data if exists
  const $ = cheerio.load(hypertext);
  const result = $('tr.odd').find('td').toArray();
  console.log('cheerio result:', result);

  const extraction = result.splice(0, 5).map((it) => cheerio.load(it).text());

  if (!extraction.length)
    return Res.json(
      { response: extraction, source: data.url },
      {
        status: 206,
        statusText: `no certification found for ${service.service}`,
      }
    );

  //data res

  return Res.json(
    {
      response: extraction,
      source: data.url,
    },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
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
const getDottedRut = (rut?: string | null): string | undefined => {
  if (!rut) return undefined;

  const [body, cv] = rut.split('-', 2);

  if (typeof +body !== 'number' || isNaN(+body)) return undefined;

  return (+body).toLocaleString().replace(',', '.') + '-' + cv;
};

export { handler as GET };
