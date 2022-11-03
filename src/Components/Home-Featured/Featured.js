import React from 'react';
import {Container, Item, ItemInfo, Items, Line} from './Style';
import '../../Global.css';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

export default function Featured() {
  let featuredData = useSelector((state) => state.product.featured);

  return (
    <Container className="Container">
      <h2>Featured Products</h2>
      <Line />
      <Items>
        {featuredData.slice(0, 3).map((item, index) => (
          <Item key={index}>
            <img src={item.image} alt={item.name} />
            <ItemInfo>
              <p>{item.name}</p>
              <p>${item.price / 100}</p>
            </ItemInfo>
          </Item>
        ))}
      </Items>
      <Link to="/product">All Products</Link>
    </Container>
  );
}
