// product: https://course-api.com/react-store-products
// single: https://course-api.com/react-store-single-product?id=
let url = 'https://course-api.com/react-store-products';

export const getProductList = (payload) => {
  return {
    type: 'Get Product List',
    payload,
  };
};

export const getProductApi = async (dispatch) => {
  let rawData = await window.fetch(url);
  let data = await rawData.json();
  return dispatch(getProductList(data));
};
