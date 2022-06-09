import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ title, author }) {
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };
  return (
    <>
      <ul>
        <li>
          {title}
          {' '}
          :
          {' '}
          {author}
          <button type="button">Remove</button>
        </li>
      </ul>
    </>
  );
}
