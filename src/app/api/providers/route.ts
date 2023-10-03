import { NextRequest as Req, NextResponse as Res } from 'next/server';
import { ServiceUrl } from '../verification/Service';
import { getService } from '../libs/validationLibs';
import { InputService } from '@/Models/Input';
import { getTerritory } from 'chilean-territory-code';

async function handler(req: Req, res: Res) {
  const { searchParams } = new URL(req.url);
  const searchCriteria: Partial<InputService> = {
    service: getService(searchParams.get('service')),
    location: getTerritory(searchParams.get('location') ?? undefined, 'city')?.name,
  };

  return Res.json({ foo: 'bar' }, { status: 200 });
}

export { handler as GET };
