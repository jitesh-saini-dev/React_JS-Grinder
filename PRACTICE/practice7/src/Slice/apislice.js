import { createSlice } from "@reduxjs/toolkit";

const apislice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },
  reducers: {
    prod: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { prod } = apislice.actions;
export default apislice.reducer;
