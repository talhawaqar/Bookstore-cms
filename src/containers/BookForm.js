import React from 'react';
import { OPTIONS } from '../actions/types';

class BookForm extends React.Component {
  /* eslint-disable max-len */
  renderCategoriesOptions = () => OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)
  /* eslint-enable max-len */

  render() {
    return (
      <div>
        <h3>Add another book</h3>
        <form>
          <input type="text" placeholder="Enter Title" />
          <select name="categories" id="categories">
            {this.renderCategoriesOptions()}
          </select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BookForm;
