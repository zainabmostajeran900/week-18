import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Products } from "./pages/Products";
import { ShoppingCard } from "./pages/ShoppingCard";
import { UserInfo } from "./pages/UserInfo";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "shopping-card",
        element: <ShoppingCard />,
      },
      {
        path : "user-info",
        element : <UserInfo/>
      }
    ],
  },
]);

export const Router: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
