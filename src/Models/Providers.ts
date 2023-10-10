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

type Service = 'eli' | 'gas';
type License = {
  service: Service;
  category: 'A' | 'B' | 'C' | 'D' | '1' | '2' | '3' | '4' | '1 y 4'; //Letters: eli , Numbers:gas
};

type Contact = {
  phone: number;
  email: string;
  movil: number;
};

type Provider = {
  rut: string;
  address: Address<{ street?: string }>;
  personal: Partial<Personal>;
  contact: Partial<Contact>;
  license: License;
  updateAt: Date;
  uuid: string;
};
//main retrieve object from api/providers
type ResultProviders = {
  search: SearchStats<{ size: number }>;
  response: SearchResponse<Provider>; //response by scope
};

export type { Service, SearchResponse, Provider, ResultProviders };
