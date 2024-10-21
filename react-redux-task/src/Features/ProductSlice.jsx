import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

const ProductSlice = createSlice({
  name: "Cart Products",
  initialState: { productData: data },
  reducers: {
    IncreaseQuantity: (state, action) => {
      const { proId: id, proQua: qua } = action.payload;

      state.productData = state.productData.map((cart) => {
        if (cart.id === id && (cart.quantity || qua) < cart.stock) {
          return { ...cart, quantity: (cart.quantity || qua) + 1 };
        } else {
          return cart;
        }
      });
    },
    DecreaseQuantity: (state, action) => {
      const { proId: id, proQua: qua } = action.payload;

      state.productData = state.productData.map((cart) => {
        if (cart.id === id && (cart.quantity || qua) > 0) {
          return { ...cart, quantity: (cart.quantity || qua) - 1 };
        } else {
          return cart;
        }
      });
    },
    RemoveCart: (state, action) => {
      state.productData = state.productData.filter(
        (cart) => cart.id !== action.payload
      );
    },
  },
});
export const { IncreaseQuantity, DecreaseQuantity, RemoveCart } =
  ProductSlice.actions;
export default ProductSlice.reducer;