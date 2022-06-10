import { combineReducers, legacy_createStore as createStore } from 'redux';
import categoriesReducer from './categories/categories';
import book from './books/books';

const rootReducer = combineReducers({
  book,
  categoriesReducer,
});

export const store = createStore(rootReducer);

export default rootReducer;
