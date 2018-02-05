import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route component={ NotFound } />
    </Switch>
  );
};

export default Routes;
