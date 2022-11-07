let initialState = {
  CartProduct: [],
  TotalPrice: 0,
};

export default function CartReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case 'Add Cart':
      let cek = state.CartProduct.find(
        (item) => item.colors === payload.colors && item.nama === payload.nama
      );
      let newState;
      if (cek) {
        let newOrder = payload;
        newOrder.order += cek.order;
        if (newOrder.order > cek.stock) {
          newOrder.order = cek.stock;
        }
        let newCartss = [
          ...state.CartProduct.filter(
            (item) => item.orderId !== payload.orderId
          ),
          newOrder,
        ];
        return {
          ...state,
          CartProduct: newCartss,
        };
      } else {
        newState = {...state, CartProduct: [...state.CartProduct, payload]};
        return newState;
      }
    case 'Update Order':
      let newCart = [...state.CartProduct];
      newCart[payload.index].order = payload.value;
      return {...state, CartProduct: newCart};
    case 'Delete Order':
      let newCarts = state.CartProduct.filter(
        (item) => item.orderId !== payload
      );
      return {...state, CartProduct: newCarts};
    case 'Clear Order':
      return {...state, CartProduct: []};
    case 'Total Price':
      return {...state, TotalPrice: payload};
    default:
      return state;
  }
}
