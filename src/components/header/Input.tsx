import { productAction } from "../../redux/features/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const Input: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state)=>state.product.searchValue)
  const searchProducts: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(productAction.searchProduct(e.target.value));
  };
  return (
    <input
      value={searchValue}
      onChange={searchProducts}
      className="px-2 py-2 grow max-w-96 rounded-md focus:outline-blue-500 focus:outline focus:outline-2"
      type="text"
      placeholder="Search a product"
    />
  );
};
