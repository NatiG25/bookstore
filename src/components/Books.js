import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => (state.book));

  return (
    <>
      <main>
        {books.map((book) => (
          <Book
            title={book.title}
            id={book.id}
            author={book.author}
            key={book.id}
          />
        ))}
        <Form />
      </main>
    </>
  );
};

export default Books;
