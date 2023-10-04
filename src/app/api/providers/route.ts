import { NextRequest as Req, NextResponse as Res } from 'next/server';
import { getService } from '../libs/validationLibs';
import { InputService } from '@/Models/Input';
import { getTerritory, getCitiesList } from 'chilean-territory-code';
import {
  DocumentData,
  collection,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../libs/database';
import { Cut } from 'chilean-territory-code/build/models/territory';

async function handler(req: Req, res: Res) {
  const { searchParams } = new URL(req.url);
  const toSearch: Partial<InputService> = {
    service: getService(searchParams.get('service')),
    location: getTerritory(searchParams.get('location') ?? undefined, 'city')?.name,
  };

  //territorial scope
  const scope: Record<'city' | 'province' | 'region', Cut['city'][]> = {
    city: [toSearch.location ?? ''],
    province:
      getCitiesList(toSearch.location, 'city', 'province')?.map((it) => it.city) ?? [],
    region:
      getCitiesList(toSearch.location, 'city', 'region')?.map((it) => it.city) ?? [],
  };

  //each territorial scope exclude children cities
  const redux_scope: typeof scope = {
    city: scope.city,
    province: scope.province.filter((it) => !scope.city.includes(it)),
    region: scope.region.filter(
      (it) => !scope.province.includes(it) || !scope.city.includes(it)
    ),
  };

  console.log('redux scopes', redux_scope);

  //firebase query
  const providersQuery = query(
    collection(db, '/energy_providers/source_providers/providers'),
    where('personal.gender', '==', 'female'),
    where('address.city', '==', toSearch.location),
    where('license.service', '==', toSearch.service)
  );

  const snapshot = await getDocs(providersQuery);
  const result: DocumentData[] = [];
  snapshot.forEach((doc) => {
    result.push(doc.data());
  });

  return Res.json(
    { search: { ...toSearch, size: result.length }, response: result },
    { status: 200 }
  );
}

/**
 * search for professionals providers in firebase
 */
export { handler as GET };
