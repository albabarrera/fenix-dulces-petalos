import React from "react";
import ReactDOM from "react-dom/client";
import "../src/ui/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import ErrorPage from "./ui/views/error-page.tsx";
import Product from "./routes/product.tsx";
import { Header } from "./ui/components/Header/Header.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "product/:name",
    element: (
      <>
        <Header />
        <Product />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
