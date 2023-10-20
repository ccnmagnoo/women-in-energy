import style from './ProviderCard.module.scss';
import avatar from '@/app/static/woman-ico.svg';
import { Provider, Service, Territory } from '@/Models/Providers';
import { LicenseTag } from './LicenseTag';
import { Contact } from './Contact';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function ProviderCard<S extends Service>({
  provider,
  scope,
}: {
  provider: Provider<S>;
  scope: Territory;
}) {
  const router = useRouter();

  function buttonHandler<S>(e: S) {
    router.push('dashboard/resume/' + provider.uuid);
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
