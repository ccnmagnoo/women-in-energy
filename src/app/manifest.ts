import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'instaladoras App',
    short_name: 'instaladoras App',
    description: 'Promoviendo a mujeres profesionales instaladoras de Gas y Electricidad',
  };
}
