import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBooks } from '../redux/books/books';

export default function AddBooks() {
  const titleRef = useRef();
  const authorRef = useRef();
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuid(),
      title: titleRef.current.value,
      author: authorRef.current.value,
      category: 'category',
    };

    dispatch(postBooks(newBook));
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
