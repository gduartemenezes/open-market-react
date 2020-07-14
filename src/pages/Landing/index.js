import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ActionBox } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        Say goodbye to the same old beers.
        <br />
        It's time to discover.
      </h1>
      <ActionBox>
        <Link to="/register">Join Now</Link>
        <Link to="/popular" className="btn-beers">
          Popular Beers
        </Link>
      </ActionBox>
    </Container>
  );
}
