import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
  name: "cartitems",
  initialState: {
    cart: [],
    loading: false,
  },
  reducers: {
    setcart: (state, action) => {
      state.cart = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { setcart, setLoading } = cartslice.actions;
export default cartslice.reducer;
