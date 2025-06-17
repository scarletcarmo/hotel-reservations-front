import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Building from "../pages/Building";
import Reservations from "../pages/Reservations";
import Oferts from "../pages/Offerts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/building",
        element: <Building />,
      },
      {
        path: "/reservations",
        element: <Reservations />,
      },
      {
        path: "/offers",
        element: <Oferts />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
