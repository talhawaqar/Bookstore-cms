import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, title, category } = props;

  const handleRemoveBook = () => {
    props.handleRemoveBook({ id, title, category });
  };

  return (
    <div className="book container border-gray bg-white">
      <div className="row">
        <div className="col-4 d-flex flex-column">
          <div className="ps-2 pt-4 pb-4">
            <h3 className="category">{category}</h3>
            <h1 className="title mt-2 mb-1">{title}</h1>
            <h4 className="author">Muhammad Talha Waqar</h4>
          </div>
          <div className="book-actions mb-3 ">
            <span className="action-span ps-2 pe-4 span-right-border">Comments</span>
            <span className="ps-3 action-span pe-4 span-right-border">
              <input type="button" onClick={handleRemoveBook} value="Remove" />
            </span>
            <span className="ps-3  action-span">Edit</span>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <div className="progress-box">
            <svg>
              <circle cx="30" cy="30" r="30" />
              <circle cx="30" cy="30" r="30" />
            </svg>
          </div>
          <div className="progress-text">
            <h3>50%</h3>
            <h4>Completed</h4>
          </div>
        </div>
        <div className="chapter col-4 d-flex flex-column justify-content-center">
          <h3>CURRENT CHAPTER</h3>
          <h2>CHAPTER 17</h2>
          <input type="button" value="UPDATE PROGRESS" />
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  handleRemoveBook: PropTypes.func,
};

Book.defaultProps = {
  id: '',
  category: '',
  title: '',
  handleRemoveBook: () => {},
};

export default Book;
