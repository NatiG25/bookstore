import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from './redux/books/books';

export default function Book({ title, author, id }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(remove(id));
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
          {' '}
          <button type="button" onClick={() => { handleDelete(id); }}>Remove</button>
        </li>
      </ul>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
