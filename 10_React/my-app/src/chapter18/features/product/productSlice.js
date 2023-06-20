import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // 구조분해할당해서 action 안 쓰고 별칭까지 붙여서 씀
    addproduct: (state, { payload: proDuct }) => {
      state.value.push(proDuct)

      console.log(action);
    },
  }
});


export const { addproduct } = productSlice.actions;

export const selectProductList = (state) => state.proDuct.value;

export default productSlice.reducer;