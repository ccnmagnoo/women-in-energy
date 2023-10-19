import React from 'react';

export const page = ({ params }: { params: { slug: string } }) => {
  return <div>{params.slug}</div>;
};
