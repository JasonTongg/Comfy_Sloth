import React from 'react';
import {Container} from './Style';
import Hero from '../../Components/Home-Hero/Hero';
import Featured from '../../Components/Home-Featured/Featured';
import Vision from '../../Components/Home-Vision/Vision';
import Subscribe from '../../Components/Home-Subscribe/Subscribe';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  return (
    <Container>
      <Hero />
      <Featured />
      <Vision />
      <Subscribe />
      <Footer />
    </Container>
  );
}
