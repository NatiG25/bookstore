import { v4 as uuid } from 'uuid';

const ADD = 'add';
const REMOVE = 'remove';

// Action Creators
export const adding = (payload) => {
  const obj = {
    type: ADD,
    payload: { ...payload, id: uuid() },
  };

  return obj;
};

export const remove = (payload) => ({
  type: REMOVE,
  payload,
});

// Reducers
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case REMOVE:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
