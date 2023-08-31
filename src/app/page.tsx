import Image from 'next/image';
import logo from '../../public/mi-logo.svg';
import { Navbar } from '@/components/Navbar';

function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Image src={logo} alt='' id='site-logo' />
      </header>
      <main>dashboard</main>
      <footer>bottom bar</footer>
    </>
  );
}

export default Home;
