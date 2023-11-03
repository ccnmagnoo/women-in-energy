import React from 'react';
import { Contact } from '@/Models/Providers';
import { useSearchParams } from 'next/navigation';
import style from './Resume.module.scss';

export const BigContactMedia = ({
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
    <div>
      {media}/{identifier}/{description}
    </div>
  );
};
