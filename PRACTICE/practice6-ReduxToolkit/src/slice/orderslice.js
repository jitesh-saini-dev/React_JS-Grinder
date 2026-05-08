import { createSlice } from "@reduxjs/toolkit";

export const orderslice = createSlice({
  name: "orders",

  initialState: {
    orders: [],
  },

  reducers: {
    placeOrder: (state, action) => {
      const user = JSON.parse(localStorage.getItem("user"));
      const newOrder = {
        id: Date.now(),
        name: user?.username || "Unknown",
        products: action.payload, // ✅ products array andar
      };
      state.orders.push(newOrder); // ✅ object push ho raha hai
    },
    removeProduct: (state, action) => {
      const { orderId, productId } = action.payload;
      const order = state.orders.find((o) => o.id === orderId);
      if (order) {
        order.products = order.products.filter((p) => p.id !== productId);
      }
    },
  },
});

export const { placeOrder, removeProduct } = orderslice.actions;

export default orderslice.reducer;
