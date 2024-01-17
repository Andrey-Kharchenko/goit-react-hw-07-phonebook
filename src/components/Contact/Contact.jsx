import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  
  return (
    <>
      <p>
        {' '}
        {contact.name}:
        <span style={{ marginRight:'10px'}}>{contact.number}</span>
      </p>
      <button onClick={handleDelete}>delete</button>
    </>
  );
};

export default Contact;
