import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../css/App.css'
//Add your imports from "/pages" below this line
import Layout from './pages/layout';
import Home from './pages/home';
import SignUp from './pages/signUp';
import LoginPage from './pages/LoginPage.jsx';
import DashBoard from './pages/dashboard';
import Inventory from './pages/inventory';
import data from './Data/Data';
import Products from './components/Products';
import AddNew from './pages/addnew';

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
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/dashboard",
        element: <DashBoard />
      },
      {
        path: "/inventory",
        element: <Inventory />
      },
      {
        path: "inventory/products",
        element: <Products productItems={data.productItems} />
      },
      {
        path: "/orders",
        element: <div>Your Orders</div>
      },
      {
        path: "/suppliers",
        element: <div>Suppliers</div>
      },
      {
        path: "/sustainability",
        element: <div>Sustainability</div>
      },
      {
        path: "/integrations",
        element: <div>Integrations</div>
      },
      {
        path: "/analytics",
        element: <div>Analytics</div>
      },
      {
        path: "/teams",
        element: <div>Teams</div>
      },
      {
        path: "/settings",
        element: <div>Settings</div>
      },
      {
        path: "/help",
        element: <div>Help Center</div>
      },
      {
        path:"/addnew",
        element: <AddNew/>
      }
    ]
  },
  {
    path: "/home",
    element: <Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
