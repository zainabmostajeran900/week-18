import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/header/Header";
import { ProductsSide } from "../components/side/ProductsSide";
import { ShoppingSlide } from "../components/side/ShoppingSide";

export interface IButton {
  text: string;
  page: string;
}

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* هدر */}
      <Header />

      <div className="flex flex-col sm:flex-row max-w-[1600px] mx-auto w-full px-6 sm:px-6 lg:px-8 pt-24 sm:pt-28 gap-6">
        {/* ✅ در دسکتاپ: فیلتر در ساید چپ */}
        {pathname === "/" && (
          <aside className="hidden sm:block sm:w-4/12 sm:max-w-[300px]">
            <ProductsSide />
          </aside>
        )}

        {pathname === "/shopping-card" && (
          <aside className="hidden sm:block sm:w-4/12 sm:max-w-[300px]">
            <ShoppingSlide text="Completion of Information" page="/user-info" />
          </aside>
        )}

        {pathname === "/user-info" && (
          <aside className="hidden sm:block sm:w-4/12 sm:max-w-[300px]">
            <ShoppingSlide text="Back to Card" page="/shopping-card" />
          </aside>
        )}

        {/* محتوای اصلی */}
        <main className="flex-1 w-full mx-auto">
          {/* ✅ فقط در موبایل: فیلتر در بالا */}
          {pathname === "/" && (
            <div className="block mt-5 sm:hidden mb-4">
              <ProductsSide />
            </div>
          )}

          {/* Outlet برای محتوای اصلی */}
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
