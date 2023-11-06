import React, { useEffect, useState } from 'react';
import { Contact, Provider, Service } from '@/Models/Providers';
import { useSearchParams } from 'next/navigation';
import { media as _media } from '@/Util/getMediaIco';
import style from './Resume.module.scss';
import buildContactLink from '@/Util/buildContactLink';
import Image from 'next/image';
import messenger from '@/app/static/send-sms-ico.svg';
import email from '@/app/static/send-email-ico.svg';
import phone from '@/app/static/send-phone-ico.svg';

export const Media = <S extends Service>({
  media,
  provider,
}: {
  media: keyof Contact;
  //            ^?
  provider: Provider<S>;
}) => {
  const url = useSearchParams();
  const params: Record<string, string | undefined> = {
    description: url.get('description') ?? undefined,
  };

  type MediaIco = { [KEY in keyof Contact]: React.ReactNode };
  const mediaIco = {
    email: <Image src={email} alt={'📧'} />,
    phone: <Image src={phone} alt={'📠'} />,
    movil: <Image src={messenger} alt={'📱'} />,
  };

  const [linkComponent, setLink] = useState<React.ReactNode>(undefined);

  useEffect(() => {
    async function getAnchor() {
      const anchor = await buildContactLink(media, params, provider);
      setLink(anchor);
    }
    getAnchor();
  });

  return (
    <>
      {provider.contact[media] ? ( //if source is null or empty string
        <li>
          <div className={style.button}>{mediaIco[media]}</div>
          <div className={style.display}>
            <h3>{media}</h3>
            {media === 'movil' ? '+' : undefined}
            {provider.contact[media]}
          </div>
          <div className={[style.button, style.tail].join(' ')}>
            {linkComponent} <p>enviar</p>
          </div>
        </li>
      ) : undefined}
    </>
  );
};
