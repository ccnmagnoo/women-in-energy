//ref https://www.sec.cl/area-instaladores/instaladores-electricos/#1582631689365-5ce39298-c21f

import { unwatchFile } from 'fs';
import { Eli, Gas, License, Service } from './Providers';

type High = 'high';
type Medium = 'medium';
type Low = 'low';

interface Install<S extends Service> {
  technology: S extends Eli
    ? 'instalaciones' | 'motores' | 'alumbrado' | 'calefacción'
    : 'instalaciones' | 'producción' | 'almacenamiento' | 'transporte';
  description?: string;
  limitSize?: number;
  unit: S extends Eli ? 'kW' : 'Kg' | undefined;
}

interface ElectricInstall extends Install<Eli> {
  feederSize?: number;
  voltage: High | Low;
}
interface GasInstall extends Install<Gas> {
  pressure: High | Medium | Low;
}

interface Competence<S extends Service> {
  resume: string;
  fireDanger?: boolean;
  studies: string[];
  install: S extends Eli ? ElectricInstall[] : GasInstall[];
}

type CompetenceList<S extends Service> = {
  [K in License<S>['category']]: Competence<S>;
};

const EliCompetence: CompetenceList<Eli> = {
  A: {
    resume: 'Sin límite de potencia Instalada',
    fireDanger: true,
    studies: ['Ingeniería Civil Eléctrica', 'Ingeniería Ejecución Eléctrica'],
    install: [
      {
        voltage: 'high',
        technology: 'instalaciones',
        limitSize: Infinity,
        feederSize: Infinity,
        unit: 'kW',
      },
      {
        voltage: 'high',
        technology: 'alumbrado',
        limitSize: Infinity,
        feederSize: Infinity,
        unit: 'kW',
      },
      {
        voltage: 'high',
        technology: 'calefacción',
        limitSize: Infinity,
        feederSize: Infinity,
        unit: 'kW',
      },
      {
        voltage: 'high',
        technology: 'motores',
        limitSize: Infinity,
        feederSize: Infinity,
        unit: 'kW',
      },
    ],
  },
  B: {
    resume: 'Instalaciones de baja tensión con riesgo',
    fireDanger: true,
    studies: ['Técnico Electricista', 'Técnico Equivalente'],
    install: [
      {
        voltage: 'low',
        technology: 'instalaciones',
        limitSize: 500,
        feederSize: undefined,
        unit: 'kW',
      },
      {
        voltage: 'low',
        technology: 'alumbrado',
        limitSize: 100,
        feederSize: 10,
        unit: 'kW',
      },
      {
        voltage: 'low',
        technology: 'calefacción',
        limitSize: 50,
        feederSize: 10,
        unit: 'kW',
      },
      {
        voltage: 'low',
        technology: 'motores',
        limitSize: 50,
        feederSize: 10,
        unit: 'kW',
      },
    ],
  },
  C: {
    resume: 'Instalaciones de baja tensión sin riesgo de incendio',
    fireDanger: false,
    studies: ['Técnico Electricista', 'Técnico Equivalente'],
    install: [
      {
        voltage: 'low',
        technology: 'instalaciones',
        limitSize: 500,
        feederSize: undefined,
        unit: 'kW',
      },
      {
        voltage: 'low',
        technology: 'alumbrado',
        limitSize: 100,
        feederSize: 10,
        unit: 'kW',
      },
      {
        voltage: 'low',
        technology: 'calefacción',
        limitSize: 50,
        feederSize: 10,
        unit: 'kW',
      },
      {
        voltage: 'low',
        technology: 'motores',
        limitSize: 50,
        feederSize: 10,
        unit: 'kW',
      },
    ],
  },
  D: {
    resume: 'Instalaciones de baja tensión domiciliarias',
    fireDanger: false,
    studies: ['Título de Especialidad Eléctrica'],
    install: [
      {
        voltage: 'low',
        technology: 'instalaciones',
        limitSize: 10,
        feederSize: undefined,
        unit: 'kW',
      },
      {
        voltage: 'low',
        technology: 'calefacción',
        limitSize: 5,
        feederSize: undefined,
        unit: 'kW',
      },
      {
        voltage: 'low',
        technology: 'motores',
        limitSize: 5,
        feederSize: undefined,
        unit: 'kW',
      },
    ],
  },
};

const GasCompetence: CompetenceList<Gas> = {
  '1': {
    resume: 'Instalaciones de gas de alta presión',
    fireDanger: true,
    studies: [
      'Ingeniería Civil Mecánica',
      'Ingeniería Civil Química',
      'Ingeniería Ejecución a fin',
    ],
    install: [
      {
        pressure: 'high',
        technology: 'instalaciones',
        limitSize: undefined,
        unit: undefined,
      },
      {
        pressure: 'high',
        technology: 'almacenamiento',
        limitSize: Infinity,
        unit: 'Kg',
      },
      {
        pressure: 'high',
        technology: 'transporte',
        limitSize: undefined,
        unit: undefined,
      },
      {
        pressure: 'high',
        technology: 'producción',
        limitSize: undefined,
        unit: undefined,
      },
    ],
  },
  '2': {
    resume: 'Instalaciones de media presión',
    fireDanger: true,
    studies: ['Ingeniería Civil', 'Ingeniería Ejecución', 'Ingeniería equivalente'],
    install: [
      {
        pressure: 'medium',
        technology: 'almacenamiento',
        limitSize: 6000,
        unit: 'Kg',
      },
    ],
  },
  '3': {
    resume: 'Instalaciones interiores y baja presión',
    fireDanger: true,
    studies: ['Técnico', 'Formación Técnica-Profesional', ''],
    install: [
      {
        pressure: 'low',
        technology: 'almacenamiento',
        limitSize: 60,
        unit: 'Kg',
      },
    ],
  },
  '4': {
    resume: 'Instalaciones de biogás',
    fireDanger: true,
    studies: ['Tener licencia clase 1'],
    install: [
      {
        pressure: 'high',
        technology: 'almacenamiento',
        limitSize: Infinity,
        unit: 'Kg',
      },
    ],
  },
  '1 y 4': {
    resume: 'Instalaciones de alta presión y biogás',
    fireDanger: true,
    studies: ['Ingeniería Civil', 'Ingeniería Ejecución'],
    install: [
      {
        pressure: 'high',
        technology: 'almacenamiento',
        limitSize: Infinity,
        unit: 'Kg',
      },
    ],
  },
};
