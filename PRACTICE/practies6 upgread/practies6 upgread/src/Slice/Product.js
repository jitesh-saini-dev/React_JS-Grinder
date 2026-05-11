import { createSlice } from "@reduxjs/toolkit";

export const Product = createSlice({
  name: "products",

  initialState: {
    users: [],
    products: [],
    loading: false,
  },

  reducers: {
    // USERS
    setUsers: (state, action) => {
      state.users = action.payload;
    },

    // PRODUCTS
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    // LOADING
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUsers, setProducts, setLoading } = Product.actions;

export default Product.reducer;
