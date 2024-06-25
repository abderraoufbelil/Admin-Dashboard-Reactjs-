import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/invoices",
    element: <App />,
  },
  {
    path: "/goals",
    element: <App />,
  },
  {
    path: "/transactions",
    element: <App />,
  },
  {
    path: "/overview",
    element: <App />,
  },
  {
    path: "/settings",
    element: <App />,
  },
  {
    path: "/cards",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
