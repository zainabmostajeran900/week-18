import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFilterState {
  sort: Sort;
  outOfStock: boolean;
  shipsOvernight: boolean;
  rate: number;
}
export type Sort = "ascending" | "descending" | "";

const initialState: IFilterState = {
  sort: "",
  outOfStock: false,
  shipsOvernight: false,
  rate: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setOutOfStock: (state, action: PayloadAction<boolean>) => {
      state.outOfStock = action.payload;
    },
    setShipsOverNight: (state, action: PayloadAction<boolean>) => {
      state.shipsOvernight = action.payload;
    },
    setSorting: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
    },
    setRate: (state, action: PayloadAction<number>) => {
      state.rate = action.payload;
    },
    clearAllFilters: (state) => {
      (state.sort = ""),
        (state.outOfStock = false),
        (state.shipsOvernight = false),
        (state.rate = 0);
    },
  },
});

export const filterAction = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
