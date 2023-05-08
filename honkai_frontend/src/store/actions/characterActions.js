export const fetchCharacterSuccess = (id, data) => {
  return {
    type: "FETCH_CHARACTER_SUCCESS",
    payload: { id, data },
  };
};

export const fetchCharacter = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:5000/characters/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchCharacterSuccess(id, data)));
  };
};
