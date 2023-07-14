import { ContacstForm } from '../components/ContactsForm';
import { Filter } from '../components/Filter';
import { ContactsList } from '../components/ContactsList';
// import css from '../Styles.module.css';

const Contacts = () => {
  return (
    <div>
      <h1>
        Enter a name and phone number to add a contact
      </h1>
      <ContacstForm />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;