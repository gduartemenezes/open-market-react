import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddProduct from './pages/AddProduct';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/register" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/addproduct" component={AddProduct} />
    </Switch>
  );
}
