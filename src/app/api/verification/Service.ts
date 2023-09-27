import { InputService } from '@/Models/Input';

export type SecPayload = {
  ambito: 1 | 2;
  rut: string;
  accion: 'buscar';
};

export type ServiceUrl = Pick<InputService, 'service'> & { rut: string };
