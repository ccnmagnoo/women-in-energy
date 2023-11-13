import { NextRequest as Req, NextResponse as Res } from 'next/server';
import { SecPayload, ServiceUrl } from './Service';
import * as cheerio from 'cheerio';
import { getDottedRut, getService } from '../libs/validationLibs';

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
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        Connection: 'keep-alive',
      },
      body: buildUrl(payload),
    }
  );

  const hypertext = await data.text();

  //extracting data if exists
  const $ = cheerio.load(hypertext);
  const result = $('tr.odd').find('td').toArray();

  if (!result.length)
    return Res.json(
      {},
      {
        status: 206,
        statusText: `no certification found for ${service.service}`,
      }
    );

  //data res
  return Res.json(
    {
      response: result.slice(0, 5).map((it) => cheerio.load(it).text()),
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

export { handler as GET };
