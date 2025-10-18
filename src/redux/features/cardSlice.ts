import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICardList } from "../../types/card.type";

export interface ICardState {
  list: ICardList[];
}

const initialState: ICardState = {
  list: [],
};
export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action: PayloadAction<ICardList>) => {
      state.list.push(action.payload);
    },
    removeOfCard: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(
        (product) => product.id !== action.payload
      );
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ qty: number; id: number }>
    ) => {
      state.list = state.list.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.qty,total: item.price * action.payload.qty }
          : item
      );
    },
    removeAll : (state)=>{
      state.list = []
    }
  },
});
export const cardAction = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
