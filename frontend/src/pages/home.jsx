import React from "react";
import "../../css/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const login = () => navigate("../auth/login");
    const signup = () => navigate("../auth/signup");

    return (
        <div div className='home-greeting'>
            <div className="topnav">
                <img style={{ height: "3.5em" }} src="/images/mainLogo.png" />
                <div className="topbuttons">
                    <button onClick={login} className="topbutton">Log In</button>{' '}
                    <button onClick={signup} className="topbutton">Sign Up</button>{' '}
                </div>
            </div>
            <div className="hipanel">
                <img style={{ height: "18em" }} src="/images/mainLogo.png" />
                <div className="hiside">
                    <div>
                        <h1>Welcome to <p style={{ color: "#5EE97D", marginLeft: "0.2em" }}>InventGenie.</p></h1>
                        <h4>AKA. The best way to track your inventory.</h4>
                    </div>
                    <br />
                    <div className="hibuttons">
                        <button onClick={login} className="hibutton">Log In</button>{' '}
                        <button onClick={signup} className="hibutton">Sign Up</button>{' '}
                    </div>
                </div>
            </div>
            <div className="secondpanel">
                <img style={{ height: "18em" }} src="/images/Squares.png" />
                <div className="secondside">
                    <h1 style={{ fontWeight: "700" }}>Add inventory with a few simple clicks.</h1>
                    <p><span style={{ color: "#1DA92B" }}>Add</span> and manage inventory and track products by category, location, and expiration/circulation date. <span style={{ color: "#C176E2" }}>Monitor</span> stock levels, set reorder points, and receive alerts when inventory levels are low. Input information manually or import/export a CSV/data file to <span style={{ color: "#FFC247" }}>save time.</span></p>
                </div>
            </div>
            <div className="thirdpanel">
                <div className="thirdside">
                    <h1>Get real time analytics on your stock levels and sales.</h1>
                    <p>Valuable insights into <span style={{ color: "#198754" }}>inventory performance;</span> CTAs for sales trends, inventory turnover, and product performance. Utilize insights to make <span style={{ color: "#032BFF" }}>data driven decisions.</span> <span style={{ color: "#9B51E0" }}>Optimize</span> your inventory management process, by adjusting stock levels and identifying slow moving products. </p>
                </div>
                <img style={{ height: "13em" }} src="/images/Graph.png" />
            </div>
            <div className="fourthpanel">
                <img style={{ height: "17em" }} src="/images/recycle.png" />
                <div className="fourthside">
                    <h1>Reduce waste. Source sustainably.</h1>
                    <p>Reduce your business’s carbon footprint by sourcing through <span style={{ color: "#DA9554" }}>sustainable suppliers.</span> Donate your low-selling inventory surplus to make a <span style={{ color: "#8A95FF" }}>positive impact</span> on the world and do good for your business and community. This <span style={{ color: "#64B31F" }}>reduces waste</span>, frees up storage space, makes a difference in people's lives, and <span style={{ color: "#C45AFE" }}>earns you tax deductions.</span></p>
                </div>
            </div>
            <div className="finalpanel">
                <div className="finalside">
                    <h1 style={{fontWeight: "700"}}>Stay updated, set alerts,<br/> and keep track of expiration dates.</h1>
                    <p><span style={{color: "#9B51E0"}}>Track</span> your inventory through our analytics. Restock when stock levels are low and find alternatives for distributing or <span style={{color: "#4B3DEF"}}>repurposing</span> underperforming stocks.</p>
                </div>
                <img style={{height: "13em"}} src="/images/Clock.png" />
            </div>
        </div>
    )
}
export default Home;