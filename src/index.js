import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';

const setupApollo = async () => {
  let cache = new InMemoryCache();
  await persistCache({
    cache,
    storage: window.localStorage,
  });
  let client = new ApolloClient({
    link: new HttpLink({
      uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    }),
    cache: cache,
  });
  return client;
};

async function renderApp() {
  let client = await setupApollo();
  ReactDOM.render(<App client={client} />, document.getElementById('root'));

  if (module.hot) {
    module.hot.accept();
  }
  serviceWorker.register();
}

renderApp();
