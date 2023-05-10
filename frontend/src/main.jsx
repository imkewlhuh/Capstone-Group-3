import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../css/App.css";
//Add your imports from "/pages" below this line
import Layout from "./pages/layout";
import Home from "./pages/home";
import AuthLayout from "./pages/signUp";
import LoginPage from "./pages/LoginPage.jsx";
import DashBoard from "./pages/dashboard";
import Inventory from "./pages/inventory";
import data from "./Data/Data";
import Products from "./components/Products";
import Teams from "./components/Teams";
import Sustainability from "./pages/sustainability";
import HelpCenter from "./pages/HelpCenter";
import UserField from "./components/userField";
import BusinessField from "./components/businessField";
import TeamField from "./components/teamField";
import InventoryField from "./components/inventoryField";

//Creating Router instance
const router = createBrowserRouter([
  {
    //Landing page/Home page
    path: "/",
    element: <Layout />,
    children: [
      //Rest of pages belong here, when you finish making a page
      //add a new object with url in path and imported page in element
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "inventory/products",
        element: <Products productItems={data.productItems} />,
      },
      {
        path: "/orders",
        element: <div>Your Orders</div>,
      },
      {
        path: "/suppliers",
        element: <div>Suppliers</div>,
      },
      {
        path: "/sustainability",
        element: <Sustainability />,
      },
      {
        path: "/integrations",
        element: <div>Integrations</div>,
      },
      {
        path: "/analytics",
        element: <div>Analytics</div>,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/settings",
        element: <div>Settings</div>,
      },
      {
        path: "/help",
        element: <HelpCenter />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/signup",
        element: <UserField />,
      },
      {
        path: "/auth/business",
        element: <BusinessField />,
      },
      {
        path: "/auth/inventory",
        element: <InventoryField />,
      },
      {
        path: "/auth/team",
        element: <TeamField />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
