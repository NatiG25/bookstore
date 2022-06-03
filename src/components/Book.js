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
          :
          {author}
        </li>
      </ul>
    </>
  );
}
