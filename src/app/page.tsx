'use client';
import { InputService } from '@/Models/Input';
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

//page with initial search logic
function Home() {
  //form hook
  const form = useForm<Partial<InputService>>();
  const [activeForm, setActiveForm] = useState<keyof InputService>('description');

  return (
    <main>
      {activeForm === 'description' ? (
        <SearchBar
          key='description'
          form={form}
          register='description'
          placeholder='¿Qué quieres arreglar hoy?'
          dispatch={setActiveForm}
        />
      ) : undefined}

      {activeForm === 'location' ? (
        <SearchBar
          key='location'
          form={form}
          register='location'
          placeholder='¿ciudad o comuna?'
        />
      ) : undefined}
    </main>
  );
}
export default Home;
