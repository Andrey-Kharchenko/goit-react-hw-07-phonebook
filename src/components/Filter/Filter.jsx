import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contactsSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.lable} htmlFor="filter">
        find contacts by name:
      </label>
      <input name="filter" type="text" onChange={handleFilter} />
    </div>
  );
};

export default Filter;
