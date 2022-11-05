import React from 'react';
import '../../Global.css';
import {Container} from './Style';
import {useNavigate} from 'react-router-dom';

export default function Header({text, detail}) {
  let navigate = useNavigate();
  return (
    <Container className="Container">
      <span onClick={() => navigate('/')}>Home</span>{' '}
      {detail ? (
        <>
          &nbsp; / &nbsp;
          <span onClick={() => navigate('/product')}>Products</span>
        </>
      ) : null}{' '}
      &nbsp; {text}
    </Container>
  );
}
