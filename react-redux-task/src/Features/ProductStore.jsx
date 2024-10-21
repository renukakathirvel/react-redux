import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
export const ProductStore = configureStore({
  reducer: {
    productReducer: ProductSlice,
  },
});