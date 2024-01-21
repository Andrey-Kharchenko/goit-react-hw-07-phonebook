import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  
  return (
    <>
      <p>{contact.name}:
        <span style={{ margin:'0 10px'}}>{contact.phone}</span>
      </p>
      <button onClick={handleDelete}>delete</button>
    </>
  );
};

export default Contact;
