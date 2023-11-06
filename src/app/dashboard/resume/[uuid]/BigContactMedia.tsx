import React from 'react';
import { Contact } from '@/Models/Providers';
import { useSearchParams } from 'next/navigation';
import style from './Resume.module.scss';

export const Media = ({
  media,
  identifier,
}: {
  media: keyof Contact;
  //            ^?
  identifier: string | number;
}) => {
  const url = useSearchParams();
  const description = url.get('description');

  return (
    <li>
      {media}/{identifier}/{description}
    </li>
  );
};
