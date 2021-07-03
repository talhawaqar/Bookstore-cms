const myId = () => Math.floor(Math.random() * 100);

export const initialState = [
  {
    id: myId(),
    title: 'A POstive attitude of Learning',
    category: 'Learning',
  },
  {
    id: myId(),
    title: 'The History Of Adam',
    category: 'Biography',
  },

  {
    id: myId(),
    title: 'Pokemon Novel',
    category: 'Kids',
  },
];
