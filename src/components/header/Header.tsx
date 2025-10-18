import { FaBasketShopping, FaCaretDown } from "react-icons/fa6";
import { useState } from "react";
import { Popup } from "./Popup";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useAppSelector } from "../../redux/hooks";
import { Input } from "./Input";

export const Header: React.FC = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const cardList = useAppSelector((state) => state.card);

  const { pathname } = useLocation();

  const hidePopup = () => {
    setPopup(false);
  };

  return (
    <div className="bg-appGray w-full z-50 fixed">
      <div className="flex flex-wrap gap-1 justify-evenly px-4 sm:px-8 py-3 items-center w-full container mx-auto">
        <Link to={"/"} className="flex gap-x-2 items-center">
          <FaHome className="size-8 fill-white"/>
          <h2 className="text-white text-2xl font-semibold ">Shopping Card</h2>
        </Link>
        <div
          className={`flex ${
            pathname === "/"
              ? "justify-between min-w-[265px] w-1/2"
              : "justify-end sm:w-1/2"
          } shrink gap-x-1 `}
        >
          {pathname === "/" && <Input/>}
          <div className="relative ">
            <button
              onClick={() => setPopup((prev) => !prev)}
              disabled={cardList.list.length === 0 ? true : false}
              className="align-top bg-green-500 rounded-md min-w-[83px] text-base px-2 py-1 text-yellow-50 hover:bg-green-400 font-bold disabled:bg-gray-300"
            >
              <FaBasketShopping className="size-8 inline-block mr-2 fill-yellow-50" />
              {cardList.list.length}
              <FaCaretDown className="size-3 inline-block ml-1 fill-yellow-50" />
            </button>
            {popup && (
              <Popup
                cardList={cardList}
                hidePopup={hidePopup}
                pathName={pathname}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
