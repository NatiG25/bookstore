import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="header">
        <h1>Bookstore</h1>
        <nav>
          <Link to="/books">Books</Link>
          <Link to="/form">Categories</Link>
        </nav>
      </header>
    </>
  );
}
