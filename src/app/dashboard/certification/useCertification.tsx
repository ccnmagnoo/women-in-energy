import buildUrl from '@/app/api/libs/buildUrl';
import { getDottedRut } from '@/app/api/libs/validationLibs';
import { SecPayload, ServiceUrl } from '@/app/api/verification/Service';
import React, { useEffect, useState } from 'react';
import * as cheerio from 'cheerio';

export const useCertification = ({ service }: { service: Partial<ServiceUrl> }) => {
  const [response, setResponse] = useState<
    { response: string[]; source: string } | undefined
  >(undefined);

  useEffect(() => {
    const payload: SecPayload = {
      ambito: service.service === 'gas' ? 2 : 1,
      rut: getDottedRut(service.rut) ?? 'nd',
      accion: 'buscar',
    };

    async function get() {
      const data = await fetchCertification(payload);
      setResponse(data);
    }

    get();
  }, []);

  return [response];
};

async function fetchCertification(payload: SecPayload) {
  try {
    const data = await fetch(
      'https://wlhttp.sec.cl/validadorInstaladores/sec/consulta.do',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/png,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        },
        body: buildUrl(payload),
      }
    );

    console.log('fetch certification data', data.status);

    const html = await data.text();

    console.log('fetch certification data', html.toString());

    //cheerio data extract
    const $ = cheerio.load(html);
    const result = $('tr.odd').find('td').toArray();
    //extract data for first 6 rows
    const extract = result.splice(0, 5).map((row) => cheerio.load(row).text());
    console.log('fecthing with hook', extract);

    return { response: extract, source: data.url };
  } catch (error) {
    console.error(error);
  }
}
