import { ServiceUrl } from './../app/api/verification/Service';
import { InputService } from './Input';

type SearchStats<T extends {}> = Pick<InputService, 'service' | 'location'> & T;
type Territory = 'city' | 'province' | 'region';

/**
 * @type Search response Generic for API response
 * @param L generic for providers or variations
 */
type SearchResponse<L> = {
  [T in Territory]: L[];
}; //API territory alternatives

/**
 * @type Address where @param ADD is generic not null for add another property,
 * and @param T from city|province|region, string address scope
 */
type Address<ADD extends {}> = {
  [T in Territory]?: string;
} & ADD; //Composite in API response, must add the {street:string} object

type Gender = 'female' | 'male';
type Personal = {
  name: string;
  surname: string;
  birth: number; //just estimated year;
  gender: Gender;
};

type Eli = 'eli';
type Gas = 'gas';
type Service = Eli | Gas;

/**
 * @enum ES-CL language energetic specification, only frontend.
 */
enum ServiceDeclare {
  Eli = 'electrica',
  Gas = 'gas',
}

/**
 * @type License dynamic category on S extension
 * @param category A,B,C,D on S:eli, 1,2,3,4,1 y 5 on S:gas
 */
type License<S extends Service> = {
  service: S;
  category: S extends Eli ? 'A' | 'B' | 'C' | 'D' : '1' | '2' | '3' | '4' | '1 y 4'; //Letters: eli , Numbers:gas
};

type Contact = {
  phone: number;
  email: string;
  movil: number;
};

type Provider<S extends Service> = {
  rut: string;
  address: Address<{ street?: string }>;
  personal: Partial<Personal>;
  contact: Partial<Contact>;
  license: License<S>;
  updateAt: Date;
  uuid: string;
};

/**
 * @type ApiResponse  retrieve object from api/providers,
 * @description  {search:STATS,response:TYPE}
 *  for app api format,
 * */
type ApiResponse<API> = {
  search?: SearchStats<{ size: number }>;
  response: API; //response by scope
};

export type {
  Service,
  SearchResponse,
  Provider,
  ApiResponse,
  Territory,
  Eli,
  Gas,
  License,
  ServiceDeclare,
};
