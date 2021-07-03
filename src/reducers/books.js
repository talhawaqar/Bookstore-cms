import _ from 'lodash';
import { CREATE_BOOK, REMOVE_BOOK, INITIAL_STATE } from '../actions/types';

const books = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case REMOVE_BOOK:
      return _.omit(state, [action.payload.id]);
    default:
      return state;
  }
};

export default books;
