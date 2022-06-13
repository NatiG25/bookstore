import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ title, author, deleteBooks }) {
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    deleteBooks: PropTypes.func.isRequired,
  };
  return (
    <>
      <ul>
        <li>
          {title}
          {' '}
          :
          {author}
          {' '}
          <button type="button" onClick={deleteBooks}>
            Remove
          </button>
        </li>
      </ul>
    </>
  );
}
