import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

class BookList extends React.Component {
  
  renderList() {
    return this.props.books.map((book)=>{
      return <Book key={book.id} id={book.id} category={book.category} title={book.title} />
    });
  }
  
  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return { books: Object.values(state.books) };
}

export default connect(mapStateToProps)(BookList);
