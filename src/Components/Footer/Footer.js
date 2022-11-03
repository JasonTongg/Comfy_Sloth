import React from 'react';
import {Container} from './Style';
import '../../Global.css';

export default function Footer() {
  return (
    <Container className="Container">
      &copy; {new Date().getFullYear()} <span>ComfySloth</span> All rights
      reserved
    </Container>
  );
}
