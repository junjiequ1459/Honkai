// navbarReducer.js

import { SET_NAVBAR_NUMBER } from "../actions/navbarActions";

const initialState = {
  number: 1,
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVBAR_NUMBER:
      return {
        ...state,
        number: action.payload,
      };
    default:
      return state;
  }
};

export default navbarReducer;
