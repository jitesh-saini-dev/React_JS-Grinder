import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "../Slice/Product";
import cartReducer from "../Slice/cartSlice";
import recipeReducer from "../Slice/recipeSlice";
import orderReducer from "../Slice/orderSlice";
import wishlistReducer from "../Slice/wishlistSlice";
import postReducer from "../Slice/postSlice";
import userReducer from "../Slice/userSlice";
import authReducer from "../Slice/authSlice";

export const Store = configureStore({
  reducer: {
    products: ProductReducer,

    cart: cartReducer,

    recipe: recipeReducer,

    orders: orderReducer,

    wishlist: wishlistReducer,

    post: postReducer,

    user: userReducer,

    auth: authReducer,
  },
});
