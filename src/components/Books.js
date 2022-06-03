import React from 'react';
import PropTypes from 'prop-types';

export default function Books({ title, author }) {
  Books.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

  return (
    <>
      <main>
        <p>{title}</p>
        <p>{author}</p>
        <ul />
        <button type="button">Remove</button>
      </main>
    </>
  );
}
