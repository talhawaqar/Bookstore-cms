import { CREATE_BOOK, EDIT_BOOK } from './types';

export const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    payload: book
  };
};

export const editBook = (book) => {
  return {
    type: EDIT_BOOK,
    payload: book
  };
};

