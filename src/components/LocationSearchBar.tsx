import React from 'react';
import style from './SearchBar.module.scss';

export const LocationSearchBar = () => {
  return (
    <section className='card big'>
      <div className={style.container}>
        <form action=''></form>
        <input type='text' className={style.searchbar} />
      </div>
    </section>
  );
};
