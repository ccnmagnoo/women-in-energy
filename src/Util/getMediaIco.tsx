import { Contact } from '@/Models/Providers';
import movil from '@/app/static/send-sms-ico.svg';
import email from '@/app/static/send-email-ico.svg';
import phone from '@/app/static/send-sms-ico.svg';
import Image from 'next/image';

type Media = {
  [MEDIA in keyof Contact]: { id: MEDIA; icon: React.JSX.Element; validated: boolean };
};

export const media: Media = {
  movil: { id: 'movil', icon: <Image src={movil} alt={'📱'} />, validated: true },
  email: { id: 'email', icon: <Image src={email} alt={'📧'} />, validated: true },
  phone: { id: 'phone', icon: <Image src={phone} alt={'📞'} />, validated: false },
};
