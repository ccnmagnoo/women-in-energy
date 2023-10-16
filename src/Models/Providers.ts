import { InputService } from './Input';

type SearchStats<T extends {}> = Pick<InputService, 'service' | 'location'> & T;
type Territory = 'city' | 'province' | 'region';
type SearchResponse<L> = {
  [T in Territory]: L[];
}; //API territory alternatives

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
//main retrieve object from api/providers
type ResultProviders<S extends Service> = {
  search: SearchStats<{ size: number }>;
  response: SearchResponse<Provider<S>>; //response by scope
};

export type {
  Service,
  SearchResponse,
  Provider,
  ResultProviders,
  Territory,
  Eli,
  Gas,
  License,
};
