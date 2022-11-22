import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import { Container } from './Filter.styled';
import { nanoid } from 'nanoid';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const { value } = e.target;
    dispatch(setFilter(value.trim()));
  };

  return (
    <Container>
      <div>
        <label htmlFor={nanoid()}>Find contacts by name</label>
        <input
          id={nanoid()}
          type="text"
          name="filter"
          onChange={changeFilter}
        />
      </div>
    </Container>
  );
};
