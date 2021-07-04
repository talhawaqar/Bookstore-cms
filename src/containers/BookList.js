import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = (props) => {
  const renderList = () => {
    const { books } = props;
    /* eslint-disable max-len */
    return (
      books.map((book) => <Book key={book.id} id={book.id} category={book.category} title={book.title} />)
    );
    /* eslint-enable max-len */
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {renderList()}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BookList.defaultProps = {
  books: [{}],
};

const mapStateToProps = (state) => ({ books: Object.values(state.books) });

export default connect(mapStateToProps)(BookList);
