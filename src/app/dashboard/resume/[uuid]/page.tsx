import React from 'react';

const page = ({ params }: { params: { uuid: string } }) => {
  return <div>{params.uuid}</div>;
};

export default page;
