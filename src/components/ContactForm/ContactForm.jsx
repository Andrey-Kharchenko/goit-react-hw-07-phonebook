import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice'; 
import { getContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      alert(`${name} is already in contacts!`);
      return;
    }

    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.lable} htmlFor="name">
        Name
      </label>
      <input className={css.input} type="text" name="name" required />

      <label className={css.lable} htmlFor="number">
        Number
      </label>
      <input className={css.input} type="tel" name="number" required />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
