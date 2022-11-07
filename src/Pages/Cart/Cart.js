import React, {useEffect, useState} from 'react';
import '../../Global.css';
import {
  Container,
  Table,
  Grid,
  Line,
  Empty,
  Buttons,
  TotalPrice,
  TotalGrid,
  Data,
  CheckoutButton,
  Details,
} from './Style';
import Header from '../../Components/Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import {AiOutlinePlus, AiOutlineMinus, AiFillDelete} from 'react-icons/ai';
import {
  UpdateOrder,
  DeleteOrder,
  ClearOrder,
  TotalPrice as Total_Price,
} from '../../Redux/Actions/CartActions';
import {useNavigate} from 'react-router-dom';
import Checkout from '../../Components/Checkout/Checkout';

export default function Cart() {
  let data = useSelector((state) => state.cart.CartProduct);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [total, setTotal] = useState(0);
  let [checkout, setCheckout] = useState(false);

  useEffect(() => {
    if (total === 0) {
      data.forEach((element) => {
        setTotal((old) => {
          return old + element.price * element.order;
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(Total_Price(total / 100 + 5.34));
  }, [total, dispatch]);

  return (
    <Container>
      <Header text="/ Cart"></Header>
      {data.length > 0 ? (
        <Data className="Container">
          <Table>
            <Grid>
              <p>Item</p>
              <p className="headPrice">Price</p>
              <p>Quantity</p>
              <p className="subtotal">SubTotal</p>
            </Grid>
            <Line></Line>
            {data.map((item, index) => (
              <div key={index}>
                <Grid>
                  <div className="item">
                    <img src={item.images[0].url} alt={item.name} />
                    <div className="itemInfo">
                      <p>{item.name}</p>
                      <p>
                        Color :{' '}
                        <span style={{backgroundColor: item.colors}}></span>
                      </p>
                    </div>
                  </div>
                  <p className="price">${item.price / 100}</p>
                  <div className="order">
                    <AiOutlineMinus
                      onClick={() => {
                        let newOrder = item.order - 1;
                        if (newOrder <= 0) {
                          newOrder = 0;
                        } else {
                          setTotal((old) => {
                            return old - +item.price;
                          });
                        }

                        if (newOrder > 0) {
                          dispatch(UpdateOrder({index, value: newOrder}));
                        } else {
                          console.log('masuk?');
                          dispatch(DeleteOrder(item.orderId));
                        }
                      }}
                    ></AiOutlineMinus>
                    <p>{item.order}</p>
                    <AiOutlinePlus
                      onClick={() => {
                        let newOrder = item.order;
                        if (newOrder + 1 > item.stock) {
                          newOrder = item.stock;
                        } else {
                          newOrder += 1;
                          setTotal((old) => {
                            return old + +item.price;
                          });
                        }
                        dispatch(UpdateOrder({index, value: newOrder}));
                      }}
                    ></AiOutlinePlus>
                  </div>
                  <div className="Total">
                    <p>${(item.price * +item.order) / 100}</p>
                    <div onClick={() => dispatch(DeleteOrder(item.orderId))}>
                      <AiFillDelete />
                    </div>
                  </div>
                </Grid>
                <Line></Line>
              </div>
            ))}
          </Table>
          <Buttons>
            <button onClick={() => navigate('/product')}>
              Continue Shopping
            </button>
            <button onClick={() => dispatch(ClearOrder())}>
              Clear Shopping Cart
            </button>
          </Buttons>
          <Details>
            <div>
              {checkout ? (
                <>
                  <Checkout />
                </>
              ) : null}
            </div>
            <div>
              <TotalPrice>
                <TotalGrid>
                  <p>Subtotal :</p>
                  <p>${total / 100}</p>
                </TotalGrid>
                <TotalGrid>
                  <p>Shipping Fee :</p>
                  <p>$5.34</p>
                </TotalGrid>
                <Line></Line>
                <TotalGrid>
                  <p>Order Total :</p>
                  <p>${(total / 100 + 5.34).toFixed(2)}</p>
                </TotalGrid>
              </TotalPrice>
              <CheckoutButton onClick={() => setCheckout(true)}>
                Check out
              </CheckoutButton>
            </div>
          </Details>
        </Data>
      ) : (
        <Empty>
          <h2>Your Cart is Empty!!</h2>
          <button onClick={() => navigate('/product')}>FILL IT</button>
        </Empty>
      )}
    </Container>
  );
}
