import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache,
} from "@apollo/client";

/**
 * Import GRAPHCMS_URI from application configuration (from 'appConfig.json', NOT from 'appConfig.dev.json'). 
 * Hence this does not violate The Twelve-Factor app. For more: https://12factor.net/config.
 *  */
import appConfig from './appConfig.json';

// Connecting this site to the GraphQL API
const client = new ApolloClient({
  uri: appConfig.GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
