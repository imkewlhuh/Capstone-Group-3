import React from "react";
import "../../css/home.css";
import Button from 'react-bootstrap/Button';


const Home = () => {
    return (
        <div div className='home-greeting'>
            <div className="topnav">
                <div className="topbuttons">
                    <Button variant="primary">Log In</Button>{' '}
                    <Button variant="primary">Sign Up</Button>{' '}
                </div>
            </div>
            <div className="hipanel">
                <h1>Welcome to InventGenie.</h1>
                <h4>AKA. The best way to track your inventory.</h4>
                <div className="hibuttons">
                    <Button variant="primary">Log In</Button>{' '}
                    <Button variant="primary">Sign Up</Button>{' '}
                </div>
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
            </div>
    )
}
export default Home;