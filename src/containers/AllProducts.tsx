import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../apis/products.api";
import { ProductCard } from "../components/ProductCard";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { productAction } from "../redux/features/productSlice";
import { selectSearchProduct } from "../redux/selectors/selectProducts";

export const AllProducts: React.FC = () => {
  const productState = useAppSelector(selectSearchProduct);
  const dispatch = useAppDispatch();
  const products = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    if (!products.isSuccess || !products.data) return;
    dispatch(productAction.setProducts(products.data.products));
  }, [products.data]);
  return (
    <div>
      {products.isPending && <h2>is loading ...</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between  pl-2">
        {productState.length !== 0 &&
          productState.map((card) => (
            <ProductCard key={card.id} {...card} />
          ))}
      </div>
    </div>
  );
};
