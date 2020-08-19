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

// Connecting this site to the GraphQL API
const client = new ApolloClient({
  uri: 
    "https://api-ap-northeast-1.graphcms.com/v2/cke1b4a2i1i5u01w8fk98293h/master",
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
