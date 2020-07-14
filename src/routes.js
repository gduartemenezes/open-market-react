import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddProduct from './pages/AddProduct';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/addproduct" component={AddProduct} />
    </Switch>
  );
}
