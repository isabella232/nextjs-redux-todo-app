import { createSelector } from 'reselect';

export const selectTodoState = () => state => state.todo;
export const selectSnippetState = () => state => state.snippet;

export const selectTodoItem = () =>
  createSelector(
    selectTodoState(),
    todo => todo.item,
  );

export const selectTodoData = () =>
  createSelector(
    selectTodoState(),
    todo => todo.data,
  );

export const selectSnippetKey = () =>
  createSelector(
    selectSnippetState(),
    snippet => snippet.snippetKey,
  );

export const selectSnippetAccountId = () =>
  createSelector(
    selectSnippetState(),
    snippet => snippet.accountId,
  );
