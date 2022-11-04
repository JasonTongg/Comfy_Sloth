import React from 'react';
import {useSelector} from 'react-redux';
import {Container, Item} from './Style';

export default function LineProduct({data}) {
  let filterData = useSelector((state) => state.product.filteredProduct);
  console.log(filterData);
  return (
    <Container>
      {filterData.map((item) => {
        return (
          <Item key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price / 100}</p>
              <p>{item.description.substring(0, 150)}...</p>
              <button>DETAILS</button>
            </div>
          </Item>
        );
      })}
    </Container>
  );
}
