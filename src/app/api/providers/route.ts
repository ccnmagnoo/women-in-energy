import { NextRequest as Req, NextResponse as Res } from 'next/server';
import { getService } from '../libs/validationLibs';
import { InputService } from '@/Models/Input';
import { getTerritory, getCitiesList, getCut } from 'chilean-territory-code';
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
import { SearchResponse, Service } from '@/Models/Providers';

async function handler(req: Req, res: Res) {
  const { searchParams } = new URL(req.url);
  const toSearch: Partial<InputService> = {
    service: getService(searchParams.get('service')),
    location: getTerritory(searchParams.get('location') ?? undefined, 'city')?.name,
  };

  //territorial scope
  const scope: SearchResponse<Cut['city']> = {
    city: [toSearch.location ?? ''],
    province:
      getCitiesList(toSearch.location, 'city', 'province')?.map((it) => it.city) ?? [],
    region: [getCut(toSearch.location ?? '', 'city')?.region ?? ''],
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
  let result: SearchResponse<DocumentData> = {
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
    console.log('searching on provincial scope ', limitedCities.length, 'cities');

    result.province = await fetchDocs(
      toSearch.service,
      db,
      where('address.city', 'in', limitedCities)
    );
  }
  //firebase query regional siblings
  if (result.province.length + result.city.length <= 10) {
    console.log('searching on regional scope ', scope.region[0], 'region');

    const regionResult = await fetchDocs(
      toSearch.service,
      db,
      where('address.region', '==', scope.region[0])
    );
    //filter documents already exists in city and provincial scope, filter by uuid
    result.region = regionResult.filter((documentData) => {
      return (
        !result.city.map((it) => it.uuid).includes(documentData.uuid) &&
        !result.province.map((it) => it.uuid).includes(documentData.uuid)
      );
    });
  }
  //resume with number on result
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
  service: Service = 'eli',
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
