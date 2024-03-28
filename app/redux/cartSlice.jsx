import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    userId: 1,
    cart: [],
    totalProduct: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      // Product Object
      const { payload } = action;
      const index = state.cart.findIndex((item) => item.id === payload.id);
      const isNotFound = index === -1;
      if (isNotFound) {
        state.cart.push({ ...payload, count: 1 });
      } else {
        state.cart[index].count += 1;
      }
      state.totalProduct += 1;
    },
    decreaseItem: (state, action) => {
      // Id
      const { payload } = action;
      const index = state.cart.findIndex((item) => item.id === payload);
      state.cart[index].count -= 1;
      state.totalProduct -= 1;
    },
    deleteItem: (state, action) => {
      // Id
      const { payload } = action;
      const index = state.cart.findIndex((item) => item.id === payload);
      state.cart.splice(index, 1);
      state.totalProduct -= 1;
    },
    reset: (state) => {
      state.cart.length = 0;
      state.totalProduct = 0;
    },
  },
});

export const { addToCart, decreaseItem, deleteItem, reset } = cartSlice.actions;
export default cartSlice.reducer;
