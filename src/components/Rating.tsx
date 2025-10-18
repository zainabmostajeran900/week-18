import { IoStar, IoStarOutline } from "react-icons/io5";

export const Rating: React.FC<{
  rateChange?: (e: number) => void;
  rate: number;
}> = ({ rateChange, rate }) => {
  return (
    <div className="flex flex-wrap gap-x-2">
      <p className={`text-xs sm:text-base ${!rateChange && "hidden"}`}>Rating:</p>
      <div className="flex gap-x-1">
        {[1, 2, 3, 4, 5].slice(0, rate).map((el) => (
          <button key={el} onClick={rateChange ? () => rateChange(el) : undefined}>
            <IoStar />
          </button>
        ))}
        {[1, 2, 3, 4, 5].slice(rate, 5).map((el) => (
          <button key={el} onClick={rateChange ? () => rateChange(el) : undefined}>
            <IoStarOutline />
          </button>
        ))}
      </div>
    </div>
  );
};
