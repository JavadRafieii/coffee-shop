import Theme from "./theme/Theme";
import HomePage from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:productId",
    element: <SingleProduct />,
  },
]);


export default function App() {
  return (
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  );
};