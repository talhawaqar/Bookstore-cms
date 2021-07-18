import React from 'react';
import BookForm from '../containers/BookForm';
import BookList from '../containers/BookList';
import Footer from './Footer';
import './App.css';

const App = () => (
  <div>
    <BookList />
    <BookForm />
    <Footer />
  </div>
);

export default App;
