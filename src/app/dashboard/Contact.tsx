'use client';
import React, { useEffect, useState } from 'react';
import style from './Contact.module.scss';
import { Provider, Service } from '@/Models/Providers';
import { InputService } from '@/Models/Input';
import { useSearchParams } from 'next/navigation';
import buildContactLink from '@/Util/buildContactLink';

export const Contact = <S extends Service>({ provider }: { provider?: Provider<S> }) => {
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
  const [sendSMS, setSMSLink] = useState<React.ReactNode>(undefined);
  const [sendEmail, setEmailLink] = useState<React.ReactNode>(undefined);

  useEffect(() => {
    async function fetchMessage() {
      const toSms = await buildContactLink('movil', reqParams, provider);
      setSMSLink(toSms);
      const toEmail = await buildContactLink('email', reqParams, provider);
      setEmailLink(toEmail);
    }

    fetchMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider, by_url]);

  return (
    <section className={style.contact}>
      {/* https://faq.whatsapp.com/5913398998672934 */}
      {sendSMS}
      {sendEmail}
    </section>
  );
};
