import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { IButton } from "../../layout/MainLayout";

export const ShoppingSlide: React.FC<IButton> = ({ page, text }) => {
  const cardList = useAppSelector((state) => state.card);
  return (
    <div
      className="
    flex flex-col gap-y-6 bg-appGray text-white h-auto rounded-md ml-2 p-2 sm:p-4 w-full sticky top-20 max-h-[810px]"
    >
      <h2 className="font-semibold text-lg sm:text-xl">
        Total {cardList.list.reduce((acc, item) => (acc += item.qty), 0)} items
        <span className="text-sm sm:text-base">
        : {cardList.list.length} types of products
        </span>
      </h2>
      <p className="sm:text-lg font-semibold">
        Total Price :{" "}
        <span>
          {Math.round(
            cardList.list.reduce((acc, item) => (acc += item.total), 0) * 100
          ) / 100}
        </span>
      </p>
      <Link to={page}>
        <button
          className="w-full bg-blue-400 font-semibold py-2 rounded-md hover:bg-blue-300 disabled:bg-gray-300"
          disabled={cardList.list.length === 0}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};
