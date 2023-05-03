import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main>
            <Outlet/>
            <Sidebar/>
        </main>
    )
}

export default Layout