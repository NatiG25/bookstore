import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAPI, fetchBooks } from '../redux/books/books';
import Book from './Book';
import AddBooks from './AddBooks';

const Books = () => {
  const books = useSelector((state) => state.bookList);
  const dispatch = useDispatch();

  const deleteBooks = (itemId) => {
    dispatch(deleteAPI(itemId));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <>
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          deleteBooks={() => deleteBooks(book.item_id)}
        />
      ))}
      <AddBooks />
    </>
  );
};

export default Books;
