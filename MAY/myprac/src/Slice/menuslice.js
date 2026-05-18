import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchdata = createAsyncThunk(
  "recipes/recipesdetails",
  async () => {
    const res = await axios.get("https://dummyjson.com/recipes");
    return res.data;
  },
);

export const fetchdataById = createAsyncThunk(
  "recipes/recipesdetailsbyid",
  async (id) => {
    const res = await axios.get(`https://dummyjson.com/recipes/${id}`);
    return res.data;
  },
);

const menuslice = createSlice({
  name: "menu",
  initialState: {
    data: [],
    singleid: [],
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

    builder
      .addCase(fetchdataById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchdataById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleid = action.payload;
      })
      .addCase(fetchdataById.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default menuslice.reducer;
