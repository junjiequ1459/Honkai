import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import charactersReducer from "./reducers/characterReducer";
import navbarReducer from "./reducers/navbarReducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
  navbar: navbarReducer, // Add the navbar reducer here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
