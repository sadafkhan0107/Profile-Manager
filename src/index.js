import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProfileProvider, DeleteProvider, EditProfileProvider, FilterProvider } from './context';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';


const url = 'https://api.poc.graphql.dev.vnplatform.com/graphql';

const httpLink = createHttpLink({
  uri: url, 
});

const authenticationLink = setContext((_, { headers }) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5kaWRhdGVfbmFtZSI6InNhZGFmLmtoYW5AYWlkZXRpYy5pbiIsImlzX2NhbmRpZGF0ZSI6dHJ1ZSwiaWF0IjoxNjkwMTkwODE3LCJleHAiOjE2OTA3MDkyMTd9.svY06nK9bATWCoTbJnXFGYSYu05R6x-b3wk9wiM9X9Q';
  return {
    headers: {
      authorization: token ? token : ''
    }
  };
});

const client = new ApolloClient({
  link: authenticationLink.concat(httpLink),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <FilterProvider>
        <ProfileProvider>
          <DeleteProvider>
            <EditProfileProvider>
            <App />
            </EditProfileProvider>
          </DeleteProvider>
        </ProfileProvider>`
      </FilterProvider> 
    </ApolloProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
