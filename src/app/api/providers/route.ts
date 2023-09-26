import { NextApiRequest } from 'next';
import { NextRequest as Req, NextResponse as Res } from 'next/server';

async function handler(req: Request) {
  //retrieve params
  const { searchParams } = new URL(req.url);
  const service = searchParams.get('service');

  //fetch
  const payload = {
    ambito: 1,
    rut: '14.189.412-9',
    accion: 'buscar',
  };
  const formData = new FormData();

  const encoded = Object.entries(payload)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  console.log('form data to fetch', formData.get('ambito'));

  const data = await fetch(
    'https://wlhttp.sec.cl/validadorInstaladores/sec/consulta.do',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: encoded,
    }
  );
  const hypertext = await data.text();

  //data res
  return Res.json({ response: hypertext });
}

export { handler as GET };
