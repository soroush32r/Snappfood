import { createSlice } from "@reduxjs/toolkit";
import { store } from "./store";

const currentRestaurantSlice = createSlice({
  name: "currentRestaurant",
  initialState: {
    userId: 1,
    id: 0,
    name: "",
    background: "",
    rate: "",
    category: "",
    logo: "",
  },
  reducers: {
    addRestaurant: (state, action) => {
      const { payload } = action;
      const { id, name, background, rate, category, logo } = payload;
      console.log("sad", name);
      state.id = id;
      state.name = name;
      state.background = background;
      state.rate = rate;
      state.category = category;
      state.logo = logo;
    },
  },
});

export const { addRestaurant } = currentRestaurantSlice.actions;
export default currentRestaurantSlice.reducer;
