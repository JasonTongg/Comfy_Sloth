import React from 'react';
import {Item, ItemInfo, Items} from './Style';

export default function ProductList({data}) {
  console.log('render');
  return (
    <Items>
      {data.map((item) => {
        return (
          <Item key={item.id}>
            <img src={item.image} alt={item.name} />
            <ItemInfo>
              <p>{item.name}</p>
              <p>${item.price / 100}</p>
            </ItemInfo>
          </Item>
        );
      })}
    </Items>
  );
}
