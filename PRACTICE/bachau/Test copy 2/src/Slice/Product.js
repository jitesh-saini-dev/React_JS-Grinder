import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchproduct = createAsyncThunk(
  "product/fetchproduct", async () => {

    const res = await axios.get("https://dummyjson.com/products")

    return res.data;

  }
)

export const fetchproductByid = createAsyncThunk(
  "product/fetchproductByid", async (id) => {

    const res = await axios.get(`https://dummyjson.com/products/${id}`)

    return res.data;

  }
)

export const Product = createSlice({

  name: "product",
  initialState: {
    Apidata: [],
    singleApiid: {},
    cart:[],
    loading: false
  },

  extraReducers: (builder) => {
    builder.addCase(fetchproduct.pending, (state) => {
      state.loading = true;
    })
      .addCase(fetchproduct.fulfilled, (state, action) => {
        state.loading = false;
        state.Apidata = action.payload.products;
      })
      .addCase(fetchproduct.rejected, (state) => {
        state.loading = false;
      }),// singal id 


      builder.addCase(fetchproductByid.pending, (state) => {
        state.loading = true;
      })
        .addCase(fetchproductByid.fulfilled, (state, action) => {
          state.loading = false;
          state.singleApiid = action.payload;
        })
        .addCase(fetchproductByid.rejected, (state) => {
          state.loading = false;
        })
  }, reducers:{
    addtocart :(state,action) =>{
       state.cart.push(action.payload)
    },
   remove: (state, action) => {

  state.cart = state.cart.filter(
    (item) => item.id !== action.payload
  );

}

  }
})
export const {addtocart,remove}  = Product.actions

export default Product.reducer