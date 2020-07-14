import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import logo from '~/assets/img/logo.png';
import { Container, Info } from './styles';

function SignIn() {
  return (
    <Container>
      <Info>
        <img src={logo} alt="Open Market" />
        <h3>Log in</h3>
        <span>Start selling your goods right away</span>
        <Link to="/register">I don't have an account</Link>
      </Info>
      <Form>
        <Input type="email" name="email" placeholder="E-mail" />
        <Input type="password" name="password" placeholder="Password" />
        <button type="button">Sign in</button>
      </Form>
    </Container>
  );
}

export default SignIn;
