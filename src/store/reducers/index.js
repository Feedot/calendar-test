import CreateMatrix from "../../functions/createMatrix";

const initialState = {};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_DATA":
      state.matrix = CreateMatrix(payload);
      break;
  }

  return { ...state };
};
