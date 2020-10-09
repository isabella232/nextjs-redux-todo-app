import {
  TODO_ONCHANGE,
  TODO_ADD,
  TODO_DELETE,
  SET_SNIPPET_KEY,
} from '../constants/actionTypes';

export const setSnippetKey = (key) => ({type: SET_SNIPPET_KEY, key});

export const onChangeTodo = (item) => ({ type: TODO_ONCHANGE, item });

export const addTodo = (item) => ({ type: TODO_ADD, item });

export const deleteTodo = (item) => ({ type: TODO_DELETE, item });
