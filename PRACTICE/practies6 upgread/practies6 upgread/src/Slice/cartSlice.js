import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // ADD CART
    addCart: (state, action) => {
      const exist = state.cart.find((x) => x.id === action.payload.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // REMOVE CART
    removeCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload);
    },

    // CLEAR CART
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addCart, removeCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
