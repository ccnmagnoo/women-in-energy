import { NextRequest as Req, NextResponse as Res } from 'next/server';

function handler(req: Request) {
  //retrieve params
  const { searchParams } = new URL(req.url);
  const service = searchParams.get('service');
  return Res.json({ message: 'hello', service: service });
}

export { handler as GET };
