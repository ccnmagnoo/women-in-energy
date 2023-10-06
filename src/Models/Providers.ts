import { InputService } from './Input';

type SearchStats<T extends {}> = Pick<InputService, 'service' | 'location'> & T;
type Territory = 'city' | 'province' | 'region';
type SearchResponse<L> = {
  [T in Territory]: L[];
};

type Address<ADD extends {}> = {
  [T in Territory]?: string;
} & ADD;

type Gender = 'female' | 'male';
type Personal = {
  name: string;
  surname: string;
  birth: number;
  gender: Gender;
};

type Service = 'eli' | 'gas';
type License = {
  service: Service;
  category: 'A' | 'B' | 'C' | 'D' | '1' | '2' | '3' | '4' | '1 y 4';
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

type ResultProviders = {
  search: SearchStats<{ size: number }>;
  response: SearchResponse<Provider>;
};

export type { Service, Provider, ResultProviders };
