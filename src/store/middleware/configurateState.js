import axios from "axios";

export default ({ dispatch, getState }) => next => ({ type, payload }) => {
  const state = getState();
  if (type === "TAKE_DATA")
    axios.get("data.json")
        .then(({ data, ...rest }) => {
      dispatch({
        type: "GET_DATA",
        payload: data
      });
    });
  next({ type, payload });
};