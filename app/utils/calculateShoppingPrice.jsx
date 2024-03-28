export const calculateShoppingPrice = (cart) => {
  return cart.reduce((pre, cur) => (pre += cur.count * cur.price), 0);
};

export default calculateShoppingPrice;
