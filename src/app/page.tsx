'use client';
import { InputService } from '@/Models/Input';
import ServiceSearchBar from '@/components/SearchBar';
import { useForm } from 'react-hook-form';

function Home() {
  //form hook
  const form = useForm<Partial<InputService>>();

  return (
    <main>
      <ServiceSearchBar form={form} register='description' />
    </main>
  );
}
export default Home;
