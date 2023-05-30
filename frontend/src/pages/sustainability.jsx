import "../../css/sustain.css";

export default function Sustainability(props) {
    let itemSKU = "BD-76854335";

    return (
        <div className="sustain">

            {/*Header*/}
            <header className="sustainHeader">
                <h2>Sustainability</h2>
                <div className="user">
                    <i className="bi bi-bell bell"></i>
                    <i className="bi bi-search magnify"></i>
                    <i className="bi bi-person-circle avatar"></i>
                </div>
            </header>


            {/*Banner*/}
            <div className="sustainBanner">
                <div className="titles">
                    <h1>Reduce waste.</h1>
                    <h1>Source sustainably.</h1>
                    <h1>Track your inventory.</h1>
                </div>

                <img className="recycleImg" src="/images/recycle.png" />
            </div>


            {/* Card Alerts */}
            <div className="cardAlerts">

                <div className="card-alert stocks">
                    <h5>Low-selling stocks</h5>
                    <div className="card-items">
                        <div className="watchBox">
                            <img src="/images/watch.jpg" />
                            <p className="watchName">Health Watch</p>
                            <p style={{ color: "#40A0F9" }}>{itemSKU}</p>
                        </div>
                        <div className="watchBox">
                            <img src="/images/watch.jpg" />
                            <p className="watchName">Health Watch</p>
                            <p style={{ color: "#40A0F9" }}>{itemSKU}</p>
                        </div>
                    </div>
                    <p className="view">View more...</p>
                </div>

                <div className="card-alert expiring">
                    <h5>Almost expiring</h5>
                    <div className="card-items">
                        <div className="watchBox">
                            <img src="/images/watch.jpg" />
                            <p className="watchName">Health Watch</p>
                            <p style={{ color: "#40A0F9" }}>{itemSKU}</p>
                        </div>
                        <div className="watchBox">
                            <img src="/images/watch.jpg" />
                            <p className="watchName">Health Watch</p>
                            <p style={{ color: "#40A0F9" }}>{itemSKU}</p>
                        </div>
                    </div>
                    <p className="view">View more...</p>
                </div>

                <div className="card-alert soldOut">
                    <h5>Nearly sold out</h5>
                    <div className="soldOut-items">
                        <div className="beanieBox">
                            <img src="/images/hat.jpg" />
                            <div className="beanieText">
                                <p className="beanieName">Black Beanie</p>
                                <p style={{ color: "#40A0F9", fontSize: "0.85em" }}>{itemSKU}</p>
                            </div>
                            <div className="beanieText">
                                <p className="remaining">Remaining stock</p>
                                <p style={{ color: "#FFC107", fontWeight: "bold" }}>200</p>
                            </div>
                        </div>
                        <div className="beanieBox">
                            <img src="/images/hat.jpg" />
                            <div className="beanieText">
                                <p className="beanieName">Black Beanie</p>
                                <p style={{ color: "#40A0F9", fontSize: "0.85em" }}>{itemSKU}</p>
                            </div>
                            <div className="beanieText">
                                <p className="remaining">Remaining stock</p>
                                <p style={{ color: "#FFC107", fontWeight: "bold" }}>200</p>
                            </div>
                        </div>
                    </div>
                    <p className="view">View more...</p>
                </div>
                
            </div>


            {/*Go Green*/}
            <div className="greenWays">
                <h2 className="mb-4" style={{fontWeight: "700"}}>Find ways to go green</h2>

                <div className="greenOptions">
                    <div className="greenOption">
                        <img src="/images/renewable.png" />
                        <h5 style={{fontWeight: "700"}}>Donate low selling stocks</h5>
                        <p>Donate your low-selling inventory surplus to make a positive impact on the world, save on taxes, and do good for your business and community. This reduces waste, frees up storage space, makes a difference in people's lives, and earns you tax deductions.</p>
                        <button type="button" className="greenButton">Find organizations</button>
                    </div>

                    <div className="greenOption">
                        <img src="/images/recycleBin.png" />
                        <h5 style={{fontWeight: "700"}}>Source sustainably</h5>
                        <p>Reduce your business’s carbon footprint by sourcing through sustainable suppliers. Communicate your commitment to sustainability, set goals for suppliers, and conduct audits for compliance. By doing so, you can improve your brand reputation, increase customer loyalty, and create a better future for our planet.</p>
                        <button type="button" className="greenButton">Find suppliers</button>
                    </div>

                    <div className="greenOption">
                        <img src="/images/electric.png"/>
                        <h5 style={{fontWeight: "700"}}>Don't overstock</h5>
                        <p>Track your inventory through our analytics. Restock when stock levels are low and find alternatives for distributing or repurposing underperforming stocks. Organize a discounted sale and get notified before products expire.</p>
                        <button type="button" className="greenButton">Organize a sale</button>
                    </div>
                </div>
            </div>


        </div>
    )
}