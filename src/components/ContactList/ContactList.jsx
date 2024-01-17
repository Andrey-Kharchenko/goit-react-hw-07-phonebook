import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const { contacts, filter } = useSelector(getContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
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
