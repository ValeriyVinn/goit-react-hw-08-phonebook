import { useContacts } from './Hooks/hooks';
import css from '../Styles.module.css';

export const Filter = () => {
  const { filter, setFilter } = useContacts();
  return (
    <div className={css.cont__container}>
      <h2 className={css.home__title}>
        Contacts
        </h2>
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="Find contact by name"
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};