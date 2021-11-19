import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/phonebook/selector';
import s from './ContactList.module.css';
import { fetchContact, deleteContact } from '../../redux/phonebook/operations';
import { useEffect } from 'react';

function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const totalNumber = contacts.length;

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div className={s.contactList}>
      <p className={s.total__number}>
        Total number of subscribers:{totalNumber}
      </p>
      {contacts.length > 0 && (
        <ul className={s.list}>
          {contacts.map(({ name, phone, id }) => (
            <li className={s.item} key={id}>
              <p className={s.text}>{name}:</p>
              <p className={`${s.text} ${s.number}`}>{phone}</p>
              <button
                className={s.btn}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
