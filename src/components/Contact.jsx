import { useContacts } from './Hooks/hooks';
import { deleteToast } from './Toasts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsOperations } from '../redux/contacts/contactsOperations';
import PropTypes from 'prop-types';
import css from '../Styles.module.css';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const { deleteContact, setFilter } = useContacts();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <li className={css.item}>
      <p className={css.item__name}>
        {name}: {phone}
      </p>
      <button
        className={css.user__btn}
        type="button"
        onClick={() => {
          deleteContact(id);
          deleteToast(`${name} tel:${phone} is deleted`);
          setFilter('');
        }}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
