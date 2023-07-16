import { ContacstForm } from '../components/ContactsForm';
import { Filter } from '../components/Filter';
import { ContactsList } from '../components/ContactsList';
import css from '../Styles.module.css';

const Contacts = () => {
  return (
    <div className={css.view__container}>
      <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContacstForm />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;
