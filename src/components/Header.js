import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="header">
        <a href='#' className='bookstore-title'>Bookstore CMS</a>
        <nav>
          <Link to="/books">Books</Link>
          <Link to="/categories">Categories</Link>
        </nav>
      </header>
    </>
  );
}
