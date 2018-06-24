import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
    uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
  });
  (async () => {
    const result = await client.query({
      query: gql`
        {
          rates(currency: "USD") {
            currency, rate
          }
        }
      `
    });
    console.log(result);
  })();


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root'));
registerServiceWorker();
