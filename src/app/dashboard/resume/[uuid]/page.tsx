import React from 'react';
import style from './Resume.module.scss';

const page = ({ params }: { params: { uuid: string } }) => {
  return <main className={style.main}>{params.uuid}</main>;
};

export default page;
