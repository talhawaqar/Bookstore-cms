import React from 'react';
import BookForm from '../containers/BookForm';
import BookList from '../containers/BookList';

const App = () => {
  return (
    <div>
      <BookList />
      <BookForm />
    </div>
  );
};

export default App;
