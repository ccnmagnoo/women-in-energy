'use client';
import { useSearchParams } from 'next/navigation';
import { InputService } from '@/Models/Input';

const Dashboard = () => {
  const by_url = useSearchParams();
  const service: Partial<InputService> = {
    description: by_url.get('description') || undefined,
    service: ((by_url.get('service') || undefined) as 'eli') || 'gas',
    location: by_url.get('location') || undefined,
    magnitude:
      ((by_url.get('magnitude') || undefined) as 'home') ||
      'low_building' ||
      'high_building' ||
      'factory',
  };
  return (
    <main>
      dashboard page
      {service.location}
      {service.description}
    </main>
  );
};

export default Dashboard;
