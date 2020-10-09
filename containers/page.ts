import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  compose,
  pure,
} from 'recompose';
import {
  onChangeTodo,
  addTodo,
  deleteTodo,
} from '../actions';
import {
  selectTodoItem,
  selectTodoData,
  selectSnippetKey,
  selectSnippetAccountId,
} from '../selectors';
import Page from '../components/page';

export default compose(
  connect(
    createSelector(
      selectTodoItem(),
      selectTodoData(),
      selectSnippetKey(),
      selectSnippetAccountId(),
      (item, data, snippetKey, snippetAccountId) => ({ item, data, snippetKey, snippetAccountId }),
    ),
    {
      onChangeTodo,
      addTodo,
      deleteTodo,
    },
  ),
  pure,
)(Page);
