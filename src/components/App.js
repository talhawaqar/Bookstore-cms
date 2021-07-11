import React from 'react';
import BookForm from '../containers/BookForm';
import BookList from '../containers/BookList';
import './App.css';

const App = () => (
  <div>
    <BookList />
    <BookForm />
  </div>
);

export default App;
