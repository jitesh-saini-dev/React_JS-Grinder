import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Slice/productslice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
export default store;
