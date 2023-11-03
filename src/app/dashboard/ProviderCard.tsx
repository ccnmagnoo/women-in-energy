import style from './ProviderCard.module.scss';
import avatar from '@/app/static/woman-ico.svg';
import { Provider, Service, Territory } from '@/Models/Providers';
import { LicenseTag } from './LicenseTag';
import { Contact } from './Contact';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { InputService } from '@/Models/Input';

export function ProviderCard<S extends Service>({
  provider,
  scope,
}: {
  provider: Provider<S>;
  scope: Territory;
}) {
  const router = useRouter();

  //fetch url params
  const by_url = useSearchParams();

  const toSearch: PartialStringified<InputService> = {
    description: undefined,
    service: undefined,
    location: undefined,
    magnitude: undefined,
  };

  const reqParams: Record<string, string | undefined> = {};
  Object.keys(toSearch).forEach((key) => {
    reqParams[key] = by_url.get(key) || undefined;
  });

  //on click avatar
  function buttonHandler<S>(e: S) {
    router.push(
      'dashboard/resume/' + provider.uuid + `?description=${reqParams.description}`
    );
  }
  return (
    <article className={style.card} data-scope={scope}>
      <LicenseTag provider={provider} />

      <button onClick={buttonHandler}>
        <section className={style.avatar}>
          <Image src={avatar} alt='avatar' />
        </section>
      </button>

      <section className={style.personalInformation}>
        <h4>{getName(provider)}</h4>
        <p>{provider.address.city}</p>
      </section>

      <Contact provider={provider}></Contact>
    </article>
  );
}

function getName<S extends Service>(provider: Provider<S>) {
  return (
    provider.personal.name?.split(' ')[0] + ' ' + provider.personal.surname?.split(' ')[0]
  );
}
