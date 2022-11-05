import {combineReducers} from 'redux';
import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';

export default combineReducers({
  product: ProductReducer,
  cart: CartReducer,
});
