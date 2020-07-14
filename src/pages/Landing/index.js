import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ActionBox } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        Start eating healthy food today.
        <br />
        It&apos;s time to discover.
      </h1>
      <ActionBox>
        <Link to="/register">Join Now</Link>
        <Link to="/signin" className="btn-beers">
          Login
        </Link>
      </ActionBox>
    </Container>
  );
}
