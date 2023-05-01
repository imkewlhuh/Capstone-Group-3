import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className='home-greeting container'>
            <Sidebar/>
            <Outlet />
            </div>
    )
}

export default Home