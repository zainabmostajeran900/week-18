import { MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { cardAction } from "../redux/features/cardSlice";
import { Rating } from "../components/Rating";

export const ShoppingCard: React.FC = () => {
  const cardList = useAppSelector((state) => state.card);
  const dispatch = useAppDispatch();
  const removeProduct = (id: number) => {
    dispatch(cardAction.removeOfCard(id));
  };
  const changeQuantity = (qty: string, id: number) => {
    dispatch(cardAction.changeQuantity({ qty: Number(qty), id }));
  };
  return (
    <div className="grid gap-y-4 px-4 py-4 m-1 right-0 border bg-white rounded-md ">
      {cardList.list.map((product) => {
        return (
          <div
            key={product.id}
            className={`flex flex-col sm:flex-row gap-y-2 gap-x-4 sm:gap-x-6 items-center pb-4 border-b ${
              cardList.list.length - 1 === cardList.list.indexOf(product) &&
              "border-b-0 pb-0"
            }`}
          >
            {/* images not load */}
            {/* <img src={images[0]} alt="pic" /> */}
            <img className="w-full sm:w-28" src="lake-Montain.jpg" alt="" />
            <h2 className="text-sm font-semibold w-full sm:w-3/6">
              {product.title}
            </h2>
            <div className="flex flex-wrap gap-x-1 items-center w-full sm:w-2/6">
              <p>{product.rate}</p>
              {<Rating rate={Math.round(product.rate)} />}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 w-full items-center">
              <select
                onChange={(e) => changeQuantity(e.target.value, product.id)}
                name="qty"
                id=""
                value={product.qty}
                className="px-5 py-1 border rounded-sm"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <p className="font font-semibold xs:w-1/6 min-w-16">
                ${product.price}
              </p>
              <button onClick={() => removeProduct(product.id)}>
                <MdDelete className="size-8" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
