import React, {useState} from 'react';
import {Container, Mode, Big} from './Style';
import {BsFillCartFill} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {BsSun, BsMoon} from 'react-icons/bs';
import {toggleSidebar} from '../../Redux/Actions/AnimationActions';

export default function CartButton() {
  let toggle = useSelector((state) => state.animation.sidebar);
  let data = useSelector((state) => state.cart.CartProduct);
  let [mode, setMode] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let changeColor = () => {
    if (mode) {
      document.documentElement.style.setProperty('--primaryColor', '#ab7a5f');
      document.documentElement.style.setProperty('--secondaryColor', '#eaded7');
      document.documentElement.style.setProperty('--white', 'white');
      document.documentElement.style.setProperty('--black', 'black');
    } else {
      document.documentElement.style.setProperty('--primaryColor', '#fff');
      document.documentElement.style.setProperty('--secondaryColor', '#ab7a5f');
      document.documentElement.style.setProperty('--white', '#ab7a5f');
      document.documentElement.style.setProperty('--black', '#f1f5f8');
    }
  };

  return (
    <Big>
      <Mode
        onClick={() => {
          setMode(!mode);
          changeColor();
        }}
        style={
          mode
            ? {color: 'black', backgroundColor: 'white'}
            : {color: 'white', backgroundColor: 'var(--primaryColor'}
        }
      >
        {mode ? (
          <>
            <BsSun></BsSun>
            <p>Light</p>
          </>
        ) : (
          <>
            <BsMoon></BsMoon>
            <p>Dark</p>
          </>
        )}
      </Mode>
      <Container
        onClick={() => {
          navigate('/cart');
          if (toggle) {
            dispatch(toggleSidebar());
          }
        }}
      >
        <h3>Cart</h3>
        <BsFillCartFill />
        {data.length > 0 ? <div>{data.length}</div> : null}
      </Container>
    </Big>
  );
}
