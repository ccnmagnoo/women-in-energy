import { NextRequest as Req, NextResponse as Res } from 'next/server';

async function handler(req: Req, res: Res) {
  return Res.json({ foo: 'bar' }, { status: 200 });
}

export { handler as GET };
