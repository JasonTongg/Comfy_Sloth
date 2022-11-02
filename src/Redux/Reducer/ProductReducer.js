let initialState = {
  productList: [],
};

export default function ProductReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case 'Get Product List':
      return {
        ...state,
        productList: payload,
      };
    default:
      return state;
  }
}
