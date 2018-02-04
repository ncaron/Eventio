import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import NotFound from '../Pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route component={ NotFound } />
    </Switch>
  );
};

export default Routes;
