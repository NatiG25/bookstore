import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks, removeBooks } from '../redux/books/books';
import Book from './Book';
import AddBooks from './AddBooks';

const Books = () => {
  const books = useSelector((state) => state.bookList);
  const dispatch = useDispatch();

  const newBooks = (newBook) => {
    dispatch(addBooks(newBook));
  };
  const deleteBooks = (id) => {
    dispatch(removeBooks(id));
  };

  return (
    <>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          deleteBooks={() => deleteBooks(book.id)}
        />
      ))}
      <AddBooks newBooks={newBooks} />
    </>
  );
};

export default Books;
