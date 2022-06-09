import checkReducer from "./categories/categories";
import bookReducer from "./books/books";
import { combineReducers } from "redux";
import { legacy_createStore as createStore } from 'redux';


const rootReducer = combineReducers({
    book: bookReducer,
    checkStatus: checkReducer,
})

export const store = createStore(rootReducer);

export default rootReducer;
