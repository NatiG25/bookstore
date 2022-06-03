import React from 'react';

export default function Form() {
  return (
    <>
      <h2>Add A Book</h2>
      <form>
        <input type="text" placeholder="Enter Book Title" />
        <input type="text" placeholder="Enter Author Name" />
      </form>
    </>
  );
}
