import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
    useEffect(() => {
        const darkMode = sessionStorage.getItem("darkMode");

        if (darkMode) {
            document.querySelector("body").classList.add("dark");
        } else {
            document.querySelector("body").classList.remove("dark");
        }
    }, [])

    return (
        <div className='container'>
            <Sidebar/>
            <Outlet />
            </div>
    )
};

export default Layout;