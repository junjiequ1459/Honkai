const initialState = {};

function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CHARACTER_SUCCESS":
      const { id, data } = action.payload;
      return { ...state, [id]: data };
    default:
      return state;
  }
}

export default charactersReducer;
