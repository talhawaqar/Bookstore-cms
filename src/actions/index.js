import { CREATE_BOOK, EDIT_BOOK } from './types';

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const editBook = (book) => ({
  type: EDIT_BOOK,
  payload: book,
});
