'use client';
import { InputService } from '@/Models/Input';
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function Home() {
  //form hook
  const form = useForm<Partial<InputService>>();
  const [showLocationForm, setLocationForm] = useState<boolean>(false);

  return (
    <main>
      <SearchBar
        form={form}
        register='description'
        placeholder='¿Qué quieres arreglar hoy?'
      />
      <SearchBar form={form} register='location' placeholder='¿comuna' />
    </main>
  );
}
export default Home;
