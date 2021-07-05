import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OPTIONS } from '../actions/types';
import { createBook } from '../actions';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: 'Action' };
  }

  /* eslint-disable max-len */
  renderCategoriesOptions = () => OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)
  /* eslint-enable max-len */

  handleChange = (e) => {
    if (e.target.tagName === 'INPUT' && e.target.getAttribute('type') === 'text') {
      this.setState({ title: e.target.value });
    } else if (e.target.tagName === 'SELECT') {
      this.setState({ category: e.target.value });
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);
    const book = { ...this.state, id };
    const { createBook } = this.props;
    createBook(book);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h3>Add another book</h3>
        <form onSubmit={this.onFormSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={title}
            placeholder="Enter Title"
          />
          <select name="categories" onChange={this.handleChange} id="categories">
            {this.renderCategoriesOptions()}
          </select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func,
};

BookForm.defaultProps = {
  createBook: () => {},
};

export default connect(null, { createBook })(BookForm);
