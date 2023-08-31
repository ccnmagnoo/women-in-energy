import Image from 'next/image';
import woman from '../../public/woman-in-energy-css.svg';
import logo from '../../public/mi-logo.svg';

function Home() {
  return (
    <>
      <header>
        <Image src={logo} alt='' id='site-logo' />
      </header>
      <main>dashboard</main>
      <footer>bottom bar</footer>
    </>
  );
}

export default Home;
