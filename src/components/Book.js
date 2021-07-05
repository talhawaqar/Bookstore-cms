import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, title, category } = props;

  const handleRemoveBook = () => {
    props.handleRemoveBook({ id, title, category });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <input type="button" onClick={handleRemoveBook} value="Remove" />
        {' '}
      </td>
    </tr>
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
