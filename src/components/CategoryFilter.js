import React from 'react';
import { OPTIONS } from '../actions/types';

const CategoryFilter = (props) =>{

  /* eslint-disable max-len */
  const renderFilterOptions = () => OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)
  /* eslint-enable max-len */
  
  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <select name="categories" onChange={handleChange} id="categories">
        <option key='all' value={null} >All</option>
        {renderFilterOptions()}
    </select>
  );
}

export default CategoryFilter;
