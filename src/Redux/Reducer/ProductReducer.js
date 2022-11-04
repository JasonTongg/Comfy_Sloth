let initialState = {
  productList: [],
  featured: [],
  filter: {
    search: '',
    category: 'all',
    company: 'all',
    colors: 'all',
    price: 0,
    shipping: false,
  },
  sort: 'Price (Lowest)',
  filteredProduct: [],
};

export default function ProductReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case 'Get Product List':
      let featured = payload.filter((item) => item.featured === true);

      let productList = payload;
      if (state.filter.search) {
        productList = productList.filter((item) =>
          item.name.toLowerCase().includes(state.filter.search.toLowerCase())
        );
      }
      if (state.filter.category.toLowerCase() !== 'all') {
        productList = productList.filter(
          (item) =>
            item.category.toLowerCase() === state.filter.category.toLowerCase()
        );
      }
      if (state.filter.company.toLowerCase() !== 'all') {
        productList = productList.filter(
          (item) =>
            item.company.toLowerCase() === state.filter.company.toLowerCase()
        );
      }
      if (state.filter.colors.toLowerCase() !== 'all') {
        productList = productList.filter((item) => {
          let filter = item.colors.some(
            (items) => items === state.filter.colors
          );
          if (filter) {
            return item;
          }
          return null;
        });
      }
      if (state.filter.price) {
        productList = productList.filter(
          (item) => item.price > 0 && item.price <= state.filter.price
        );
      }
      if (state.filter.shipping) {
        productList = productList.filter((item) => item.shipping === true);
      }

      if (state.sort === 'Name (A-Z)') {
        productList.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.sort === 'Name (Z-A)') {
        productList.sort((a, b) => b.name.localeCompare(a.name));
      } else if (state.sort === 'Price (Lowest)') {
        productList.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (state.sort === 'Price (Highest)') {
        productList.sort((a, b) => {
          return b.price - a.price;
        });
      }
      return {
        ...state,
        productList: payload,
        featured,
        filteredProduct: productList,
      };
    case 'Filter Product':
      return {
        ...state,
        filter: payload,
      };
    case 'Sort Product':
      return {
        ...state,
        sort: payload,
      };
    default:
      return state;
  }
}
