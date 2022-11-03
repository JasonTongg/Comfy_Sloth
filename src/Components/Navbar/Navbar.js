import React from 'react';
import {Container, Pages} from './Style';
import Logo from '../../Assets/logo.svg';
import {Link} from 'react-router-dom';
import CartButton from '../CartButton/CartButton';
import {useNavigate} from 'react-router-dom';
import '../../Global.css';

export default function Navbar() {
  let pages = ['Home', 'About', 'Product', 'Checkout'];
  let navigate = useNavigate();

  return (
    <Container className="Container">
      <img src={Logo} alt="logo" onClick={() => navigate('/')} />
      <Pages>
        {pages.map((item, index) => (
          <Link to={`/${item === 'Home' ? '' : item}`} key={index}>
            {item}
          </Link>
        ))}
      </Pages>
      <CartButton />
    </Container>
  );
}
