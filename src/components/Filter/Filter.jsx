import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <>
    <FilterLabel>
      <FilterInput
        type="text"
        placeholder="Find contacts"
        value={value}
        onChange={onChange}
      />
    </FilterLabel>
  </>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
