import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    title: "",
    price: "",
    description: "",
    category: "",
  },

  reducers: {
    updateFormData: (state, action) => {
      //   const { name, value } = action.payload;
      //   state[name] = value;
      // ye bhi kr skte h ------

      state[action.payload.name] = action.payload.value;
    },

    resetForm: (state) => {
      state.title = "";
      state.price = "";
      state.description = "";
      state.category = "";
    },
  },
});

export const { updateFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
