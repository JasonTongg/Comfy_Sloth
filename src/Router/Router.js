import React from 'react';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Details from '../Pages/Details/Details';
import Checkout from '../Pages/Checkout/Checkout';
import List from '../Pages/ListItem/ListItem';
import Cart from '../Pages/Cart/Cart';
import NotFound from '../Pages/NotFound/NotFound';
import About from '../Pages/About/About';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Product" element={<List />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
