import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fetchuser", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return await res.data;
});

const productslice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
  },
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
  },
});

export default productslice.reducer;
