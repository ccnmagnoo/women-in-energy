import { MetadataRoute } from 'next';
/* cSpell:disable */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'instaladoras App',
    short_name: 'instaladoras App',
    description: 'Promoviendo a mujeres profesionales instaladoras de Gas y Electricidad',
    start_url: '/',
    background_color: '#fff',
    theme_color: 'light',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
    related_applications: [
      {
        platform: 'SEC',
        url: 'http://www.sec.cl',
      },
      {
        platform: 'SEC validation',
        url: 'https://wlhttp.sec.cl',
      },
      { platform: 'Ministerio de Energía', url: 'https://energia.gob.cl' },
    ],
  };
}
