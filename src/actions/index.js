import { CREATE_BOOK, FETCH_BOOKS } from './types';

export const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    payload: book
  };
};

export const fetchBooks = () => {
  return {
    type: FETCH_BOOKS
  };
};

