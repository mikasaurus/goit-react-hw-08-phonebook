import { useDispatch, useSelector } from 'react-redux';
import css from './FilterContact.module.css';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const FilterContact = () => {
  const inputValue = useSelector(getFilter);
  const dispatach = useDispatch();

  const filterChange = event => {
    event.preventDefault();
    dispatach(setFilter(event.target.value));
  };

  return (
    <label className={css.label}>
      Find contact by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={inputValue}
        onChange={event => filterChange(event)}
      />
    </label>
  );
};
