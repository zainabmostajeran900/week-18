import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./features/cardSlice";
import { productReducer } from "./features/productSlice";
import { filterReducer } from "./features/filterSlice";

export const reduxStore = configureStore({
  reducer: {
    card: cardReducer,
    product: productReducer,
    filter: filterReducer,
  },
});
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
