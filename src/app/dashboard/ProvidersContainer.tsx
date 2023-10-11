import { ResultProviders } from '@/Models/Providers';
import React from 'react';

export const ProvidersContainer = ({ res }: { res?: ResultProviders }) => {
  return (
    <div>
      <h1>proveedoras</h1>
      {res?.search.size} mujeres profesionales encontradas
    </div>
  );
};
