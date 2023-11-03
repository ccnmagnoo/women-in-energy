import React from 'react';
import Image from 'next/image';
import sms from '@/app/static/send-sms-ico.svg';
import email from '@/app/static/send-email-ico.svg';
import style from './Contact.module.scss';
import { Provider, Service } from '@/Models/Providers';
import { InputService } from '@/Models/Input';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

export const Contact = <S extends Service>({ provider }: { provider?: Provider<S> }) => {
  const by_url = useSearchParams();
  const toSearch: PartialStringified<InputService> = {
    description: undefined,
    service: undefined,
    location: undefined,
    magnitude: undefined,
  };

  const session = useSession().data;

  const reqParams: Record<string, string | undefined> = {};
  Object.keys(toSearch).forEach((key) => {
    reqParams[key] = by_url.get(key) || undefined;
  });

  const serviceMessage = `Junto con saludar ${provider?.personal.name}%0D
  Necesito que me pueda colaborar con la siguiente tarea:%0D
  ${reqParams.description} ,espero que puedas ayudarme.%0D%0D
  Mis datos son:%0D
  ${session?.user?.name}, mi email es: ${session?.user?.email}.%0D%0D
  Muchas gracias.%0D%0D
  Promoviendo a las mujeres técnicas de Chile:%0D
  http://instaladoras.web.app del minenergia.cl
  `;

  return (
    <section className={style.contact}>
      {/* https://faq.whatsapp.com/5913398998672934 */}
      <a
        href={`https://wa.me/${provider?.contact.movil}?text=${serviceMessage}`}
        target='_blank'
      >
        <Image src={sms} alt={''}></Image>
      </a>
      <a
        href={`mailto:${provider?.contact.email}?subject=Requerimiento de servicio ${
          provider?.license.service === 'eli' ? 'eléctrico' : ' de Gas'
        } SEC&body=${serviceMessage}`}
        target='_blank'
      >
        <Image src={email} alt={''}></Image>
      </a>
    </section>
  );
};
