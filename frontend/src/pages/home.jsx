import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div div className='home-greeting'>
            <Sidebar/>
            <h1>Welcome!</h1>
            <Outlet/>
            </div>
    )
}

export default Home