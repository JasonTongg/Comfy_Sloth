import React from 'react';
import {Item, ItemInfo, Items, Overlay} from './Style';
import {BiSearchAlt} from 'react-icons/bi';
import {useNavigate} from 'react-router-dom';

export default function ProductList({data}) {
  let navigate = useNavigate();
  return (
    <Items>
      {data.map((item) => {
        return (
          <Item key={item.id}>
            <img src={item.image} alt={item.name} />
            <Overlay onClick={() => navigate(`/details/${item.id}`)}>
              <BiSearchAlt></BiSearchAlt>
            </Overlay>
            <ItemInfo>
              <p onClick={() => navigate(`/details/${item.id}`)}>{item.name}</p>
              <p>${item.price / 100}</p>
            </ItemInfo>
          </Item>
        );
      })}
    </Items>
  );
}
