import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectCard = (state: RootState) => state.card;
export const selectIdOfCard = createSelector(selectCard, (card) => {return card.list.map((el) => el.id)});


