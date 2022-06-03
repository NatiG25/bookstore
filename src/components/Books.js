import React from 'react';
import Book from './Book';

class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Atomic Habits',
      author: 'James Clear',
    };
  }

  render() {
    const { title, author } = this.state;
    return (
      <>
        <main>
          <Book title={title} author={author} />
          <button type="button">Remove</button>
        </main>
      </>
    );
  }
}

export default Books;
