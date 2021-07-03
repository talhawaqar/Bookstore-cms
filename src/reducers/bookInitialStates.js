const id1 = Math.floor(Math.random() * 100);
const id2 = Math.floor(Math.random() * 100);
const id3 = Math.floor(Math.random() * 100);

export const initialState = {
  [id1]: {
    id: id1,
    title: 'A POstive attitude of Learning',
    category: 'Learning',
  },
  [id2]:{
    id: id2,
    title: 'The History Of Adam',
    category: 'Biography',
  },
  [id3]:{
    id: id3,
    title: 'Pokemon Novel',
    category: 'Kids',
  },
};
