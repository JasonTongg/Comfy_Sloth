import React from 'react';
import {Container, Content} from './Style';
import Foto from '../../Assets/Home.png';
import {Link} from 'react-router-dom';
import '../../Global.css';

export default function Hero() {
  return (
    <Container className="Container">
      <Content>
        <h2>
          Design Your <br /> Comfort Zone
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link to="/product">SHOP NOW</Link>
      </Content>
      <img src={Foto} alt="foto" />
    </Container>
  );
}
