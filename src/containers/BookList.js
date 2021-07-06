import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions';

const BookList = (props) => {
  const handleRemoveBook = (book) => {
    props.removeBook(book);
  };

  const handleFilterChange = (filter) => {
    props.changeFilter(filter);
  };

  const renderList = () => {
    const { books, filter } = props;
    return books.map((book) => {
      if (filter === '') {
        return (
          <Book
            key={book.id}
            id={book.id}
            category={book.category}
            title={book.title}
            handleRemoveBook={handleRemoveBook}
          />
        );
      }
      if (filter === book.category) {
        return (
          <Book
            key={book.id}
            id={book.id}
            category={book.category}
            title={book.title}
            handleRemoveBook={handleRemoveBook}
          />
        );
      }
      return '';
    });
  };

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
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
    </>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  removeBook: PropTypes.func,
  changeFilter: PropTypes.func,
};

BookList.defaultProps = {
  books: [{}],
  filter: '',
  removeBook: () => {},
  changeFilter: () => {},
};

const mapStateToProps = (state) => ({ books: Object.values(state.books), filter: state.filter });

export default connect(mapStateToProps, { removeBook, changeFilter })(BookList);
