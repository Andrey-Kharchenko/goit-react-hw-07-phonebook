import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);;
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts && filteredContacts.map(contact => {
          return (
            <li className={css.item} key={contact.id}>
              <Contact key={contact.id} contact={contact} />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
