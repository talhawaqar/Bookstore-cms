import { CREATE_BOOK, EDIT_BOOK, INITIAL_STATE } from '../actions/types';

const books = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default books;
