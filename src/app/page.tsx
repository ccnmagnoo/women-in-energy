import Image from 'next/image';
import woman from '../../public/woman-in-energy-css.svg';

function Home() {
  return (
    <>
      <header>mujeres instaladoras</header>
      <main>
        <Image src={woman} alt='' height={500} />
      </main>
      <footer>bottom bar</footer>
    </>
  );
}

export default Home;
