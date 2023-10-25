import React from 'react';
import Image from 'next/image';
import loading from '@/app/static/loading.svg';

export const Loading = ({ size = 16 }: { size: number }) => {
  return <Image width={size} height={size} alt={''} src={loading}></Image>;
};
