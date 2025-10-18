import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { IForm } from "../types/userForm.type";
import { IoInformationCircleSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { cardAction } from "../redux/features/cardSlice";

export const AllInfo: React.FC<{ userInfo: IForm }> = ({ userInfo }) => {
  const cardList = useAppSelector((state) => state.card.list);
  const dispatch = useDispatch();
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-55 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[80%]">
            <div className="bg-appGray px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:flex-col sm:items-center sm:gap-y-5 ">
                <div>
                  <div className="mx-auto flex flex-shrink-0 w-14 h-14 items-center justify-center rounded-full bg-green-300 ">
                    <IoInformationCircleSharp className="size-10 " />
                  </div>
                  <h3
                    className="text-base text-center sm:text-lg font-semibold text-green-300"
                    id="modal-title"
                  >
                    User and Card Information
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full sm:w-5/6 md:items-start">
                  <div className="w-full space-y-3">
                    <div className="flex gap-x-4 text-white">
                      <h4 className="w-32">Firstname:</h4>
                      <p>{userInfo.firstName}</p>
                    </div>
                    <div className="flex gap-x-4 text-white">
                      <h4 className="w-32">Lastname:</h4>
                      <p>{userInfo.lastName}</p>
                    </div>
                    <div className="flex gap-x-4 text-white">
                      <h4 className="w-32">Landline Number:</h4>
                      <p>{userInfo.landline}</p>
                    </div>
                    <div className="flex gap-x-4 text-white">
                      <h4 className="w-32">Phone Number:</h4>
                      <p>{userInfo.phone}</p>
                    </div>
                    <div className="flex gap-x-4 text-white">
                      <h4 className="w-32">Email:</h4>
                      <p>{userInfo.email}</p>
                    </div>
                    <div className="flex gap-x-4 text-white">
                      <h4 className="w-32">Address:</h4>
                      <p>{userInfo.address}</p>
                    </div>
                  </div>
                  <div className="grid gap-y-2 mt-4 lg:mt-0 w-full">
                    {cardList.map((product) => {
                      return (
                        <div
                          key={product.id}
                          className="flex gap-x-2 items-center w-full"
                        >
                          {/* images not load */}
                          {/* <img src={images[0]} alt="pic" /> */}
                          <img
                            className="h-10 w-16"
                            src="lake-Montain.jpg"
                            alt=""
                          />
                          <div className="flex flex-col gap-y-1 text-sm font-semibold 5/6">
                            <h2 >{product.title}</h2>
                            <h2 >{product.price} <span className="ml-4">{product.qty}x</span></h2>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-4 py-3 sm:max-w-[20%] sm:mx-auto sm:px-6">
              <Link to={"/"}>
                <button
                onClick={()=>dispatch(cardAction.removeAll())}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-300"
                >
                  OK
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
