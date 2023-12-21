import { Provider, Service } from '@/Models/Providers';

function watchLicense<S extends Service>(provider: Provider<S>): string {
  return `https://wlhttp.sec.cl/validadorInstaladores/sec/consulta.do?accion=verInstalador&rutInstalador=${
    provider.rut.split('-')[0]
  }&claseInstalador=${provider.license.category}`;
}

export default watchLicense;
