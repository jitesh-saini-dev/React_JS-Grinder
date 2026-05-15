import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchdata = createAsyncThunk(
  "recipes/recipesdetails",
  async () => {
    const res = await axios.get("https://dummyjson.com/recipes");
    return res.data;
  },
);

const menuslice = createSlice({
  name: "menu",
  initialState: {
    data: [],
    loading: false,
  },

  reducers: {},

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

export default menuslice.reducer;
