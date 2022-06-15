import { v4 as uuid } from 'uuid';

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const GET_BOOKS = 'GET BOOKS';

export const addBooks = (newBook) => ({ type: ADD, newBook });
export const removeBooks = (id) => ({ type: REMOVE, id });
export const getAPI = (payload) => ({ type: GET_BOOKS, payload });
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/a1Zicj5OsdDJt1tsRope/books';

export const fetchBooks = () => async (dispatch) => {
  const res = await fetch(url);
  const resJSON = await res.json();
  const books = [];
  Object.entries(resJSON).forEach((book) => {
    books.push({
      item_id: book[0],
      ...book[1][0],
    });
  });
  dispatch(getAPI(books));
};

const bookReducer = (state = [{ title: 'Atomic Habits', author: 'James Clear', id: uuid() }], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.newBook];

    case REMOVE:
      return [...state].filter((book) => book.id !== action.id);

    case GET_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export default bookReducer;
