import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../../types/products.type";

export interface IProductState {
  list: IProducts[];
  searchValue: string;
}
export type Sort = "ascending" | "descending" | "";

const initialState: IProductState = {
  list: [],
  searchValue: "",
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProducts[]>) => {
      state.list = [...action.payload];
    },
    searchProduct: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    }
  },
});

export const productAction = ProductSlice.actions;
export const productReducer = ProductSlice.reducer;
