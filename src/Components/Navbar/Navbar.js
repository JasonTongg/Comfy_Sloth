import React from 'react';
import {Container, Pages, Sidebar} from './Style';
import Logo from '../../Assets/logo.svg';
import {Link} from 'react-router-dom';
import CartButton from '../CartButton/CartButton';
import {useNavigate} from 'react-router-dom';
import '../../Global.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {useSelector, useDispatch} from 'react-redux';
import {toggleSidebar} from '../../Redux/Actions/AnimationActions';
import {IoMdClose} from 'react-icons/io';

export default function Navbar() {
  let pages = ['Home', 'About', 'Product'];
  let navigate = useNavigate();
  let toggle = useSelector((state) => state.animation.sidebar);
  let dispatch = useDispatch();

  return (
    <Container className="Container">
      <img src={Logo} alt="logo" onClick={() => navigate('/')} />
      <Pages>
        {pages.map((item, index) => (
          <Link to={`/${item === 'Home' ? '' : item}`} key={index}>
            {item}
          </Link>
        ))}
      </Pages>
      <CartButton />
      <div
        className="sidebar"
        onClick={() => {
          dispatch(toggleSidebar());
        }}
      >
        <GiHamburgerMenu></GiHamburgerMenu>
      </div>
      <Sidebar className={toggle ? 'show' : 'hide'}>
        <div className="header">
          <img
            src={Logo}
            alt="logo"
            onClick={() => {
              navigate('/');
              dispatch(toggleSidebar());
            }}
          />
          <IoMdClose
            onClick={() => {
              dispatch(toggleSidebar());
            }}
          ></IoMdClose>
        </div>
        {pages.map((item, index) => (
          <Link
            to={`/${item === 'Home' ? '' : item}`}
            key={index}
            onClick={() => {
              dispatch(toggleSidebar());
            }}
          >
            {item}
          </Link>
        ))}
        <CartButton />
      </Sidebar>
    </Container>
  );
}
