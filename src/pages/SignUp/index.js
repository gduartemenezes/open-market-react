import React from 'react';
import * as Yup from 'yup';

import { FiChevronLeft } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import logo from '~/assets/img/facebook_1.png';
import { Container, Info } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  email: Yup.string()
    .email('Invalid e-mail')
    .required('This field is required'),
  password: Yup.string()
    .required('This field is required')
    .min(6, 'Needs at least 6 digits'),
});

function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Info>
        <img src={logo} alt="Open Market" />
        <h3>Join us.</h3>
        <span>Create your account and enjoy our services.</span>
        <Link to="/">
          <FiChevronLeft size={20} color="#FFF" />
          <span>Back to login</span>
        </Link>
      </Info>
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="email" name="email" placeholder="E-mail" />
        <Input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign up</button>
      </Form>
    </Container>
  );
}

export default SignUp;
