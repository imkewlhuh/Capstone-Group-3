import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../css/App.css";
//Add your imports from "/pages" below this line
import Layout from './pages/layout';
import Home from './pages/home';
import LoginPage from './pages/LoginPage.jsx';
import DashBoard from './pages/dashboard';
import Inventory from './pages/inventory';
import data from './Data/Data';
import Products from './components/Products';
import Teams from './components/Teams';
import Sustainability from './pages/sustainability';
import HelpCenter from './pages/HelpCenter';
import Settings from './pages/Settings';
import AuthLayout from "./pages/signUp";
import UserField from "./components/signup-fields/userField";
import BusinessField from "./components/signup-fields/businessField";
import InventoryField from "./components/signup-fields/inventoryField"
import TeamField from "./components/signup-fields/teamField";
import { fetchProductListTypes } from "./actions/products";
import { getAllItemLists } from "./api/itemList";
import { getAllItems } from "./api/item";

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
        loader: async () => {

          return await getAllItemLists();
        },
      },
      {
        path: "inventory/:listId/products",
        element: <Products productItems={data.productItems} />,
        loader: async function({params}){
        return  await getAllItems(params.listId)
        }
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
        element: <Settings />,
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
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        children: [
          {
            path: "",
            element: <UserField />,
          },
          {
            path: "business",
            element: <BusinessField />,
          },
          {
            path: "business/form",
            element: <h1></h1>
          },
          {
            path: "inventory",
            element: <InventoryField />,
          },
          {
            path: "team",
            element: <TeamField />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
