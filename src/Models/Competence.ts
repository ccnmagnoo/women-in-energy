//ref https://www.sec.cl/area-instaladores/instaladores-electricos/#1582631689365-5ce39298-c21f

import { Eli, Gas, License, Service } from './Providers';

type Voltage = 'high' | 'low';

interface Install {
  technology: string;
  description?: string;
  limitSize?: number;
  feederSize?: number;
  unit: 'kW' | 'Kg';
}

interface Competence {
  fireDanger: boolean;
  installation: Install[];
}

type CompetenceList<S extends Service> = {
  [K in License<S>['category']]: Competence;
};

const EliCompetence: CompetenceList<Eli> = {
  A: { fireDanger: false, installation: [] },
  B: { fireDanger: false, installation: [] },
  C: { fireDanger: false, installation: [] },
  D: { fireDanger: false, installation: [] },
};

const GasCompetence: CompetenceList<Gas> = {
  '1': { fireDanger: false, installation: [] },
  '2': { fireDanger: false, installation: [] },
  '3': { fireDanger: false, installation: [] },
  '4': { fireDanger: false, installation: [] },
  '1 y 4': { fireDanger: false, installation: [] },
};
