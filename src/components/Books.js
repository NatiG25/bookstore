import React from 'react';
import Book from './Book';
import Form from './Form';

class Books extends React.Component {
  constructor() {
    super();
    this.books = [{
      title: 'Atomic Habits',
      author: 'James Clear',
      id: 1,
    },
    {
      title: 'Men Are from Mars, Women Are from Venus ',
      author: 'John Gray',
      id: 2,
    },
    {
      title: 'The Five Love Languages',
      author: 'Gary Chapman',
      id: 3,
    },
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      id: 4,
    },
    ];
  }

  render() {
    return (
      <>
        <main>
          {this.books.map((book) => <Book title={book.title} author={book.author} key={book.id} />)}
          <Form />
          <button type="button">Remove</button>
        </main>
      </>
    );
  }
}

export default Books;
