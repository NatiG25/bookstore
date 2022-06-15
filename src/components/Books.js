import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks, fetchBooks, removeBooks } from '../redux/books/books';
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

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

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
