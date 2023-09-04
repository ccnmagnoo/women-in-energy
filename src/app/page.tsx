import Image from 'next/image';
import logo from '../../public/mi-logo.svg';
import { Navbar } from '@/components/Navbar';
import { Background } from '@/components/Background';

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>dashboard</main>
      <footer>bottom bar</footer>
      <Background />
    </>
  );
}

export default Home;
