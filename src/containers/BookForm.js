import React from 'react';

class BookForm extends React.Component {
  
  renderCategoriesOptions = () => {
    const options = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
    return options.map((option, key)=>{
      return <option key={key} value={option}>{option}</option>;
    });  
  }
  
  render(){
    return (
      <div>
        <h3>Add another book</h3>
        <form>
          <input type="text" placeholder="Enter Title"></input>
          <select name="categories" id="categories">
            {this.renderCategoriesOptions()}
          </select>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default BookForm;
