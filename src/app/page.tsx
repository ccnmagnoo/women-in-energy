'use client';
import { InputService } from '@/Models/Input';
import ServiceSearchBar from '@/components/ServiceSearchBar';
import { useForm } from 'react-hook-form';

function Home() {
  //form hook
  const form = useForm<Partial<InputService>>();

  return (
    <main>
      <ServiceSearchBar form={form} />
    </main>
  );
}
export default Home;
