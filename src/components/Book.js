import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ title, author, deleteBooks }) {
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    deleteBooks: PropTypes.func.isRequired,
  };
  return (
    <main>
      <ul className="bookContainer">
        <li className="bookList">

          <div className="bookInfo">
            <p className="bookCategory">Category</p>
            <span className="bookTitle">{title}</span>
            <span className="bookAuthor">{author}</span>
            <div className="bookCommands">
              <a href="/">Comment</a>
              <a href="/" onClick={deleteBooks}>
                Remove
              </a>
              <a href="/">Edit</a>
            </div>
          </div>

          <div className="bookScore">
            <div className="circle" />
            <div>
              <p className="percentage">64%</p>
              <p className="status">Completed</p>
            </div>
          </div>

          <div className="chapterContainer">
            <p className="chapterStatus">CURRENT CHAPTER</p>
            <p className="currentChapter">Chapter 17</p>
            <a className="updateChapter" href="/">UPDATE PROGRESS</a>
          </div>
        </li>
      </ul>
    </main>
  );
}
