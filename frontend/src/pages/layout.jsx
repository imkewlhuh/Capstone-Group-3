import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div div className='container'>
            <Sidebar/>
            <Outlet />
            </div>
    )
}

export default Layout