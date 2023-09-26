import { NextApiRequest } from 'next';
import { NextRequest as Req, NextResponse as Res } from 'next/server';

async function handler(req: Request) {
  //retrieve params
  const { searchParams } = new URL(req.url);
  const service = searchParams.get('service');

  //fetch
  const form = new FormData();
  form.append('action', 'buscar');
  form.append('rut', '14.189.412-9');
  form.append('ambito', '1');

  const data = await fetch(
    'https://wlhttp.sec.cl/validadorInstaladores/sec/consulta.do',
    {
      method: 'POST',
      headers: { 'Content-Type': 'text/html;charset=utf-8' },
      body: form,
    }
  );

  console.log('fetching data☢️', data.body);

  //data res
  return Res.json({ info: 'test' });
}

export { handler as GET };
