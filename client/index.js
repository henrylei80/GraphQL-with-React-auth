import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';

import App from './components/App';
import LoginForm from './components/LoginForm ';
import SignupForm from './components/SignUpForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';

const client = new ApolloClient({ dataIdFromObject: o => o.id });

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='login' component={LoginForm} />
          <Route path='signup' component={SignupForm} />
          <Route path='dashboard' component={requireAuth(Dashboard)} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
