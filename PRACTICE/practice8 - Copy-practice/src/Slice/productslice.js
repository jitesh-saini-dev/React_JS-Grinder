import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "products/productsdetails",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  },
);
export const fetchUserById = createAsyncThunk(
  "products/productsdetailsById",
  async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  },
);

const productslice = createSlice({
  name: "prods",
  initialState: {
    data: [],
    singledata: {},
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.singledata = action.payload;
      })
      .addCase(fetchUserById.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default productslice.reducer;
