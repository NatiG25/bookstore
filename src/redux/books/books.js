// Types
const ADD = 'ADD';
const REMOVE = 'REMOVE';
const GET_BOOKS = 'GET BOOKS';

// Action Creaters
export const addBooks = (newBook) => ({ type: ADD, newBook });
export const removeBooks = (id) => ({ type: REMOVE, id });
export const getAPI = (payload) => ({ type: GET_BOOKS, payload });

// Get API
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/a1Zicj5OsdDJt1tsRope/books/';
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

// Post API
export const postBooks = (newBook) => async (dispatch) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newBook),
  });
  dispatch(addBooks(newBook));
};

// Delete API
export const deleteAPI = (id) => async (dispatch) => {
  await fetch(url + id, {
    method: 'DELETE',
  });
  dispatch(removeBooks(id));
};

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.newBook];

    case REMOVE:
      return [...state].filter((book) => book.item_id !== action.id);

    case GET_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export default bookReducer;
