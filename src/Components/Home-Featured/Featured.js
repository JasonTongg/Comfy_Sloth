import React from 'react';
import {Container, Line} from './Style';
import '../../Global.css';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import ProductList from '../ProductList/ProductList';

export default function Featured() {
  let featuredData = useSelector((state) => state.product.featured);

  return (
    <Container className="Container">
      <h2>Featured Products</h2>
      <Line />
      <ProductList data={featuredData.slice(0, 3)} />
      <Link to="/product">All Products</Link>
    </Container>
  );
}
