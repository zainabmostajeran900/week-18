import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/header/Header";
import { ProductsSide } from "../components/side/ProductsSide";
import { ShoppingSlide } from "../components/side/ShoppingSide";
export interface IButton {
  text: string;
  page : string;
}
export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Header />
      <div className=" flex gap-x-2 sm:gap-x-4 max-w-[1600px] mx-auto">
        {pathname === "/" && (
          <div className="w-4/12 max-w-60 relative pt-28 xs:pt-20">
            <ProductsSide />
          </div>
        )}
        {pathname === "/shopping-card" && (
          <div className="w-4/12 max-w-60 relative pt-20">
            <ShoppingSlide text="Completion of Information" page="/user-info"/>
          </div>
        )}
        {pathname === "/user-info" && (
          <div className="w-4/12 max-w-60 relative pt-20">
            <ShoppingSlide text="Back to Card" page="/shopping-card"/>
          </div>
        )}

        <div className={`w-10/12 xs:pt-20 ${pathname === "/" ? "pt-28" : "pt-20"}`}>

          <Outlet />
        </div>
      </div>
    </div>
  );
};
