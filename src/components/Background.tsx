'use client';
import React from 'react';
import Image from 'next/image';
import woman from '../../public/woman-in-energy-css.svg';

export const Background = () => {
  return (
    <div id='background'>
      <span className='glowing up'></span>
      <span className='glowing down'></span>
      <Image alt='' src={woman} id='woman-sketch' />
    </div>
  );
};
