import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

export default function AddBooks({ newBooks }) {
  AddBooks.propTypes = {
    newBooks: PropTypes.func.isRequired,
  };
  const titleRef = useRef();
  const authorRef = useRef();

  const handleAddBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuid(),
      title: titleRef.current.value,
      author: authorRef.current.value,
    };
    newBooks(newBook);
    titleRef.current.value = '';
    authorRef.current.value = '';
  };

  return (
    <>
      <h2>Add A Book</h2>
      <form onSubmit={(e) => handleAddBook(e)}>
        <input type="text" ref={titleRef} placeholder="Enter Book Title" />
        <input type="text" ref={authorRef} placeholder="Enter Author Name" />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}
