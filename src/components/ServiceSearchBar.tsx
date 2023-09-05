const ServiceSearchBar = () => {
  return (
    <section>
      <article className='card big'>
        <form action=''>
          <input maxLength={100} minLength={10} type='text' />
          <button>buscar</button>
        </form>
      </article>
    </section>
  );
};

export default ServiceSearchBar;
