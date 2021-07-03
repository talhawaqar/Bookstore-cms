import { CREATE_BOOK, FETCH_BOOKS } from '../actions/types';
import { initialState } from './bookInitialStates';

export default (state = initialState, action ) => {
  switch(action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case FETCH_BOOKS:
      return [...state];
    default:
      return state;
  };
};
