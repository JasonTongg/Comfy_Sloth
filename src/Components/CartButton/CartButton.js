import React from 'react';
import {Container} from './Style';
import {BsFillCartFill} from 'react-icons/bs';

export default function CartButton() {
  return (
    <Container>
      <h3>Cart</h3>
      <BsFillCartFill />
      <div>99</div>
    </Container>
  );
}
