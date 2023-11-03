import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import sms from '@/app/static/send-sms-ico.svg';
import email from '@/app/static/send-email-ico.svg';
import style from './Contact.module.scss';
import { Provider, Service } from '@/Models/Providers';
import { InputService } from '@/Models/Input';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import buildMessage from '@/Util/builMessage';

export const Contact = <S extends Service>({ provider }: { provider?: Provider<S> }) => {
  const by_url = useSearchParams();

  const [message, setMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetchMessage() {
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

      const message = await buildMessage(provider, reqParams);
      setMessage(message);
    }

    fetchMessage();
  }, [provider, by_url]);

  return (
    <section className={style.contact}>
      {/* https://faq.whatsapp.com/5913398998672934 */}
      <a
        href={`https://wa.me/${provider?.contact.movil}?text=${message}`}
        target='_blank'
      >
        <Image src={sms} alt={''}></Image>
      </a>
      <a
        href={`mailto:${provider?.contact.email}?subject=Requerimiento de servicio ${
          provider?.license.service === 'eli' ? 'eléctrico' : ' de Gas'
        } SEC&body=${message}`}
        target='_blank'
      >
        <Image src={email} alt={''}></Image>
      </a>
    </section>
  );
};
