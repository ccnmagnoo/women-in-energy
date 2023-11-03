import { Provider, Service } from '@/Models/Providers';
import { getSession } from 'next-auth/react';

async function buildMessage<S extends Service>(
  provider?: Provider<S>,
  params?: Record<string, string | undefined>
) {
  const session = await getSession();
  const serviceMessage = `Junto con saludar ${provider?.personal.name}%0D
    Necesito que me pueda colaborar con la siguiente tarea:%0D
    ${params?.description ?? 'servicios profesionales'} ,espero que puedas ayudarme.%0D%0D
    Mis datos son:%0D
    ${session?.user?.name}, mi email es: ${session?.user?.email}.%0D%0D
    Muchas gracias.%0D%0D
    Promoviendo a las mujeres técnicas de Chile:%0D
    http://instaladoras.web.app del minenergia.cl
    ` as const;

  return serviceMessage;
}

export default buildMessage;
