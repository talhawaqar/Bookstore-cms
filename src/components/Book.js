import React from 'react';

const Book = (props) => {
  const {type, title} = props;
  return (
    <tr>
      <td>{type}</td>
      <td>{title}</td>
    </tr>
  );
};

export default Book;
