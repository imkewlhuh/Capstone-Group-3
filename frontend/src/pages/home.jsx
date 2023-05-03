import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import "../../css/home.css";


const Home = () => {
    return (
        <div div className='home-greeting'>
            <div className="topnav">
                <button id="loginbutton">Log in</button>
                <button id="signupbutton">Sign Up</button>
            </div>
            <div className="hipanel">
                <h1>Welcome to undecided.</h1>
                <h4>AKA. The best way to track your inventory.</h4>
                <p1>
                <button id="login2">Log in</button>
                <button id="signup2">Sign up</button>
                </p1>
            </div>
            <div className="secondpanel">
                <h1>Add inventory with a few simple clicks.</h1>
                <p>description</p>
            </div>
            <div className="thirdpanel">
                <h1>Get real time analytics on your stock levels and sales.</h1>
                <p1>description</p1>
            </div>
            <div className="fourthpanel">
                <h1>Reduce waste. Source sustainably.</h1>
                <p1>Description</p1>
            </div>
            <div className="finalpanel">
                <h1>Stay updated, set alerts, and keep track of expiration dates.</h1>
                <p1>Description</p1>
            </div>
        <div className='home-greeting container'>
            <Sidebar/>
            <Outlet />
            </div>
            
    )
}

export default Home