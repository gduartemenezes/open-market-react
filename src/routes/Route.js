import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/signin" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/profile" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
