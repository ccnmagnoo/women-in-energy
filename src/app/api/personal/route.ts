import { collection, doc, getDoc, query } from 'firebase/firestore';
import { NextRequest as Req, NextResponse as Res } from 'next/server';
import { db } from '../libs/database';

async function handler(req: Req, res: Res) {
  //get param uuid
  const { searchParams } = new URL(req.url);
  const uuid = searchParams.get('uuid');

  if (!uuid) return Res.json({}, { status: 400, statusText: 'param required' });

  //firebase

  try {
    const ref = doc(db, '/energy_providers/source_providers/providers', uuid);
    const snap = await getDoc(ref);

    if (!snap.exists())
      return Res.json(
        { response: snap.exists() },
        { status: 404, statusText: ' provider not found' }
      );

    return Res.json({ response: { uuid: ref.id, ...snap.data() } }, { status: 200 });
  } catch (error) {
    return Res.json({}, { status: 505, statusText: error as string });
  }
}

export { handler as GET };
