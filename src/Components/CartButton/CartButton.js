import React from 'react';
import {Container} from './Style';
import {BsFillCartFill} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';

export default function CartButton() {
  let navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/cart')}>
      <h3>Cart</h3>
      <BsFillCartFill />
      <div>99</div>
    </Container>
  );
}
