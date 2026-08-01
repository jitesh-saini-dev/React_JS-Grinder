import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",

  initialState,

  reducers: {
    // ADD ORDER
    addOrder: (state, action) => {
      const exist = state.orders.find((x) => x.id === action.payload.id);

      if (!exist) {
        state.orders.push(action.payload);
      }
    },

    // CLEAR ORDER
    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

export const { addOrder, clearOrders } = orderSlice.actions;

export default orderSlice.reducer;
