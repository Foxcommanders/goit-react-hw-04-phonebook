import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';

function Filter({ onFilter, filter }) {
  const handleInputChange = event => {
    onFilter(event.target.value);
  };
  return (
    <StyledFilter>
      <p>Find contacts by name</p>
      <input onChange={handleInputChange} value={filter} type="text" />
    </StyledFilter>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
