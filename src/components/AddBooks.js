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
      <h2 className="addHeader">Add A Book</h2>
      <form className="addFormContainer">
        <input className="addTitle" type="text" ref={titleRef} placeholder="Book Title" />
        <input className="addAuthor" type="text" ref={authorRef} placeholder="Author Name" />
        <a href="/" onClick={(e) => handleAddBook(e)}>Add Book</a>
      </form>
    </>
  );
}
