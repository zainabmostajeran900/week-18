import { useAppSelector } from "../../redux/hooks";
import { selectIdOfCard } from "../../redux/selectors/selectIdOfCard";

interface IClickButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  add: () => void;
  remove: () => void;
  idProduct: number;
}
export const Button: React.FC<IClickButton> = ({
  add,
  remove,
  idProduct,
  className,
  ...props
}) => {
  const cardListId: number[] = useAppSelector(selectIdOfCard);

  const changeButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (!cardListId.includes(idProduct)) {
      add();
    } else remove();
  };
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md my-2 text-white ${
        className ? className : ""
      } ${!cardListId.includes(idProduct) ? "bg-blue-500" : "bg-red-500"}`}
      onClick={changeButton}
    >
      {!cardListId.includes(idProduct) ? " Add to Card " : "Remove from Card"}
    </button>
  );
};
