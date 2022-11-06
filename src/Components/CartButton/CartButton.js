import React from 'react';
import {Container} from './Style';
import {BsFillCartFill} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function CartButton() {
  let data = useSelector((state) => state.cart.CartProduct);
  let navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/cart')}>
      <h3>Cart</h3>
      <BsFillCartFill />
      {data.length > 0 ? <div>{data.length}</div> : null}
    </Container>
  );
}
