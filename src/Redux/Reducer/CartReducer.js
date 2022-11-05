let initialState = {
  CartProduct: [],
};

export default function CartReducer(state = initialState, action) {
  const {type} = action;
  switch (type) {
    default:
      return state;
  }
}
