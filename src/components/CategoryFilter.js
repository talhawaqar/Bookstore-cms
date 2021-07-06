import React from 'react';
import PropTypes from 'prop-types';
import { OPTIONS } from '../actions/types';

const CategoryFilter = (props) =>{

  /* eslint-disable max-len */
  const renderFilterOptions = () => OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)
  /* eslint-enable max-len */
  
  const handleChange = (e) => {
    props.handleFilterChange(e.target.value);
  }

  return (
    <select name="categories" onChange={handleChange} id="categories">
        <option key='all' value={null} >All</option>
        {renderFilterOptions()}
    </select>
  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func,
};

CategoryFilter.defaultProps = {
  handleFilterChange: () => {},
};

export default CategoryFilter;
