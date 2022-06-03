import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="header">
        <h1 className="bookstore-title">Bookstore CMS</h1>
        <nav>
          <Link to="/books">Books</Link>
          <Link to="/categories">Categories</Link>
        </nav>
      </header>
    </>
  );
}
