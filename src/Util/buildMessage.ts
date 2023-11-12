import { Provider, Service } from '@/Models/Providers';
import { getSession } from 'next-auth/react';

async function buildMessage<S extends Service>(
  provider?: Provider<S>,
  params?: Record<string, string | undefined>
) {
  const session = await getSession();
  const serviceMessage = `Junto con saludar ${provider?.personal.name}%0D
    Necesito que pueda cotizar la siguiente tarea:%0D
    ${params?.description ?? 'servicios profesionales'} ,espero que puedas ayudarme.%0D%0D
    Mis datos son:%0D
    ${session?.user?.name}, mi email es: ${
    session?.user?.email ?? '☝ este mismo contacto'
  }.%0D%0D
    Muchas gracias de antemano 😊.%0D%0D
    Mensaje enviado mediante http://instaladoras.vercel.app%0D
    del Ministerio de Energía:%0D
    Apoyando a las mujeres profesionales de Chile 💪.
    ` as const;

  return serviceMessage;
}

export default buildMessage;
