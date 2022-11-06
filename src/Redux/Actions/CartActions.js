export const AddCart = (payload) => {
  return {
    type: 'Add Cart',
    payload,
  };
};

export const UpdateOrder = (payload) => {
  return {
    type: 'Update Order',
    payload,
  };
};

export const DeleteOrder = (payload) => {
  return {
    type: 'Delete Order',
    payload,
  };
};

export const ClearOrder = () => {
  return {
    type: 'Clear Order',
  };
};
