import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchdata = createAsyncThunk(
  "product/productdetails",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  },
);

const productslice = createSlice({
  name: "product",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchdata.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchdata.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default productslice.reducer;
