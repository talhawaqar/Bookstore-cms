import { CREATE_BOOK, EDIT_BOOK } from '../actions/types';
import { initialState } from './bookInitialStates';

const books = (state = initialState, action ) => {
  switch(action.type) {
    case CREATE_BOOK:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_BOOK:
      return { ...state, [action.payload.id]: action.payload }
    default:
      return state;
  };
};

export default books;
