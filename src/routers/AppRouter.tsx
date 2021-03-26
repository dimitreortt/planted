import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { LoginPage } from './../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';

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
