import React from 'react';
import Image from 'next/image';
import woman from '@/app/static/woman-in-energy-css.svg';

export const Background = () => {
  return (
    <article id='background'>
      <span className='glowing up'></span>
      <span className='glowing down'></span>
      <Image alt='' src={woman} id='woman-sketch' />
    </article>
  );
};
