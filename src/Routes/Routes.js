import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import PasswordSent from '../Pages/PasswordSent';
import NotFound from '../Pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route exact path="/forgotpassword" component={ ForgotPassword } />
      <Route exact path="/forgotpassword/sent" component={ PasswordSent } />
      <Route component={ NotFound } />
    </Switch>
  );
};

export default Routes;
