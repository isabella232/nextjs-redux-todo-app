import { combineReducers } from 'redux';
import todo, { initialState as todoState } from './todo';
import snippet, { initialState as snippetState } from './snippet';

export const initialState = {
  todo: todoState,
  snippet: snippetState,
};

export default combineReducers({
  todo,
  snippet,
});
