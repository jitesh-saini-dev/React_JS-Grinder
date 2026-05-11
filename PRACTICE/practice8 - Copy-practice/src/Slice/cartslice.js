import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    val: [],
  },
  reducers: {
    addtocart: (state, action) => {
      state.val.push(action.payload);
    },
    removecart: (state, action) => {
      state.val = state.val.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addtocart, removecart } = cartslice.actions;
export default cartslice.reducer;
