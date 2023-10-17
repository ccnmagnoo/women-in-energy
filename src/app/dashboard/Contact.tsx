import React from 'react';
import Image from 'next/image';
import sms from '@/app/static/send-sms-ico.svg';
import email from '@/app/static/send-email-ico.svg';
import style from './Contact.module.scss';
import { Provider, Service } from '@/Models/Providers';
import { InputService } from '@/Models/Input';
import { useSearchParams } from 'next/navigation';

export const Contact = <S extends Service>({ provider }: { provider: Provider<S> }) => {
  const by_url = useSearchParams();
  const toSearch: PartialStringified<InputService> = {
    description: undefined,
    service: undefined,
    location: undefined,
    magnitude: undefined,
  };

  const reqParams: Record<string, string | undefined> = {};
  Object.keys(toSearch).forEach((key) => {
    reqParams[key] = by_url.get(key) || undefined;
  });

  return (
    <section className={style.contact}>
      {/* https://faq.whatsapp.com/5913398998672934 */}
      <a href='' target='_blank'>
        <Image src={sms} alt={''}></Image>
      </a>
      <a
        href={`mailto:${
          provider.contact.email
        }?subject=${'requerimiento de servicio SEC'}&body=Junto con saludar, necesito ${
          reqParams.description
        }`}
        target='_blank'
      >
        <Image src={email} alt={''}></Image>
      </a>
    </section>
  );
};
