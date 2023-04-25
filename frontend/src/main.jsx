import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//Add your imports from "/pages" below this line
import Home from './pages/home';
import SignUp from './pages/signUp';

//Creating Router instance
const router = createBrowserRouter([
  {
    //Landing page/Home page
    path: "/",
    element: <Home />,
    children: [
      //Rest of pages belong here, when you finish making a page
      //add a new object with url in path and imported page in element
      {
        path: "/login",
        element: <div>This is the Login Page</div>
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/dashboard",
        element: <div>Company Dashboard</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
