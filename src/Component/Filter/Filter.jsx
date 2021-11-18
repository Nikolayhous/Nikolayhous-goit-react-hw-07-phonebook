import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/selector';
import filterContact from '../../redux/phonebook/actions';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeInput = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <div className={s.filter}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          placeholder="Search by name"
          type="text"
          name="name"
          value={filter}
          onChange={onChangeInput}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  onChangeInput: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
