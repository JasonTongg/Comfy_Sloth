import React, {useState} from 'react';
import '../../Global.css';
import {Container, FormItem, Section, Grid, Inputs, Overlay} from './Style';
import {AiOutlineCreditCard} from 'react-icons/ai';
import {RiPaypalLine} from 'react-icons/ri';
import {CheckoutButton} from '../../Pages/Cart/Style';
import Check from '../../Assets/Check.gif';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ClearOrder} from '../../Redux/Actions/CartActions';

export default function Checkout() {
  let dispatch = useDispatch();
  let [input, setInput] = useState({
    name: '',
    month: 0,
    year: 0,
    cvv: 0,
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
  });

  let [status, setStatus] = useState(false);

  return (
    <>
      <Container>
        <h2>Payment Info</h2>
        <Grid>
          <Section>
            <p>Payment Methods</p>
            <FormItem>
              <input
                type="radio"
                id="credit"
                value="Credit Card"
                name="payment"
                checked
              />
              <label for="credit">
                <AiOutlineCreditCard /> Credit Card
              </label>
            </FormItem>
            <FormItem>
              <input
                type="radio"
                id="paypal"
                value="Paypal"
                name="payment"
                disabled
              />
              <label for="paypal">
                <RiPaypalLine /> Paypal
              </label>
            </FormItem>
          </Section>
          <Section>
            <p>Card Number</p>
            <Inputs className="card">
              <input
                type="number"
                placeholder="xxxx"
                onChange={(e) => setInput({...input, number1: e.target.value})}
              />
              <input
                type="number"
                placeholder="xxxx"
                onChange={(e) => setInput({...input, number2: e.target.value})}
              />
              <input
                type="number"
                placeholder="xxxx"
                onChange={(e) => setInput({...input, number3: e.target.value})}
              />
              <input
                type="number"
                placeholder="xxxx"
                onChange={(e) => setInput({...input, number4: e.target.value})}
              />
            </Inputs>
          </Section>
          <Section>
            <p>Name on Card</p>
            <input
              type="text"
              className="name"
              placeholder="Name"
              onChange={(e) => setInput({...input, name: e.target.value})}
            />
          </Section>
          <Section>
            <p>Expiration Date:</p>
            <Inputs>
              <input
                type="number"
                min="1"
                max="12"
                step="1"
                placeholder="Month"
                onChange={(e) => setInput({...input, month: e.target.value})}
              />
              <input
                type="number"
                min="2022"
                max="2040"
                step="1"
                placeholder="Year"
                onChange={(e) => setInput({...input, year: e.target.value})}
              />
              <input
                type="number"
                placeholder="CVV"
                onChange={(e) => setInput({...input, cvv: e.target.value})}
              />
            </Inputs>
          </Section>
        </Grid>
      </Container>
      {input.name &&
      input.month &&
      input.year &&
      input.cvv &&
      input.number1 &&
      input.number2 &&
      input.number3 &&
      input.number4 ? (
        <CheckoutButton onClick={() => setStatus(true)}>Pay</CheckoutButton>
      ) : (
        <CheckoutButton style={{opacity: 0.5, cursor: 'auto'}} disabled>
          Pay
        </CheckoutButton>
      )}
      {status ? (
        <Overlay>
          <div>
            <img src={Check} alt="Done" />
            <h2>Payment Success</h2>
            <p>
              Thank you for purchase in Comft Sloth, wish you have a nice day
            </p>
            <Link to="/" onClick={() => dispatch(ClearOrder())}>
              Back to Home
            </Link>
          </div>
        </Overlay>
      ) : null}
    </>
  );
}
