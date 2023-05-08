import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import charactersReducer from "./reducers/characterReducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
