import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import historySlice from "./historySlice";
import currentRestaurantSlice from "./currentRestaurantSlice";

export const store = configureStore({
  reducer: {
    currentRestaurant: currentRestaurantSlice,
    cart: cartSlice,
    history: historySlice,
  },
});
