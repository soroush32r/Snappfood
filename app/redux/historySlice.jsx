import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: [
    {
      userId: 1,
      historyCart: [],
    },
  ],
  reducers: {
    addToHistory: (state, action) => {
      const { payload } = action;
      const { items, restaurant, date, totalPrice, userId } = payload;
      const index = state.findIndex((user) => user.userId === userId);
      state[index].historyCart.push({
        id: Math.floor(Math.random() * 1000),
        items,
        restaurant,
        date,
        totalPrice,
        status: "در حال پردازش",
      });
    },
  },
});

export const { addToHistory } = historySlice.actions;
export default historySlice.reducer;
