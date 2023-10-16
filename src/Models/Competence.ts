//ref https://www.sec.cl/area-instaladores/instaladores-electricos/#1582631689365-5ce39298-c21f

import { Service } from './Providers';

type Voltage = 'high' | 'low';

interface Installs {
  name: string;
  description?: string;
  limitSize?: number;
  feederSize?: number;
  unit: 'kW' | 'Kg' | 'Lt';
}

interface Competence {
  service: Service;
  fireDanger: boolean;
  installation: Installs[];
}
