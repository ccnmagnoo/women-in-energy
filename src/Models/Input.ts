import { Service } from './Providers';

interface InputService {
  description: string;
  location: string;
  service: Service;
  magnitude: 'home' | 'low_building' | 'high_building' | 'factory';
}

export type { InputService };
