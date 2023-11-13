import React from 'react';
import style from './Motivation.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Motivation = () => {
  return (
    <main>
      <section className={style.container}>
        <section className={style.title}>
          <h2>
            1 <span>de cada</span> 65
          </h2>
          <h3>es mujer</h3>
        </section>
        {/* <article className={style.graph}>graph</article> */}
        <section className={style.diatribe}>
          <p>
            En la actualidad, Chile se enorgullece de contar con profesionales altamente
            capacitados y certificados en la instalación de equipos y sistemas de gas y
            electricidad. Sin embargo, es importante destacar que{' '}
            <span>menos del 2%</span> de estos expertos son mujeres.
          </p>

          <p>
            <Link href='../'>instaladoras.web.app</Link> es una aplicación web
            complementaria a portal{' '}
            <a href='http://www.sec.cl' target='_blank'>
              SEC.cl
            </a>
            , que se enfoca en desatacar y difundir los servicios técnicos de estas
            grandes mujeres, promoviendo la diversidad en la{' '}
            <a
              href='https://energia.gob.cl/Energ%C3%ADam%C3%A1sMujer'
              target='_blank'
              rel='noopener noreferrer'
            >
              industria energética de Chile [ver más].
            </a>
          </p>
        </section>

        <section className={style.disclaimer}>
          <Link href='../'>&quot;instaladoras&quot;</Link> es una iniciativa de{' '}
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            Seremi Energía Valparaíso
          </a>{' '}
          y el{' '}
          <a href='https://energia.gob.cl' target='_blank' rel='noopener noreferrer'>
            Ministerio de Energía
          </a>
          . <br />
          <span>Apoyando a las Mujeres de Chile💪 .</span>
        </section>

        <section className={style.usefulLinks}>
          <a
            href='https://energia.gob.cl/Energ%C3%ADam%C3%A1sMujer'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>más info</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src={
                'https://energia.gob.cl/sites/default/files/logo-energia-mas-mujer.png'
              }
              alt='Energía+Mujer'
              width={100}
              height={60}
            />
          </a>
        </section>
      </section>
    </main>
  );
};

export default Motivation;
