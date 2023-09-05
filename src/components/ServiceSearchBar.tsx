import styles from './ServiceSearchBar.module.css';

const ServiceSearchBar = () => {
  return (
    <>
      <article className='card big'>
        <section className={styles.container}>
          <form action=''>
            <input
              autoFocus={true}
              required
              className={styles.searchbar}
              placeholder='¿Qué quieres arreglar?'
              maxLength={100}
              minLength={10}
              type='text'
            />
            <button className={styles.button}>buscar</button>
          </form>
        </section>
      </article>
    </>
  );
};

export default ServiceSearchBar;
