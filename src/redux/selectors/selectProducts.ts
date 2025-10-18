import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectproduct = (state: RootState) => state.product;
const selectFilter = (state: RootState) => state.filter;
export const selectSearchProduct = createSelector(
  [selectproduct, selectFilter],
  (product, filter) => {
    let result = product.list.filter((el) => {
      let oneResult = el.title
        .toLowerCase()
        .includes(product.searchValue.toLowerCase());
      if (oneResult && !filter.outOfStock)
        oneResult = el.availabilityStatus !== "Out of Stock";
      if (oneResult && filter.shipsOvernight)
        oneResult = el.shippingInformation === "Ships overnight";
      if (oneResult && filter.rate !== 0)
        oneResult = Math.round(el.rating) === filter.rate;
      return oneResult;
    });

    if (filter.sort !== "")
      result =
        filter.sort === "ascending"
          ? result.sort((el1, el2) => el1.title.localeCompare(el2.title))
          : result.sort((el1, el2) => el2.title.localeCompare(el1.title));
    return result;
  }
);
