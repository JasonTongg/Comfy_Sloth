import React from 'react';
import {Container, Content, Items, Item} from './Style';
import '../../Global.css';
import {GiCompass, GiDiamondHard, GiAncientSword} from 'react-icons/gi';

export default function Vision() {
  let item = [
    {
      title: 'Mission',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
      icon: <GiCompass></GiCompass>,
    },
    {
      title: 'Vision',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
      icon: <GiDiamondHard></GiDiamondHard>,
    },
    {
      title: 'History',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
      icon: <GiAncientSword></GiAncientSword>,
    },
  ];

  return (
    <Container className="Container">
      <Content>
        <h2>
          Custom Furniture <br /> Built Only For You
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis <br /> consectetur reprehenderit non aliquam voluptates dolore
          aut vero consequuntur.
        </p>
      </Content>
      <Items>
        {item.map((item, index) => (
          <Item key={index}>
            <div>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Item>
        ))}
      </Items>
    </Container>
  );
}
