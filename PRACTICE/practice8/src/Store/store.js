import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/signupSlice";
import prodReducer from "../Slice/productslice";
import formReducer from "../Slice/formSlice";

export const store = configureStore({
  reducer: {
    //slice
    signup: authReducer,
    products: prodReducer,
    form: formReducer,
  },
});
