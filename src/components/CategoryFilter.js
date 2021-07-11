import React from 'react';
import PropTypes from 'prop-types';
import { OPTIONS } from '../actions/types';

const CategoryFilter = (props) => {
  /* eslint-disable max-len */
  const renderFilterOptions = () => OPTIONS.map((option) => <option key={option} value={option}>{option}</option>);
  /* eslint-enable max-len */

  const handleChange = (e) => {
    props.handleFilterChange(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid padding-nav">
        <span className="navbar-brand">Bookstore CMS </span>
        <button
          className="navbar-toggler"
          type="button"
          dataBsToggle="collapse"
          dataBsTarget="#navbarSupportedContent"
          ariaControls="navbarSupportedContent"
          ariaExpanded="false"
          ariaLabel="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link books">BOOKS</span>
            </li>
            <li className="nav-item">
              <select onChange={handleChange} className="catagory-select">
                <option key="all" value="">All</option>
                {renderFilterOptions()}
              </select>
            </li>
          </ul>
          <span className="right-icon mt-2 me-5 pt-2 pb-2 pe-3 ps-3">
            <i className="fas fa-user-alt" />
          </span>
        </div>
      </div>
    </nav>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func,
};

CategoryFilter.defaultProps = {
  handleFilterChange: () => {},
};

export default CategoryFilter;
