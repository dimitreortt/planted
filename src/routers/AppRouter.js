import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage.js';
import PrivateRoute from './PrivateRoute.js';
import { FFAppRouter } from '../FFCore/routers/FFAppRouter.js';
import { HomePage } from '../pages/HomePage.js';
import ReformsPage from '../pages/ReformsPage.js';

export const AppRouter = (props) => {
  // console.log('to no app routers');
  return (
    <Router>
      <Switch>
        {/* <PrivateRoute path="/formManage/:formId/registries" component={App} />
        <PrivateRoute path="/formManage/:formId/" component={App} /> */}
        <Route path="/formfy" component={FFAppRouter} />
        <PrivateRoute path="/reforms" component={ReformsPage} exact />
        <PrivateRoute path="/" component={HomePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
