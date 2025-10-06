import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Wishlist from "../Pages/Wishlist";
import Cart from "../Pages/Cart";
import axios from "axios";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading....</p>,
    loader: async () => {
      const res = await axios.get("../furniture.json");
      console.log(res.data);
      return res.data;
    },
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/wishlist",
        Component: Wishlist,
      },
      {
        path: "/cart",
        Component: Cart,
      },
    ],
  },
]);
export default router;
