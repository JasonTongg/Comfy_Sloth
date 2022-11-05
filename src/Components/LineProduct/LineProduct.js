import React from 'react';
import {Container, Item, Overlay} from './Style';
import {BiSearchAlt} from 'react-icons/bi';
import {useNavigate} from 'react-router-dom';

export default function LineProduct({data}) {
  let navigate = useNavigate();

  return (
    <Container>
      {data.map((item) => {
        return (
          <Item key={item.id}>
            <img src={item.image} alt={item.name} />
            <Overlay onClick={() => navigate(`/details/${item.id}`)}>
              <BiSearchAlt></BiSearchAlt>
            </Overlay>
            <div>
              <h3 onClick={() => navigate(`/details/${item.id}`)}>
                {item.name}
              </h3>
              <p>${item.price / 100}</p>
              <p>{item.description.substring(0, 150)}...</p>
              <button onClick={() => navigate(`/details/${item.id}`)}>
                DETAILS
              </button>
            </div>
          </Item>
        );
      })}
    </Container>
  );
}
