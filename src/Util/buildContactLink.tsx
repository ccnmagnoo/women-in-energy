import { Contact, Provider, Service } from '@/Models/Providers';
import { media } from './getMediaIco';
import buildMessage from './buildMessage';

async function buildContactLink<S extends Service, PROVIDER extends Provider<S>>(
  _media: keyof Contact,
  params: Record<string, string | undefined>,
  provider?: PROVIDER
) {
  return (
    <a target='_blank' href={await buildHref(_media, params, provider)}>
      {media[_media].icon}
    </a>
  );
}

async function buildHref<S extends Service>(
  _media: keyof Contact,
  params: Record<string, string | undefined>,
  provider?: Provider<S>
) {
  const message = await buildMessage(provider, params);
  switch (_media) {
    /* https://faq.whatsapp.com/5913398998672934 */
    case 'movil':
      return `https://wa.me/${provider?.contact.movil}?text=${message}`;
    case 'email':
      return `mailto:${provider?.contact.email}?subject=Requerimiento de servicio ${
        provider?.license.service === 'eli' ? 'eléctrico' : ' de Gas'
      } SEC&body=${message}`;
    case 'phone':
      return `tel:${provider?.contact.phone}`;
    default:
      return undefined;
  }
}

export default buildContactLink;
