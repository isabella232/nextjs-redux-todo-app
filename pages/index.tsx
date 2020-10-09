import {
  NextPageContext,
  NextComponentType,
} from 'next';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Page from '../containers/page';
import { addTodo, setSnippetKey } from '../actions';
import { Store } from '../store';

interface IndexPageContext extends NextPageContext {
  store: Store;
}

const IndexPage: NextComponentType<IndexPageContext> = compose()(Page);

IndexPage.getInitialProps = ({ store, req, query: { snippetKey='nextjs_main' } }) => {
  const isServer: boolean = !!req;
  const { todo } = store.getState();

  // we can add any custom data here
  // for examle, the data from api server
  store.dispatch(addTodo(Object.assign(todo.item, {
    value: 'Hello World!',
  })));

  store.dispatch(setSnippetKey(snippetKey));

  return {
    isServer,
  };
}

export default connect()(IndexPage);
