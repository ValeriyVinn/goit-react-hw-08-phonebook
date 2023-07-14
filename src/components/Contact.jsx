import { useContacts } from './Hooks/hooks';
import { deleteToast } from './Toasts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsOperations } from '../redux/contacts/contactsOperations';
// import css from '../Styles.module.css';

export const Contact = ({ id, name, phone }) => {
    
    const dispatch = useDispatch();
    const { deleteContact, setFilter } =
    useContacts();
    
    useEffect(() => {
        dispatch(contactsOperations.getContacts());
      }, [dispatch]);

    return (
    <li>
        <p>
        {name}: {phone}
        </p>
        <button  type="button" onClick={() => {
                      deleteContact(id);
                      deleteToast(`${name} tel:${phone} is deleted`);
                      setFilter('');
                    }}>
            Delete
        </button>
    </li>
    );
    }






