interface InputService {
  description: string;
  location: string;
  service: 'gas' | 'eli';
  magnitude: 'home' | 'low_building' | 'high_building' | 'factory';
}

export type { InputService };
