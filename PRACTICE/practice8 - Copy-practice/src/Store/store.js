import { configureStore } from "@reduxjs/toolkit";
import ProdReducer from "../Slice/productslice";
import cartReducer from "../Slice/cartslice";
import authReducer from "../Slice/authSlice";

export const store = configureStore({
  reducer: {
    prods: ProdReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});
