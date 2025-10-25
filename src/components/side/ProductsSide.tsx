import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Sort } from "../../redux/features/productSlice";
import { Rating } from "../Rating";
import { filterAction } from "../../redux/features/filterSlice";

export const ProductsSide: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filter);
  const outOfStockChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(filterAction.setOutOfStock(e.target.checked));
  };
  const shipsOvernightChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    dispatch(filterAction.setShipsOverNight(e.target.checked));
  };
  const sortChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(filterAction.setSorting(e.target.value as Sort));
  };
  const rateChange = (rate: number) => {
    dispatch(filterAction.setRate(rate));
  };
  const clearFilters = () => {
    dispatch(filterAction.clearAllFilters());
  };

  return (
    <>
      <div
        className="flex flex-col gap-y-6 bg-appGray text-white h-[calc(100vh-86px)] rounded-md  p-4 sm:p-4 w-full sticky top-28 xs:top-20 max-h-[810px]"
      >
        <h2 className="text-2xl pb-2 flex-shrink">
          Filter Products
        </h2>
        <div className="flex items-center ">
          <input
            onChange={sortChange}
            type="radio"
            value="ascending"
            name="sort"
            id="asSort"
            checked={filters.sort === "ascending"}
          />
          <label htmlFor="asSort" className="pl-2 text-base">
            Ascending
          </label>
        </div>
        <div className="flex items-center ">
          <input
            onChange={sortChange}
            type="radio"
            value="descending"
            name="sort"
            id="desSort"
            checked={filters.sort === "descending"}
          />
          <label htmlFor="desSort" className="pl-2 text-base">
            Descending
          </label>
        </div>
        <div className="flex items-center">
          <input
            onChange={outOfStockChange}
            type="checkbox"
            name="sort"
            id="stock"
            checked={filters.outOfStock}
          />
          <label htmlFor="stock" className="pl-2 text-base">
            Include Out of Stock
          </label>
        </div>
        <div className="flex items-center">
          <input
            onChange={shipsOvernightChange}
            type="checkbox"
            name="fastDel"
            id="fastDel"
            checked={filters.shipsOvernight}
          />
          <label htmlFor="fastDel" className="pl-2 text-base">
            Ships overnight
          </label>
        </div>
        <Rating rateChange={rateChange} rate={filters.rate} />
        <button
          onClick={clearFilters}
          className="w-full bg-white text-black font-bold py-2 rounded-md hover:bg-gray-300"
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};
