import React from 'react';
import '../../Global.css';
import {Container, Content, Line} from './Style';
import Foto from '../../Assets/about.jpeg';
import Header from '../../Components/Header/Header';

export default function About() {
  return (
    <React.Fragment>
      <Header text="/ About" />
      <Container className="Container">
        <img src={Foto} alt="foto" />
        <Content>
          <h2>Our Story</h2>
          <Line />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </Content>
      </Container>
    </React.Fragment>
  );
}
