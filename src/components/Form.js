import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adding } from './redux/books/books';

export default function Form() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  useEffect(() => {
  }, [books]);

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    dispatch(adding(book));
  };

  return (
    <>
      <h2>Add A Book</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="title" placeholder="Enter Book Title" onChange={(e) => handleChange(e)} />
        <input type="text" name="author" placeholder="Enter Author Name" onChange={(e) => handleChange(e)} />
        <button type="submit">Add Book</button>
      </form>

    </>
  );
}
