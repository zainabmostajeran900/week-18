import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { cardAction, ICardState } from "../../redux/features/cardSlice";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export const Popup: React.FC<
  { cardList: ICardState } & { hidePopup: () => void , pathName : string}
> = ({ cardList, hidePopup ,pathName}) => {
  const dispatch = useAppDispatch();
  const removeProduct = (id: number) => {
    dispatch(cardAction.removeOfCard(id));
  };

  useEffect(() => {
    if (cardList.list.length === 0) hidePopup();
  }, [cardList]);
  return (
    <div className="absolute grid gap-y-2 px-4 py-2 mt-1 right-0 min-w-[276px] max-h-[calc(100vh_-_500px)] overflow-y-auto border bg-white rounded-md ">
      {cardList.list.map((product) => {
        return (
          <div key={product.id} className="flex gap-x-2 items-center">
            {/* images not load */}
            {/* <img src={images[0]} alt="pic" /> */}
            <img className="h-10 w-16" src="lake-Montain.jpg" alt="" />
            <div className="flex flex-col gap-y-1 text-sm font-semibold w-3/6">
              <h2 className="truncate max-w-32">{product.title}</h2>
              <h2>{product.price}</h2>
            </div>
            <button onClick={() => removeProduct(product.id)}>
              <MdDelete className="size-8" />
            </button>
          </div>
        );
      })}
{
  pathName !== "/shopping-card" &&       <Link to={"/shopping-card"}>
  <button onClick={hidePopup} className="w-full bg-blue-500 px-2 py-1 rounded-md text-white">
    Go to Card
  </button>

      </Link>
      }
    </div>
  );
};
