import {combineReducers} from 'redux';
import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';
import DetailReducer from './DetailReducer';

export default combineReducers({
  product: ProductReducer,
  cart: CartReducer,
  details: DetailReducer,
});
