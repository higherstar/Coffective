import createReducer from "../createReducer";
import { getToken } from "./user";

// ------------------------------------
// Constants
// ------------------------------------
export const GET_NUMBER_REQUEST = "Number.GET_NUMBER_REQUEST ";
export const GET_NUMBER_SUCCESS = "Number.GET_NUMBER_SUCCESS";
export const GET_NUMBER_FAILURE = "Number.GET_NUMBER_FAILURE";

// ------------------------------------
// Actions
// ------------------------------------
export const getNumber = () => (dispatch, getState, { fetch }) => {
  dispatch({ type: GET_NUMBER_REQUEST });
  const { token } = dispatch(getToken());
  return fetch(`/wp/v2/wic/number=3`, {
    method: "GET",
    token,
    success: number => dispatch({ type: GET_NUMBER_SUCCESS, number }),
    failure: () => dispatch({ type: GET_NUMBER_FAILURE })
  });
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  number: []
};

export default createReducer(initialState, {
  [GET_NUMBER_REQUEST]: (state, action) => ({
    loading: true
  }),
  [GET_NUMBER_SUCCESS]: (state, { number }) => ({
    loading: false,
    number
  }),
  [GET_NUMBER_FAILURE]: (state, action) => ({
    loading: false
  })
});
