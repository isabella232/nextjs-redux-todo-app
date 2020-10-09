import Head from 'next/head';
import React from 'react';
import { compose } from 'recompose';
import Todo from './todo';

const Page = (props) => {
  const {snippetKey, snippetAccountId, ...todoProps} = props;
  console.log(`Using snippetKey: ${snippetKey} from account: ${snippetAccountId}`);
  return (
    <div>
      <Head>
        <script src={ `https://cdn.optimizely.com/public/${snippetAccountId}/s/${snippetKey}.js` }></script>
        <title>NextJS Optimizely Demo App</title>
      </Head>
      <Todo {...todoProps} />
    </div>
  )
};

export default compose()(Page);
