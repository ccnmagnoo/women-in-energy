//ref https://www.sec.cl/area-instaladores/instaladores-electricos/#1582631689365-5ce39298-c21f

import { Eli, Gas, License, Service } from './Providers';

type High = 'high';
type Low = 'low';

interface Install<S extends Service> {
  technology: S extends Eli
    ? 'instalaciones' | 'motores' | 'alumbrado' | 'calefacción'
    : 'producción' | 'almacenamiento' | 'transporte';
  description?: string;
  limitSize?: number;
  unit: S extends Eli ? 'kW' : 'Kg';
}

interface ElectricInstall extends Install<Eli> {
  feederSize?: number;
  voltage: High | Low;
}
interface GasInstall extends Install<Gas> {
  pressure: High | Low;
}

interface Competence<S extends Service> {
  fireDanger: boolean;
  studies: string[];
  install: S extends Eli ? ElectricInstall[] : GasInstall[];
}

type CompetenceList<S extends Service> = {
  [K in License<S>['category']]: Competence<S>;
};

const EliCompetence: CompetenceList<Eli> = {
  A: { fireDanger: false, studies: [], install: [] },
  B: { fireDanger: false, studies: [], install: [] },
  C: { fireDanger: false, studies: [], install: [] },
  D: { fireDanger: false, studies: [], install: [] },
};

const GasCompetence: CompetenceList<Gas> = {
  '1': { fireDanger: false, studies: [], install: [] },
  '2': { fireDanger: false, studies: [], install: [] },
  '3': { fireDanger: false, studies: [], install: [] },
  '4': { fireDanger: false, studies: [], install: [] },
  '1 y 4': { fireDanger: false, studies: [], install: [] },
};
