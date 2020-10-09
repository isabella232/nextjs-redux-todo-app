import { SET_SNIPPET_KEY } from "../constants/actionTypes";

export const initialState = {
  accountId: process.env.OPTIMIZELY_ACCOUNT_ID,
  snippetKey: undefined,
};

export default (state = initialState, action) => {
  const {
    type,
    key,
  } = action;

  switch (type) {
    case SET_SNIPPET_KEY:
      return Object.assign({}, state, {
        snippetKey: key,
      });
    default:
      return state;
  }
};
