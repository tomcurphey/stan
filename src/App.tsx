import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home, NotFound, Program } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/:id", element: <Program /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
