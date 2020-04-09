import { css, Global } from '@emotion/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { PluginProvider } from 'store';
import App from './App';
import * as serviceWorker from './serviceWorker';

const globalStyles = css`
  body,
  html,
  #root {
    height: 100%;
    margin: 0;
  }

  .ReactVirtualized {
    &__Grid,
    &__Table__headerColumn,
    &__Table__rowColumn {
      margin-right: 0;
      outline: none;
    }
  }
`;

ReactDOM.render(
  <>
    <Global styles={globalStyles} />
    <PluginProvider>
      <App />
    </PluginProvider>
  </>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
