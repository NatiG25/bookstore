import { v4 as uuid } from 'uuid';

const ADD = 'ADD';
const REMOVE = 'REMOVE';

export const addBooks = (newBook) => ({ type: ADD, newBook });
export const removeBooks = (id) => ({ type: REMOVE, id });

const bookReducer = (state = [{ title: 'Atomic Habits', author: 'James Clear', id: uuid() }], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.newBook];

    case REMOVE:
      return [...state].filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export default bookReducer;
