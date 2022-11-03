let initialState = {
  productList: [],
  featured: [],
};

export default function ProductReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case 'Get Product List':
      let featured = payload.filter((item) => item.featured === true);

      return {
        ...state,
        productList: payload,
        featured,
      };
    default:
      return state;
  }
}
