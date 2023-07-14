import { useState } from 'react';
import { useContacts } from './Hooks/hooks';
import { infoToast, successToast } from './Toasts';
// import css from '../Styles.module.css';

export const ContacstForm = () => {
  const { contacts, addContact } = useContacts();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
    console.log(name, value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const enterContacts = contacts.some(
      contact =>
        (contact.name === name.toLowerCase() && contact.number === number) ||
        contact.number === number
    );
    enterContacts
      ? infoToast(`${name} or ${number} is already in contacts`)
      : addContact({ name, number });
    !enterContacts && successToast('the contact is in the list  😃');
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          pattern="^[a-zA-Z\s]+$"
            title="Name may contain only latin letters"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="phone number"
          pattern="^\d{3}-\d{2}-\d{2}$"
            title="The phone number should look like this: 012-34-56"
          required
          onChange={handleChange}
        />
        <button type="submit ">Add contact</button>
      </form>
    </div>
  );
};
