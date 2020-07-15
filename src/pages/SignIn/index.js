import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import logo from '~/assets/img/facebook_1.png';
import { Container, Info } from './styles';

function SignIn() {

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Info>
        <img src={logo} alt="Open Market" />
        <h3>Log in</h3>
        <span>Start selling your goods right away</span>
        <Link to="/register">
          <span>I don&apos;t have an account </span>
          <FiLogIn size={20} color="#FFF" />
        </Link>
      </Info>
      <Form onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="E-mail" />
        <Input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign in</button>
      </Form>
    </Container>
  );
}

export default SignIn;
