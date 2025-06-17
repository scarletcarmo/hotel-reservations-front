import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { Outlet, Link } from "react-router-dom";


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
      /*{
        path: "rooms/:id",
        element: <Show />,
        loader: async ({ params }) => {
          return db.loadShow(params.id!);
        },
      },*/
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

