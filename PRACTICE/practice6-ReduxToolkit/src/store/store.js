import { configureStore } from "@reduxjs/toolkit";
import themeslice from "../slice/themeslice";
import homeslice from "../slice/homeslice";
import cartslice from "../slice/cartslice";
import orderslice from "../slice/orderslice";
import wishlistslice from "../slice/wishlistslice";
import recipeslice from "../slice/recipeslice";

export const store = configureStore({
  reducer: {
    theme: themeslice,
    homeusers: homeslice,
    cartitems: cartslice,
    orders: orderslice,
    wishlist: wishlistslice,
    recipes: recipeslice,
  },
});
