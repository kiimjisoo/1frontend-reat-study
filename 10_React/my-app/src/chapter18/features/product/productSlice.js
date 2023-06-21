import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToProductList: (state, { payload: product }) => {
      // state.productList.push(action.payload);
      state.productList.push(product);
    }
  },
});

export const { addToProductList } = productSlice.actions;

export const selectProductList = (state) => state.product.productList;

export default productSlice.reducer;