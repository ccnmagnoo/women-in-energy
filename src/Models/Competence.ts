//ref https://www.sec.cl/area-instaladores/instaladores-electricos/#1582631689365-5ce39298-c21f
import house from '@/app/static/size-domestic-ico.svg';
import building from '@/app/static/size-building-ico.svg';
import hospital from '@/app/static/size-hospital-ico.svg';
import industry from '@/app/static/size-industry-ico.svg';
import propane from '@/app/static/size-propane-ico.svg';

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
  resume: { details: string; short: string };
  fireDanger?: boolean;
  studies: string[];
  icon?: any;
  install: S extends Eli ? ElectricInstall[] : GasInstall[];
}

type CompetenceList<S extends Service> = {
  [K in License<S>['category']]: Competence<S>;
};

const eliCompetence: CompetenceList<Eli> = {
  A: {
    resume: { details: 'Sin límite de potencia Instalada', short: 'industrial' },
    fireDanger: true,
    icon: industry,
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
    resume: { details: 'Instalaciones de baja tensión con riesgo', short: 'grandes' },
    fireDanger: true,
    icon: hospital,
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
    resume: {
      details: 'Instalaciones de baja tensión sin riesgo de incendio',
      short: 'edificios',
    },
    fireDanger: false,
    icon: building,
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
    resume: {
      details: 'Instalaciones de baja tensión domiciliarias',
      short: 'domiciliario',
    },
    fireDanger: false,
    icon: house,
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

const gasCompetence: CompetenceList<Gas> = {
  '1': {
    resume: { details: 'Instalaciones de gas de alta presión', short: 'industrial' },
    fireDanger: true,
    icon: industry,
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
    resume: { details: 'Instalaciones de media presión', short: 'media presión' },
    fireDanger: true,
    icon: building,
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
    resume: { details: 'Instalaciones interiores y baja presión', short: 'domiciliario' },
    fireDanger: true,
    icon: house,
    studies: ['Técnico', 'Formación Técnica-Profesional'],
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
    resume: { details: 'Instalaciones de biogás', short: 'biogás' },
    fireDanger: true,
    icon: propane,
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
    resume: { details: 'Instalaciones de biogás', short: 'biogás' },
    fireDanger: true,
    icon: propane,
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

export { eliCompetence, gasCompetence };
export type { CompetenceList, Competence, ElectricInstall, GasInstall, Install };
