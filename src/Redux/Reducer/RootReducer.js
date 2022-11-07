import {combineReducers} from 'redux';
import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';
import AnimationReducer from './AnimationReducer';

export default combineReducers({
  product: ProductReducer,
  cart: CartReducer,
  animation: AnimationReducer,
});
