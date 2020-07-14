import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ActionBox } from './styles';
import logo from '~/assets/img/logo_transparent.png';

export default function Main() {
  return (
    <Container>
      <header>
        <img src={logo} alt="Open Market" />
        <Link to="/about">About us</Link>
        <div className="Auth pages">
          <Link to="/signin">Sign in</Link>
          <Link to="/register">Sign up</Link>
        </div>
      </header>
      <h1>
        Start eating healthy food today
        <br />
        It&apos;s time to discover.
      </h1>
      <ActionBox>
        <Link to="/register">Join Now</Link>
        <Link to="/signin" className="btn-login">
          Login
        </Link>
      </ActionBox>
    </Container>
  );
}
