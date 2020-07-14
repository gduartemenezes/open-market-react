import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import logo from '~/assets/img/facebook_1.png';
import { Container, Info } from './styles';

function AddProduct() {
  return (
    <Container>
      <Info>
        <img src={logo} alt="Open Market" />
        <h3>Add Product</h3>
        <span>Add a new product to your store.</span>
        <Link to="/">
          <FiChevronLeft size={20} color="#FFF" />
          <span>Back to profile</span>
        </Link>
      </Info>
      <Form>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="text" name="value" placeholder="Value" />
        <Input type="text" name="quantity" placeholder="Quantity" />
        <button type="button">Add Product</button>
      </Form>
    </Container>
  );
}

export default AddProduct;
