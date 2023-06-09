import React from 'react';
import "../../css/dashboard.css";
import Calendar from 'moedim';
import { fetchUser } from '../api/fetchUser';
import { useEffect, useState } from 'react';

export default function DashBoard() {
    const [name, setName] = useState();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const fetch = async () => {
            const user = await fetchUser(token);
            console.log(user.user);
            setName(user.user.name);
        }
        fetch();
    }, [])
    //Info Boxes Data
    const boxes = [
        {
            title: "Inventory turnover rate",
            amount: "2.1"
        },
        {
            title: "Average Inventory",
            amount: "$12,324"
        },
        {
            title: "Cost of goods sold",
            amount: "$4,324"
        },
        {
            title: "Service Level",
            amount: "97.5%"
        },
        {
            title: "Days left in Rotation",
            amount: "24"
        },
        {
            title: "Profit",
            amount: "$7.4k"
        },
        {
            title: "Orders completed",
            amount: "114"
        },
        {
            title: "Rate of Return",
            amount: "2.4%"
        }
    ]

    //Product Table Data
    const products = [
        [
            "", "PRODUCT", "ITEMS", "PRICE", "STATUS", "ACTION"
        ],
        [
            "/images/shoe.jpg", { name: "Shoe", SKU: "BD-76854335" }, 324, "89.99", "In Stock", "Out of stock"
        ],
        [
            "/images/hat.jpg", { name: "Hat", SKU: "BD-76854336" }, 231, "19.99", "In Stock", ""
        ],
        [
            "/images/watch.jpg", { name: "Watch", SKU: "BD-76854337" }, 197, "119.99", "In Stock", ""
        ]
    ];


    return (
        <div className="dashboard container">
            {/*Header*/}
            <header className="dashHeader">
                <div className="dashTitle">
                    <i className="bi bi-pip" style={{ transform: "scaleY(-1) translateY(-20%) scale(2.5)" }}></i>
                    <h2>Dashboard</h2>
                </div>
                <div className="user">
                    <i className="bi bi-bell bell"></i>
                    <i className="bi bi-search magnify"></i>
                    <i className="bi bi-person-circle avatar"></i>
                </div>
            </header>
            <hr />


            {/*Content*/}
            <div className="content">


                {/*Sub Header*/}
                <div className="subHeader mb-5">
                    <div className="welcome">
                        <h2>Welcome {name}!</h2>
                        <select className="warehouse">
                            <option>Choose a warehouse</option>
                        </select>
                    </div>
                    <div className="subButtons">
                        <button type="button" className="dashlet">Add Dashlet +</button>
                        <button type="button" className="export">Export</button>
                        <select className="period">
                            <option>Period: This month</option>
                            <option>Period: April</option>
                            <option>Period: March</option>
                        </select>
                    </div>
                </div>


                {/* Info Boxes */}
                <div className="info container mt-4 mb-4">
                    {
                        boxes && boxes.map((box, i) => {
                            return (
                                <div key={i} className="box">
                                    <p>{box.amount}</p>
                                    <p>{box.title}</p>
                                </div>
                            )
                        })
                    }
                </div>



                {/*Product Table*/}
                <div className="topSales">
                    <h2 className="mb-3">Top Selling Items</h2>

                    <div className="productTable mb-5">

                        <table className="table table-sm">
                            {
                                products.map((product, i) => {
                                    if (i === 0) {
                                        return (
                                            <thead key={i + 10}>
                                                <tr>
                                                    {
                                                        product.map(title => {
                                                            return (
                                                                <th key={title}>{title}</th>
                                                            );
                                                        })
                                                    }
                                                </tr>
                                            </thead>
                                        );
                                    } else {
                                        return (
                                            <tbody key={i}>
                                                <tr>
                                                    {
                                                        product.map((row, j) => {
                                                            if (j === 0) {
                                                                return (
                                                                    <th key={j + 30}><img style={{ maxWidth: "4.4em" }} src={row} /></th>
                                                                );
                                                            } else if (j === 1) {
                                                                return (
                                                                    <td key={j + 40}>
                                                                        <p>{row.name}</p>
                                                                        <p style={{ color: "#40A0F9" }}>{row.SKU}</p>
                                                                    </td>
                                                                );
                                                            } else if (j === 4) {
                                                                return (
                                                                    <td key={j + 50}>
                                                                        <div className="statusBox">{row}</div>
                                                                    </td>
                                                                );
                                                            } else if (j === 5 && row != "") {
                                                                return (
                                                                    <td key={j + 60}>
                                                                        <div className="actionBox">{row}</div>
                                                                    </td>
                                                                );
                                                            } else {
                                                                return (
                                                                    <td key={j + 70}>{row}</td>
                                                                );
                                                            };
                                                        })
                                                    }
                                                </tr>
                                            </tbody>
                                        );
                                    };
                                })
                            }
                        </table>
                    </div>
                </div>


                <div className="topRow">
                    {/* Alerts */}
                    <div className="alerts card">
                        <div className="card-body">
                            <h5 className="card-title">Alerts</h5>
                            <div className="card-text">
                                <p>Low stock items <span>21</span></p>
                                <hr />
                                <p>Expiring products <span>12</span></p>
                                <hr />
                                <p>Almost sold out <span>04</span></p>
                            </div>
                        </div>
                    </div>


                    {/*No. of Users*/}
                    <div className="users card">
                        <div className="card-body">
                            <h5 className="card-title">No. of Users</h5>
                            <div className="hstack card-text p-2">
                                <div className="usersBox">
                                    <h6>2.3k</h6>
                                    <i className="bi bi-emoji-laughing"></i>
                                    <p>Customers</p>
                                </div>
                                <div className="usersBox">
                                    <h6>15</h6>
                                    <i className="bi bi-people"></i>
                                    <p>Team</p>
                                </div>
                                <div className="usersBox">
                                    <h6>32</h6>
                                    <i className="bi bi-person-lines-fill"></i>
                                    <p>Suppliers</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/*Purchase Overview*/}
                    <div className="purchases card">
                        <div className="card-body">
                            <h5 className="card-title">Purchase Overview</h5>
                            <div className="purchaseContent">
                                <div className="purchaseBox">
                                    <div className="vstack">
                                        <h6>28</h6>
                                        <p>Purchases</p>
                                    </div>
                                    <div className="bag">
                                        <i className="bi bi-bag-check-fill"></i>
                                    </div>
                                </div>
                                <div className="purchaseBox">
                                    <div className="vstack">
                                        <h6>28</h6>
                                        <p>Returned</p>
                                    </div>
                                    <div className="return vstack">
                                        <i style={{ transform: "rotate(180deg) scale(1.3)", transformOrigin: "40% 60%" }} className="bi bi-arrow-return-right"></i>
                                        <i className="bi bi-cash"></i>
                                    </div>
                                </div>
                                <div className="purchaseBox">
                                    <div className="vstack">
                                        <h6>10</h6>
                                        <p>Canceled</p>
                                    </div>
                                    <div className="cancel">
                                        <i className="bi bi-bag-x"></i>
                                    </div>
                                </div>
                                <div className="purchaseBox">
                                    <div className="vstack">
                                        <h6>28</h6>
                                        <p>Delivered</p>
                                    </div>
                                    <div className="delivered">
                                        <i className="bi bi-box-seam"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottomRow gap-5">
                    {/*Sales Overview*/}
                    <div className="sales card mt-5">
                        <div className="card-body">
                            <h4 className="card-title">Sales Overview</h4>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <td></td>
                                        <td>PRODUCT</td>
                                        <td># OF ITEMS</td>
                                        <td>SALES</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            <img src={products[1][0]} style={{ maxWidth: "3em" }} />
                                        </th>
                                        <td>
                                            <p>{products[1][1].name}</p>
                                            <p style={{ color: "#40A0F9" }}>{products[1][1].SKU}</p>
                                        </td>
                                        <td>324</td>
                                        <td><i className="bi bi-file-excel"></i></td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <img src={products[1][0]} style={{ maxWidth: "3em" }} />
                                        </th>
                                        <td>
                                            <p>{products[1][1].name}</p>
                                            <p style={{ color: "#40A0F9" }}>{products[1][1].SKU}</p>
                                        </td>
                                        <td>231</td>
                                        <td><i className="bi bi-file-excel"></i></td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <img src={products[1][0]} style={{ maxWidth: "3em" }} />
                                        </th>
                                        <td>
                                            <p>{products[1][1].name}</p>
                                            <p style={{ color: "#40A0F9" }}>{products[1][1].SKU}</p>
                                        </td>
                                        <td>197</td>
                                        <td><i className="bi bi-file-excel"></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    {/*Calender*/}
                    <div className="mt-5">
                        <Calendar className="calendar p-5" />
                    </div>

                </div>

            </div>

        </div>
    )
};
