import { NextRequest as Req, NextResponse as Res } from 'next/server';
import { getService } from '../libs/validationLibs';
import { InputService } from '@/Models/Input';
import { getTerritory, getCitiesList } from 'chilean-territory-code';
import {
  DocumentData,
  Firestore,
  QueryFieldFilterConstraint,
  collection,
  getDocs,
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

  //firebase query just city
  let result: Record<'city' | 'province' | 'region', DocumentData[]> = {
    city: [],
    province: [],
    region: [],
  };

  result.city = await fetchDocs(
    toSearch.service,
    db,
    where('address.city', '==', toSearch.location)
  );
  //firebase query provincial siblings
  if (result.city.length <= 10) {
    const limitedCities = redux_scope.province.splice(0, 30);
    console.log('searching on provincial scope ', limitedCities.length);

    result.province = await fetchDocs(
      toSearch.service,
      db,
      where('address.city', 'in', limitedCities)
    );
  }
  //firebase query regional siblings
  if (result.province.length + result.city.length <= 10) {
    const limitedCities = redux_scope.region.splice(0, 30);
    console.log('searching on regional scope ', limitedCities.length);
    result.region = await fetchDocs(
      toSearch.service,
      db,
      where('address.city', 'in', limitedCities)
    );
  }

  let result_size = 0;
  for (let key in result) {
    result_size += result[key as 'city' | 'province' | 'region'].length;
  }

  return Res.json(
    { search: { ...toSearch, size: result_size }, response: result },
    { status: 200 }
  );
}

async function fetchDocs(
  service: InputService['service'] = 'eli',
  db: Firestore,
  territorialFilter: QueryFieldFilterConstraint
) {
  const providersQuery = query(
    collection(db, '/energy_providers/source_providers/providers'),
    where('personal.gender', '==', 'female'),
    territorialFilter,
    where('license.service', '==', service)
  );
  const snapshot = await getDocs(providersQuery);
  const result: DocumentData[] = [];
  snapshot.forEach((doc) => {
    result.push({ ...doc.data(), uuid: doc.id });
  });
  return result;
}

/**
 * search for professionals providers in firebase
 */
export { handler as GET };
