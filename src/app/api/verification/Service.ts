import { InputService } from '@/Models/Input';

/**
 * type used for SEC platform post request payload
 * @param ambito: 1: electricity service & 2: gas services
 * @param rut, social security number with dotted format 10.000.000-0,
 * @param accion, 'buscar' literal to request data
 */
export type SecPayload = {
  ambito: 1 | 2;
  rut: string;
  accion: 'buscar';
};

export type ServiceUrl = Pick<InputService, 'service'> & { rut: string };
