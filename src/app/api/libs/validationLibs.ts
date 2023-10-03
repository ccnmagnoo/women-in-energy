import { ServiceUrl } from '../verification/Service';

/**
 * @param input string corresponding a type of services to search "eli"|"gas"|undefined
 * @returns it´s if a valid service type, if not gives undefined
 */
const getService = (input?: string | null): ServiceUrl['service'] | undefined => {
  if (!input) return undefined;
  if (input === 'eli' || input === 'gas') return input as ServiceUrl['service'];
  return undefined;
};

/**
 * @param rut string of rol id format "12000000-1"
 * @returns string with dot format "12.000.000-1"
 */
const getRut = (rut?: string | null): string | undefined => {
  if (!rut) return undefined;

  const [body, cv] = rut.split('-', 2);

  if (typeof +body !== 'number' || isNaN(+body)) return undefined;

  return (+body).toLocaleString().replace(',', '.') + '-' + cv;
};

export { getRut, getService };
