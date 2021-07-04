export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

const id1 = Math.floor(Math.random() * 100);
const id2 = Math.floor(Math.random() * 100);
const id3 = Math.floor(Math.random() * 100);

export const INITIAL_STATE = {
  [id1]: {
    id: id1,
    title: 'A POstive attitude of Learning',
    category: 'Learning',
  },
  [id2]: {
    id: id2,
    title: 'The History Of Adam',
    category: 'Biography',
  },
  [id3]: {
    id: id3,
    title: 'Pokemon Novel',
    category: 'Kids',
  },
};

export const OPTIONS = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
