import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header-title">Bookstore CMS</h1>
        <nav>
          <Link className="header-books" to="/">Books</Link>
          <Link className="header-category" to="/categories">Categories</Link>
        </nav>
      </header>
    </>
  );
}
