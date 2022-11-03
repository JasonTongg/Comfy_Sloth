import React from 'react';
import '../../Global.css';
import {Container} from './Style';

export default function Header({text}) {
  return (
    <Container className="Container">
      <span>Home</span> {text}
    </Container>
  );
}
