// cart.slice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { item } = action.payload;
      state.items.push(item);
    },
  },
});

export default cartSlice;
