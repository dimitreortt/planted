import { LoginPage } from './../pages/LoginPage';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = (props: any) => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path='/' component={LoginPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
