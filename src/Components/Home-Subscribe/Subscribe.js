import React from 'react';
import {Container, Form, Content} from './Style';
import '../../Global.css';

export default function Subscribe() {
  return (
    <Container className="Container">
      <Content>
        <h2>Join our newsletter and get 20% off</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
      </Content>
      <Form>
        <input type="text" placeholder="Enter Email" />
        <button>Subscribe</button>
      </Form>
    </Container>
  );
}
