import axios from "axios";
import { IProducts } from "../types/products.type";
interface IResDto {
    total: number;
    skip: number;
    limit: number;
}
interface IResProductsDto extends IResDto {
 products : IProducts[]
}
const url = "https://dummyjson.com/products";
export const fetchProducts = async () => {
  const response = await axios.get<IResProductsDto>(url,{params : {skip : 100 , limit :94}});
  return response.data;
};
