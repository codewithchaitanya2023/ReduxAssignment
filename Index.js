//code for add item to cart
export const addcart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//code for delete item from cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
