import React from 'react';
import * as Yup from 'yup';

import { FiChevronLeft } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import logo from '~/assets/img/facebook_1.png';
import { Container, Info } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  value: Yup.string().required('This field is required'),
  quantity: Yup.string().required('This field is required'),
});

function AddProduct() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

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
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="text" name="value" placeholder="Value" />
        <Input type="text" name="quantity" placeholder="Quantity" />
        <button type="submit">Add Product</button>
      </Form>
    </Container>
  );
}

export default AddProduct;
