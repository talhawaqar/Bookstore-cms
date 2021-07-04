import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, title, category } = props;
  const removeBook = () => {
    props.removeBook({ id, title, category });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <input type="button" onClick={removeBook} value="Remove" />
        {' '}
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  removeBook: PropTypes.func,
};

Book.defaultProps = {
  id: '',
  category: '',
  title: '',
  removeBook: () => {},
};

export default Book;
