import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fetchuser", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

export const fetchUserById = createAsyncThunk(
  "user/fetchuserbyid",
  async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  },
);

const productslice = createSlice({
  name: "products",
  initialState: {
    data: [],
    singleid: {},
    loading: false,
  },
  reducers: {
    addProduct: (state, action) => {
      state.data.push(action.payload);
    },
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

    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleid = action.payload;
      })
      .addCase(fetchUserById.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addProduct } = productslice.actions;
export default productslice.reducer;
